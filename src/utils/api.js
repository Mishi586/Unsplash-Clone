import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ZheVlg0x0Xt-1t6XytFqjECw_vvKpynsZgpKrdkFNHA',
    },
});

export default api;
