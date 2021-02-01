import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: 'Chama chama', duration: '4.05'},
        {title: 'DJ wale babu', duration: '3:25'},
        {title: 'Shela ki jawani', duration: '4:22'},
        {title: 'Ek kudi', duration: '1:45'}
    ];
};



const selectedSongReducer = (selectedSong = null, action)  => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } 
    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});