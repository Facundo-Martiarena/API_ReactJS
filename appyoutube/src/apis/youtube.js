import axios from 'axios';
const KEY = 'AIzaSyC7FFOvav1EL9zXWfBlNMy-SehB4ebseXQ';

//AXIOS: Libreria que me permite hacer operaciones como cliente HTTP. Hacemos solicitudes a un servidor y recibimos respuestas fáciles. 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:3,
        key: KEY
    }
})