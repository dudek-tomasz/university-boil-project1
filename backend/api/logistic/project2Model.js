class Project2Model {
    optimize = "cost";
    opType = "min";
    constraints = {};
    variables = {};
    ints = {};
    totalMaxIn = 0;
    totalMaxOut = 0;

    node(name) {
        this.constraints[name] = {min: 0, max: 0};
    }

    inNode(name, maxIn) {
        this.node(name);
        let constraintName = name + "c";
        this.constraints[constraintName] = {max: maxIn};
        this.totalMaxIn += maxIn;
        this.variables[name] = {[constraintName]: 1, [name]: 1, in: 1};
        this.ints[constraintName] = 1;
    }

    outNode(name, maxOut) {
        this.node(name);
        let constraintName = name + "c";
        this.constraints[constraintName] = {max: maxOut};
        this.totalMaxOut += maxOut;
        this.variables[name] = {[constraintName]: 1, [name]: -1, out: 1};
        this.ints[constraintName] = 1;
    }

    arrow(nodeInName, nodeOutName, cost, constraint = {}) {
        let variableName = nodeInName + "_" + nodeOutName;
        let constraintName = variableName + "c";
        this.constraints[constraintName] = constraint;
        this.variables[variableName] = {cost: cost, [nodeInName]: -1, [nodeOutName]: 1, [constraintName]: 1};
        this.ints[variableName] = 1;
    }

    build() {
        if (this.totalMaxOut > this.totalMaxIn){
            this.constraints.in = {"min": this.totalMaxIn}
        } else {
            this.constraints.out = {"min": this.totalMaxOut}
        }
    }
}

module.exports = Project2Model;
