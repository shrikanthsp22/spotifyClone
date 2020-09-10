// client id: c5b7acc356c147ec876ce59682a304e5
//secret id: 9d8fb08963fd488984bd085c7da996b4

const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";


const clientId = "c5b7acc356c147ec876ce59682a304e5"


export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

// export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//     "%20"
// )}&response_type=token&show_dialog=true`;