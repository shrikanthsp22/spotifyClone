import React from 'react'
import './body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import DisoverWeekly from './images/discoverweekly.jfif'
import SongRow from './SongRow';


export default function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };
    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                {/* <img src={discover_weekly?.images[0]?.url} alt="" /> */}
                <img src={DisoverWeekly} alt="discoverweekly" />
                <div className="body__infotext">
                    <strong> PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        onClick={playPlaylist}
                        className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {
                    discover_weekly?.tracks.items.map((item) => (
                        <SongRow playSong={playSong} track={item.track} />
                    ))
                }
            </div>
        </div>
    )
}