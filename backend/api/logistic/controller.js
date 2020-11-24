const LOGISTIC_ENDPOINT = 'logistic';
let Project1Model = require('./project1Model.js');
let solver = require("javascript-lp-solver");

module.exports = function (router) {
    router.get(`/${LOGISTIC_ENDPOINT}`, (req, res) => {
        let parsedData = JSON.parse(req.query.q)
        let model = new Project1Model();

        for (const [key, value] of Object.entries(parsedData["pod"])) {
            model.supplier(key, value, parsedData["cenazak"][key]);
        }
        for (const [key, value] of Object.entries(parsedData["pop"])) {
            model.recipient(key, value, parsedData["cenasprz"][key]);
        }
        for (const [key, value] of Object.entries(parsedData["trans"])) {
            let keyPair = key.split("|");
            model.transport(keyPair[0], keyPair[1], value);
        }
        let solverData = solver.Solve(model)
        let result = {income: 0, cost: 0, transport: 0, result: solverData.result, trans: {}};
        for (const [key, value] of Object.entries(solverData)) {
            let keyPair = key.split("|");
            if (keyPair.length > 1) {
                result.income += value * parsedData["cenasprz"][keyPair[1]];
                result.cost += value * parsedData["cenazak"][keyPair[0]];
                result.transport += value * parsedData["trans"][key];
                result.trans[key] = value;
            }
        }
        res.send(JSON.stringify(result));
    })
};
