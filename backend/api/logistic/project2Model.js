class Project2Model {
    optimize = "cost";
    opType = "min";
    constraints = {};
    variables = {};
    ints = {};
    totalMaxIn = 0;
    totalMaxOut = 0;

    node(name, inOut = {}) {
        this.constraints[name] = {min: 0, max: 0};
        if ("in" in inOut) {
            let variableName = "a" + name
            let constraintName = variableName + "in";
            this.constraints[constraintName] = {max: inOut.in};
            this.totalMaxIn += inOut.in;
            this.variables[variableName] = {[constraintName]: 1, [name]: 1, in: 1};
            this.ints[constraintName] = 1;
        }
        if ("out" in inOut) {
            let variableName = "b" + name
            let constraintName = variableName + "out";
            this.constraints[constraintName] = {max: inOut.out};
            this.totalMaxOut += inOut.out;
            this.variables[variableName] = {[constraintName]: 1, [name]: -1, out: 1};
            this.ints[constraintName] = 1;
        }
    }

    arrow(nodeInName, nodeOutName, cost, constraint = {}) {
        let variableName = nodeInName + "_" + nodeOutName;
        let constraintName = variableName + "c";
        this.constraints[constraintName] = constraint;
        this.variables[variableName] = {cost: cost, [nodeInName]: -1, [nodeOutName]: 1, [constraintName]: 1};
        this.ints[variableName] = 1;
    }

    build() {
        if (this.totalMaxOut > this.totalMaxIn) {
            this.constraints.in = {"min": this.totalMaxIn}
        } else {
            this.constraints.out = {"min": this.totalMaxOut}
        }
    }
}

module.exports = Project2Model;
