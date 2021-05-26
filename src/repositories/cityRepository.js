const config = require('../config');
const axios = require('axios');

class CityRepository {
    
    constructor() {

        this.limit = 10;
        this.language = 'es';
        this.pathBase = config.mapbox.pathBase;
        this.apiKey = config.mapbox.apikey;
    }

    async findCities(city) {

        //throw new Error('Error de prueba');

        try {
            
            const instance = axios.create({
                baseURL: `${ this.pathBase }${ city }.json`,
                params: {
                    'access_token': this.apiKey,
                    'limit': this.limit,
                    'language': this.language
                }
            });
    
            const response = await instance.get();
    
            return response.data;

        } catch (error) {

            throw error;
        }

    }
}

module.exports = CityRepository;