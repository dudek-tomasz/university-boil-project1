let Project2Model = require('./project2Model.js');
let solver = require("javascript-lp-solver"),
    results

let modelTst = new Project2Model()
modelTst.inNode("1", 250)
modelTst.inNode("2", 300)
modelTst.outNode("3", 120)
modelTst.outNode("4", 250)
modelTst.outNode("5", 100)
modelTst.node("6")
modelTst.arrow("1", "3", 3, {"min": 30, "max": 50})
modelTst.arrow("1", "6", 5, {"max": 150})
modelTst.arrow("2", "1", 2)
modelTst.arrow("2", "6", 6)
modelTst.arrow("2", "5", 2)
modelTst.arrow("3", "4", 8)
modelTst.arrow("4", "5", 4)
modelTst.arrow("6", "3", 5)
modelTst.arrow("6", "4", 4)
modelTst.arrow("6", "5", 1)
modelTst.build()

results = solver.Solve(modelTst);
console.log(results);
