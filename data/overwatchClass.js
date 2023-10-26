import axios from 'axios';

const URL_API_Heroes = 'https://overfast-api.tekrop.fr/heroes';
const URL_API_Roles = 'https://overfast-api.tekrop.fr/roles';
const URL_API_GameModes = 'https://overfast-api.tekrop.fr/gamemodes';

const overwatch = async () => {
    try {
        const result = await axios.get(URL_API_Heroes + '?locale=pt-br');
        return result.data;
    } catch (error) {
        throw error;
    }
}

export const roles = async () => {
    try {
        const result = await axios.get(URL_API_Roles + '?locale=pt-br');
        return result.data;
    } catch (error) {
        throw error;
    }
}

export const gamemodes = async () => {
    try {
        const result = await axios.get(URL_API_GameModes + '?locale=pt-br');
        return result.data;
    } catch (error) {
        throw error;
    }
}

export const agent = async (nome) => {
    try {
        const result = await axios.get(URL_API_Heroes + '/' + nome + '?locale=pt-br');
        console.log(result.data)
        return result.data;
    } catch (error) {
        throw error;
    }
}

export default overwatch;