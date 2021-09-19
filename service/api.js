import axios from 'axios';

const url = "http://localhost:8001/api/cards";

export const getHosp = async () => {
    return await axios.get(url);
}
