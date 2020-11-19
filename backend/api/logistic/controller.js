const LOGISTIC_ENDPOINT = 'logistic';

const axios = require('axios');
const mpApiKey = "M9Qntv49w1krix7eIBh";

module.exports = function (router) {
    router.get(`/${LOGISTIC_ENDPOINT}`, async ({query}, res, next) => {
        axios({
            url: 'https://www.materialsproject.org/rest/v2/materials/Fe2O3/vasp/',
            method: 'get',
            params: {
                grant_type: 'client_credentials'
            },
            headers: {
                'Accept': 'application/json',
                'x-api-key': mpApiKey
            }
        })
            .then((response) => {
                let materialsProperties = [];
                let results = response.data.response;
                results.forEach(el => {
                    let material = {};
                    material.prettyFormula = el.pretty_formula;
                    materialsProperties.push(material)
                })
                console.log(materialsProperties);
                res.send(materialsProperties);
                res.status(200);
            })
            .catch(function (error) {
            });
    });

};
