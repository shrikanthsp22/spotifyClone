import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import spotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new spotifyWebApi();

function App() {
  // const [token, setToken] = useState('');
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ''
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlist: playlists
        })
      })
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, [])

  return (
    <div>
      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }

    </div>
  );
}

export default App;
