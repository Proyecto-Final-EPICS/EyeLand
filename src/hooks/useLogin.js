import { useState, useCallback } from 'react';
import useAuthStorage from './useAuthStorage';
import axios from 'axios';

import { environment } from '../environment/environment';

const useLogin = () => {
    const authStorage = useAuthStorage();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const login = useCallback(async ({ username, password }) => {
        setLoading(true);
        try {
            const response = await axios.post(`${environment.apiUrl}/login`, {
                username: username,
                password: password,
            }, {
                timeout: 10000,
            });

            if (response.status === 200) {
                setLoading(false);
                setData(response.data);
                authStorage.setAccessToken(response.data.token);
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
                case 403:
                    setError('Usuario o contraseña incorrectos');
                    break;
                default:
                    setError('Un error ha ocurrido');
                    break;
            }
        }
    }, []);

    return { loading, error, data, login };
};

export default useLogin;


