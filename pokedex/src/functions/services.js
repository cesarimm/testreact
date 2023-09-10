import axios from 'axios';

const axiosInstance = () => {
    const instance = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/',
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return instance;
};

const get = async (endpoint, params) => {
    try {
        const response = await axiosInstance().get(endpoint, { params });
        return response;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export { get };
