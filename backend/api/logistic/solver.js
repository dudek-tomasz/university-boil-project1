let Project1Model = require('./project1Model.js');
let solver = require("javascript-lp-solver"),
    results,
    model = new Project1Model();

model.supplier("D1", 45, 6)
model.supplier("D2", 25, 7)
model.recipient("O1", 30, 12)
model.recipient("O2", 30, 13)
model.transport("D1", "O1", 7)
model.transport("D1", "O2", 4)
model.transport("D2", "O1", 3)
model.transport("D2", "O2", 5)
results = solver.Solve(model);
console.log(results);