import { BASE_API } from '../utils/constants'

export async function loginApi(formData) {
    try {
        const url = `${BASE_API}/api/auth/login`
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };

        const response = await fetch(url, params)

        if (response.status !== 200) {
            throw new Error("cayo pedo")
        }

        const result = await response.json();
        return result
    } catch (error) {
        throw error
    }
}

export async function getMeApi(token) {
    try {
        const url = `${BASE_API}/api/auth/me`;
        const params = {
            headers: {
                authorization: `Bearer ${token}`
            },
        }

        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error
    }
}

export async function getUserApi(token) {
    try {
        const url = `${BASE_API}/api/users/`;
        const params = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error
    }
}