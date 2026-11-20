"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { getRecording } from "@/data/recordings";
import { usePlayer } from "./PlayerProvider";

// A light player of its own, for playing a recording in place (the language
// chips) without touching the hero player. It still plays nicely with the
// hero: starting a clip here pauses the hero, and playing the hero stops this.
// Returns { playingId, toggle(recordingId) }.
export default function useClipPlayer() {
    const hero = usePlayer();
    const audioRef = useRef(null);
    const [playingId, setPlayingId] = useState(null);

    const stop = useCallback(() => {
        audioRef.current?.pause();
        setPlayingId(null);
    }, []);

    const toggle = useCallback((id) => {
        if (id === playingId) return stop();
        audioRef.current?.pause();
        hero.pause();
        const audio = new Audio(getRecording(id).src);
        audio.addEventListener("ended", () => setPlayingId(null));
        audioRef.current = audio;
        setPlayingId(id);
        audio.play().catch(() => setPlayingId(null));
    }, [playingId, stop, hero]);

    // The hero started playing: give way.
    useEffect(() => { if (hero.state.playing) stop(); }, [hero.state.playing, stop]);

    // Leaving the page: don't keep playing in the background.
    useEffect(() => () => audioRef.current?.pause(), []);

    return { playingId, toggle };
}
