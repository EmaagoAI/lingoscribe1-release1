"use client";
import { useCallback, useEffect, useRef } from "react";

// Moves the hero lens (the --mx / --my of the element in `ref`):
//   - by itself it drifts along one of PATHS; at the end of each loop it picks
//     another at random, so the route keeps changing;
//   - follow(e) puts it under a mouse pointer and stops the drift;
//   - release() glides it back to the nearest point on its path and drifts on from there.
// Touch is ignored, so on phones it simply keeps drifting.

const LOOP_MS = 22000;
const GLIDE_MS = 900;
// Routes the lens can take, in % of the hero, and when (0..1 of the loop).
// They keep clear of the headline (the middle of the hero): along the top,
// down the sides and through the gap above the player. All start and end at
// the same point, so one runs straight into the next.
const PATHS = [
    [
        { at: 0, x: 86, y: 22 }, { at: 0.18, x: 92, y: 56 }, { at: 0.38, x: 50, y: 73 },
        { at: 0.56, x: 12, y: 62 }, { at: 0.74, x: 12, y: 18 }, { at: 0.88, x: 50, y: 8 }, { at: 1, x: 86, y: 22 },
    ],
    [
        { at: 0, x: 86, y: 22 }, { at: 0.15, x: 62, y: 9 }, { at: 0.32, x: 24, y: 11 },
        { at: 0.5, x: 9, y: 44 }, { at: 0.66, x: 30, y: 68 }, { at: 0.82, x: 70, y: 68 }, { at: 1, x: 86, y: 22 },
    ],
    [
        { at: 0, x: 86, y: 22 }, { at: 0.2, x: 78, y: 66 }, { at: 0.36, x: 50, y: 73 },
        { at: 0.52, x: 18, y: 68 }, { at: 0.7, x: 8, y: 30 }, { at: 0.85, x: 36, y: 8 }, { at: 1, x: 86, y: 22 },
    ],
];
const EASE = "cubic-bezier(.45,0,.55,1)"; // ease-in-out, for each leg of the path
const keyframes = (path) => path.map((p) => ({ offset: p.at, easing: EASE, "--mx": `${p.x}%`, "--my": `${p.y}%` }));
// Any path but the current one.
const another = (i) => (i + 1 + Math.floor(Math.random() * (PATHS.length - 1))) % PATHS.length;

const calm = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function useLensDrift() {
    const ref = useRef(null);
    const following = useRef(false);
    const route = useRef(0);

    const stop = () => ref.current?.getAnimations().forEach((a) => a.cancel());

    // Drift once along the current path, starting `from` (0..1) into it, then
    // carry on along another.
    const drift = useCallback(function run(from = 0) {
        const el = ref.current;
        if (!el || calm()) return;
        const loop = el.animate(keyframes(PATHS[route.current]), { duration: LOOP_MS, delay: -from * LOOP_MS });
        loop.onfinish = () => {
            if (following.current) return;
            loop.cancel();
            route.current = another(route.current);
            run(0);
        };
    }, []);

    useEffect(() => {
        route.current = Math.floor(Math.random() * PATHS.length);
        drift(0);
        return stop;
    }, [drift]);

    const follow = useCallback((e) => {
        const el = ref.current;
        if (!el || e.pointerType !== "mouse") return;
        if (!following.current) { stop(); following.current = true; }
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${Math.round(e.clientX - r.left)}px`);
        el.style.setProperty("--my", `${Math.round(e.clientY - r.top)}px`);
    }, []);

    const release = useCallback((e) => {
        const el = ref.current;
        if (!el || e.pointerType !== "mouse" || !following.current) return;
        following.current = false;
        const r = el.getBoundingClientRect();
        const x = (100 * parseFloat(el.style.getPropertyValue("--mx"))) / r.width;
        const y = (100 * parseFloat(el.style.getPropertyValue("--my"))) / r.height;
        el.style.removeProperty("--mx");
        el.style.removeProperty("--my");
        if (calm()) return;
        // nearest point on the path, then glide there and drift on
        const near = PATHS[route.current].slice(0, -1).reduce((a, p) => (Math.hypot(p.x - x, p.y - y) < Math.hypot(a.x - x, a.y - y) ? p : a));
        const glide = el.animate(
            [{ "--mx": `${x}%`, "--my": `${y}%` }, { "--mx": `${near.x}%`, "--my": `${near.y}%` }],
            { duration: GLIDE_MS, easing: EASE, fill: "forwards" },
        );
        glide.onfinish = () => { if (!following.current) { glide.cancel(); drift(near.at); } };
    }, [drift]);

    return { ref, follow, release };
}
