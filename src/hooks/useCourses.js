import { useState, useCallback } from 'react';
import useAuthStorage from './useAuthStorage';
import axios from 'axios';

import { environment } from '../environment/environment';

const useCourses = () => {
    const authStorage = useAuthStorage();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const getCourses = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${environment.apiUrl}/courses`, {
                headers: {
                    Authorization: `Bearer ${authStorage.getAccessToken()}`,
                }
            }, {
                timeout: 10000,
            });

            if (response.status === 200) {
                setLoading(false);
                setData(response.data);
                return response.data;
            } else {
                throw new Error(response.data);
            }
        } catch (err) {
            setLoading(false);
            switch (err?.response?.status) {
                case 400:
                    setError('Usuario o contraseña incorrectos');
                    break;
                case 401:
                    setError('Token no enviado');
                    break;
                case 403:
                    setError('Usuario o contraseña incorrectos');
                    break;
                default:
                    setError('Un error ha ocurrido');
                    break;
            }
        }
    }, []);

    const getCourse = useCallback(async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(`${environment.apiUrl}/courses/${id}`, {
                headers: {
                    Authorization: `Bearer ${authStorage.getAccessToken()}`,
                }
            }, {
                timeout: 10000,
            });

            if (response.status === 200) {
                setLoading(false);
                setData(response.data);
                return response.data;
            } else {
                throw new Error(response.data);
            }
        } catch (err) {
            setLoading(false);
            switch (err?.response?.status) {
                case 400:
                    setError('Usuario o contraseña incorrectos');
                    break;
                case 401:
                    setError('Token no enviado');
                    break;
                case 403:
                    setError('Usuario o contraseña incorrectos');
                    break;
                default:
                    setError('Un error ha ocurrido');
                    break;
            }
        }
    }, []);

    return { loading, error, data, getCourses, getCourse };
}

export default useCourses;