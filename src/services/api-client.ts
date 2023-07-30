import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '036b901a6a824d6fac3a372a84b7c024'
    }
})