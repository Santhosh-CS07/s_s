// apicall/index.ts

import axios, { AxiosError, AxiosResponse, Method } from 'axios';

// const apiUrl = 'http://localhost:3001';
const apiUrl = 'https://s-s-backend.vercel.app';

const endpoints = {
    createUser: `${apiUrl}/v1/users`,
    getUser: `${apiUrl}/v1/users/find`
    // Add more endpoints here as needed
};

const apiCall = async (url: string, method: Method, payload: any): Promise<any> => {
    try {
        const response: AxiosResponse = await (axios[method.toLowerCase() as keyof typeof axios] as any)(url, payload);
        return response.data;
    } catch (error: any) {
        const axiosError = error as AxiosError;
        throw axiosError.response?.data || error.message;
    }
};

export { endpoints, apiCall };
