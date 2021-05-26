const express = require('express'); //*** */
const Success = require('../handlers/successHandlers');
const { findCities } = require('../services/cityService');

const logger = require('../loaders/logger');

// GET
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const cities = async (req, res, next) => {      // con next pasa error a _errorHandler para enviar la respuesta de error al cliente

    try {
        const cities = await findCities(req.params.city);
        const success = new Success(cities);
    
        res.json(success);

    } catch (err) {

        next(err);

    }
};

module.exports = {
    cities
}