import axios from 'axios';
import api from './config';

export async function updateStatus(data: any){
    try {
        const request = await api.put('/tasks', data)

        return request;
    } catch (error) {
        return null
    }
}

export async function inserTaks(data: any) {
    try {
        const request = await api.post('/tasks', data)

        return request
    } catch (error) {
        return null
    }
}

export async function deleteOk() {
    try {
        const request = await api.delete('/tasks')

        return request
    } catch (error) {
        return null
    }
}