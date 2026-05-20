import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

export const fetchTenantProfile = async () => {
    const response = await api.get(
        '/api/tenants/demo/profile'
    );

    return response.data.data;
};