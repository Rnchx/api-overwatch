import axios from 'axios';

const URL_API = 'https://overfast-api.tekrop.fr?language=pt-BR';

const overwatch = async () => {
    try {
        const result = await axios.get(URL_API);
        return result.data;
    } catch (error) {
        throw error;
    }
}

export default overwatch;