import React from 'react';
import './SideBar.css'
import Sidebaroptions from './SidebarOptions';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
// const icon = <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor"></path></svg>

export default function Sidebar() {
    const [{ playlist }, dispatch] = useDataLayerValue();
    // console.log("playlists", playlists);
    return (
        <div className="sidebar">
            <img className="sidebarLogo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
            <Sidebaroptions Icon={HomeIcon} title="Home" />
            <Sidebaroptions Icon={SearchIcon} title="Search" />
            <Sidebaroptions Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {
                playlist?.items?.map(playlist => (
                    <Sidebaroptions title={playlist.name} />
                ))
            }
        </div>
    )
}



const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}