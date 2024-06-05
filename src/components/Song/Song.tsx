"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaDownload } from 'react-icons/fa';

const Song = ({ title, src }: any) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef: any = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
        return () => {
            // Clean up the audio object when the component is unmounted
            audioRef.current.pause();
            audioRef.current = null;
        };
    }, [src]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = src;
        link.download = `${title}.mp3`;
        link.click();
    };

    return (
        <div className="flex items-center justify-between bg-gray-800 text-white p-4 rounded-lg mb-2">
            <div>
                <h2 className="text-lg font-bold">{title}</h2>
            </div>
            <div>
                {/* <audio ref={audioRef} src={src}></audio> */}
                {/* <button className="p-2 bg-blue-500 rounded-full" onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button> */}
                <button className="p-2 bg-gray-500 rounded-full ml-2" onClick={handleDownload}>
                    <FaDownload />
                </button>
            </div>
        </div>
    );
};

export default Song;
