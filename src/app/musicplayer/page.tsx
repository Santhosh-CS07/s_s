
"use client";
import React from 'react';
import Song from '../../components/Song/Song';

const songs = [
    { title: 'Ammaina Nannaina', src: '/music/Ammaina Nannaina-SenSongsMp3.Co.mp3' },
    { title: 'Chali Chaliga', src: '/music/Chali Chaliga.mp3' },
    { title: 'sample 1', src: '/music/file_example_OOG_1MG.ogg' },
    { title: 'sample 2', src: '/music/file_example_WAV_1MG.wav' },
    { title: 'sample 3', src: '/music/sample1.AAC' }
    // Add more songs as needed
];

const MusicPlayer = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white py-44">
            <h1 className="text-2xl font-bold mb-4">List items </h1>
            <div className="w-full max-w-md">
                {songs.map((song, index) => (
                    <Song key={index} title={song.title} src={song.src} />
                ))}
            </div>
        </div>
    );
};

export default MusicPlayer;

// "use client";
// import React, { useState } from 'react';

// const Page = () => {
//     const [musicData, setMusicData] = useState(null) as any;
//     const [query, setQuery] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const fetchData = async (searchQuery: any) => {
//         const url = `https://spotify23.p.rapidapi.com/search/?q=${searchQuery}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': '23536740camshabc5aac1698ef0fp125201jsn6b292ea0ce49',
//                 'x-rapidapi-host': 'spotify23.p.rapidapi.com'
//             }
//         };

//         try {
//             setIsLoading(true);
//             const response = await fetch(url, options);
//             const result = await response.json();
//             setMusicData(result.albums.items);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleSearch = (e: any) => {
//         e.preventDefault();
//         fetchData(query);
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <form onSubmit={handleSearch} className="mb-4">
//                 <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Search for music"
//                     className="border p-2 rounded w-full"
//                 />
//                 <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2 w-full">Search</button>
//             </form>
//             {isLoading ? (
//                 <div>Loading...</div>
//             ) : (
//                 musicData && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {musicData.map((album: any, index: any) => (
//                             <div key={index} className="border p-4 rounded shadow-lg">
//                                 <img
//                                     src={album.data.coverArt.sources[0].url}
//                                     alt={album.data.name}
//                                     className="w-full h-64 object-cover rounded"
//                                 />
//                                 <h2 className="text-xl font-bold mt-2">{album.data.name}</h2>
//                                 <p className="text-gray-700">{album.data.artists.items[0].profile.name}</p>
//                                 <p className="text-gray-500">{album.data.date.year}</p>
//                                 <button
//                                     onClick={() => window.open(`https://open.spotify.com/album/${album.data.uri.split(':')[2]}`, '_blank')}
//                                     className="bg-green-500 text-white p-2 rounded mt-2 w-full"
//                                 >
//                                     Play on Spotify
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default Page;
