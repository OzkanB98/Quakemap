import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { Earthquakes } from "./types/Earthquake";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

export const getEarthquakes = async () => {
    const response = await instance.get<Earthquakes>('');
    return response.data;
}