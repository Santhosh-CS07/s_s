"use client";
// components/Song.js
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Song = ({ title, src }: any) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef: any = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex items-center justify-between bg-gray-800 text-white p-4 rounded-lg mb-2">
            <div>
                <h2 className="text-lg font-bold">{title}</h2>
            </div>
            <div>
                <audio ref={audioRef} src={src}></audio>
                <button className="p-2 bg-blue-500 rounded-full" onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
            </div>
        </div>
    );
};

export default Song;
