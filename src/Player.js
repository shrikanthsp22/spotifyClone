import React from 'react'
import Sidebar from './SideBar';
import './Player.css';
import Body from './Body';
import Footer from './Footer';

function Player({ spotify }) {
    return (
        <div>
            <div className="player">
                <div className="player__body">
                    <Sidebar />
                    <Body spotify={spotify} />
                </div>

            </div>
            {/* Footer */}
            <Footer spotify={spotify} />

        </div>
    )
}

export default Player;
