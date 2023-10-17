import axios from 'axios';

const URL_API_Heroes = 'https://overfast-api.tekrop.fr/heroes';
const URL_API_Roles = 'https://overfast-api.tekrop.fr/roles';
const URL_API_GameModes = 'https://overfast-api.tekrop.fr/gamemodes';

const overwatch = async () => {
    try {
        const result = await axios.get(URL_API_Heroes);
        return result.data;
    } catch (error) {
        throw error;
    }
}

export const roles = async () => {
    try {
        const result = await axios.get(URL_API_Roles);
        return result.data;
    } catch (error) {
        throw error;
    }
}

export const gamemodes = async () => {
    try {
        const result = await axios.get(URL_API_GameModes);
        return result.data;
    } catch (error) {
        throw error;
    }
}

export const agent = async (nome) => {
    try {
        const result = await axios.get(URL_API_Heroes + '/' + nome);
        return result.data;
    } catch (error) {
        throw error;
    }
}

export default overwatch;