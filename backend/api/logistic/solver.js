let Project2Model = require('./project2Model.js');
let solver = require("javascript-lp-solver"),
    results

let modelTst = new Project2Model()
modelTst.node("1", {in: 250})
modelTst.node("2", {in: 300})
modelTst.node("3", {out: 120})
modelTst.node("4", {out: 250})
modelTst.node("5", {out: 100})
modelTst.node("6")
modelTst.arrow("1_3", 3, {min: 30, max: 50})
modelTst.arrow("1_6", 5, {max: 150})
modelTst.arrow("2_1", 2)
modelTst.arrow("2_6", 6)
modelTst.arrow("2_5", 2)
modelTst.arrow("3_4", 8)
modelTst.arrow("4_5", 4)
modelTst.arrow("6_3", 5)
modelTst.arrow("6_4", 4)
modelTst.arrow("6_5", 1)
modelTst.build()

results = solver.Solve(modelTst);
console.log(results);
