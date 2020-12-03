const LOGISTIC_ENDPOINT = 'logistic';
const LOGISTIC_ENDPOINT_2 = 'logistic2';
let Project1Model = require('./project1Model.js');
const Project2Model = require("./project2Model");
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
            let keyPair = key.split("_");
            model.transport(keyPair[0], keyPair[1], value);
        }
        let solverData = solver.Solve(model)
        let result = {
            income: 0,
            cost: 0,
            transport: 0,
            result: solverData.result,
            trans: {d1_o1: 0, d1_o2: 0, d2_o1: 0, d2_o2: 0, d3_o1: 0, d3_o2: 0},
            trans2: {d1_o1: 0, d1_o2: 0, d2_o1: 0, d2_o2: 0, d3_o1: 0, d3_o2: 0}
        };
        for (const [key, value] of Object.entries(model.variables)) {
            result.trans2[key] = model.variables[key].gain;
        }
        for (const [key, value] of Object.entries(solverData)) {
            let keyPair = key.split("_");
            if (keyPair.length > 1) {
                result.income += value * parsedData["cenasprz"][keyPair[1]];
                result.cost += value * parsedData["cenazak"][keyPair[0]];
                result.transport += value * parsedData["trans"][key];
                result.trans[key] = value;

            }
        }
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
};

module.exports = function (router) {
    router.get(`/${LOGISTIC_ENDPOINT_2}`, (req, res) => {
        let parsedData = JSON.parse(req.query.q)
        let model = new Project2Model();
        model.nodes(parsedData.nodes)
        model.arrows(parsedData.arrows)
        model.build()
        let solverData = solver.Solve(model)
        console.log(JSON.stringify(solverData));
        res.send(JSON.stringify(solverData));
    })
};
