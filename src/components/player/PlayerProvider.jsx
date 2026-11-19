"use client";
import { createContext, useCallback, useContext, useMemo, useReducer, useRef } from "react";
import { getRecording } from "@/data/recordings";
import { initialState, playerReducer } from "./playerState";

// The hero's player: holds its <audio> element and state. Other sections can
// read whether it's playing, and pause it so two clips never play at once.
const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
    const [state, dispatch] = useReducer(playerReducer, initialState);
    const audioRef = useRef(null);
    const recording = getRecording(state.recordingId);

    const pause = useCallback(() => { const a = audioRef.current; if (a && !a.paused) a.pause(); }, []);

    const actions = useMemo(() => ({
        pause,
        toggle() {
            const a = audioRef.current;
            if (!a) return;
            if (a.paused) a.play().catch(() => dispatch({ type: "pause" }));
            else a.pause();
        },
        // Jump to a time (seconds) and play from there.
        seek(seconds) {
            const a = audioRef.current;
            if (!a) return;
            dispatch({ type: "seek" });
            const go = () => {
                a.currentTime = Math.max(0, Math.min(a.duration - 0.05, seconds));
                if (a.paused) a.play().catch(() => dispatch({ type: "pause" }));
            };
            if (a.readyState < 1) { a.addEventListener("loadedmetadata", go, { once: true }); a.load(); }
            else go();
        },
        // Load a clip. `auto` when the slim bar cycles by itself, so it doesn't count as the visitor's choice.
        selectRecording(id, { auto = false } = {}) { pause(); dispatch({ type: "selectRecording", id, auto }); },
        selectVariety(variety) {
            pause();
            if (variety.recording) dispatch({ type: "selectRecording", id: variety.recording });
            else dispatch({ type: "selectVariety", id: variety.id });
        },
        togglePicker: () => dispatch({ type: "togglePicker" }),
        closePicker: () => dispatch({ type: "closePicker" }),
        collapse: () => dispatch({ type: "collapse" }),
        hover: (at) => dispatch({ type: "hover", at }),
    }), [pause]);

    const value = useMemo(() => ({ state, recording, ...actions }), [state, recording, actions]);

    return (
        <PlayerContext.Provider value={value}>
            <audio ref={audioRef} src={recording.src} preload="metadata"
                onPlay={() => dispatch({ type: "play" })}
                onPause={() => dispatch({ type: "pause" })}
                onTimeUpdate={(e) => dispatch({ type: "time", time: e.currentTarget.currentTime })}
                onEnded={() => dispatch({ type: "ended" })} />
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const ctx = useContext(PlayerContext);
    if (!ctx) throw new Error("usePlayer must be used inside <PlayerProvider>");
    return ctx;
}
