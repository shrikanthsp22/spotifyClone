export const initialState = {
    user: null,
    playlist: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: ''
    // token: 'BQAQq9gAh_Q7cd5PPXswpOTaojF8ihWc1ztvqe4HnKwB4O9wuw…7CXK_wig6czN_-6mf_KI4ImFFjz_GHyRE7csITUJbxGVu1mpX'
}

const reducer = (state, action) => {
    console.log("action", action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlist: action.playlist
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists
            }
        case 'SET_SPOTIFY':
            return {
                ...state,
                top_artists: action.spotify
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            }
    }
}
export default reducer