import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ src, title }: any) => {
    const [blobUrl, setBlobUrl] = useState('');

    useEffect(() => {
        fetch(src)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setBlobUrl(url);
            });
    }, [src]);

    const handleDownload = () => {
        const link = document.createElement('a');
        const fileExtension = src.split('.').pop(); // Extract the file extension from the src
        link.href = blobUrl;
        link.download = `${title}.${fileExtension}`; // Use the extracted file extension
        link.click();
    };

    return (
        <div>
            <audio controls src={blobUrl}>
                Your browser does not support the audio element.
            </audio>
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};

export default AudioPlayer;
