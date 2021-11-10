
//const request = require('request');
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors');
const { response } = require('express');
const { parse } = require('yamljs');
const request = require('request');
// globalThis.fetch = fetch

async function getAllMovies(req, res) {
    request({
        uri: 'https://swapi.dev/api/films/',
        qs: {
           query: 'Movies'
        }
     }).pipe(res)
     res.status(StatusCodes.OK);
}

const getMovie = async (req, res) => {
    request({
        uri: `https://swapi.dev/api/films/${id}`,
        qs: {
           query: 'Movies'
        }
     }).pipe(res)
  }

module.exports = {
    getAllMovies,
    getMovie,
  }