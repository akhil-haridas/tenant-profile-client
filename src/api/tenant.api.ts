import axios from 'axios';

export const fetchTenantProfile = async () => {
    const response = await axios.get(
        'http://localhost:5000/api/tenants/demo/profile'
    );

    return response.data.data;
};