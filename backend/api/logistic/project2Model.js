class Project2Model {
    optimize = "cost";
    opType = "min";
    constraints = {};
    variables = {};
    ints = {};
    totalMaxIn = 0;
    totalMaxOut = 0;

    nodes(nodes) {
        const this_ = this
        nodes.forEach(function (node) {
            this_.node(node)
        });
    }

    arrows(arrows){
        const this_ = this
        arrows.forEach(function(arrow){
            this_.arrow(arrow)
        });
    }

    node(node) {
        this.constraints[node.name] = {min: 0, max: 0};
        if ("inOut" in node) {
            if ("in" in node.inOut) {
                let variableName = "a" + node.name
                let constraintName = variableName + "in";
                this.constraints[constraintName] = {max: node.inOut.in};
                this.totalMaxIn += node.inOut.in;
                this.variables[variableName] = {[constraintName]: 1, [node.name]: 1, in: 1};
                this.ints[constraintName] = 1;
            }
            if ("out" in node.inOut) {
                let variableName = "b" + node.name
                let constraintName = variableName + "out";
                this.constraints[constraintName] = {max: node.inOut.out};
                this.totalMaxOut += node.inOut.out;
                this.variables[variableName] = {[constraintName]: 1, [node.name]: -1, out: 1};
                this.ints[constraintName] = 1;
            }
        }
    }

    arrow(arrow) {
        let nodes = arrow.name.split("_");
        let constraintName = arrow.name + "c";
        if ("constr" in arrow) {
            this.constraints[constraintName] = arrow.constr;
        }
        this.variables[arrow.name] = {cost: arrow.cost, [nodes[0]]: -1, [nodes[1]]: 1, [constraintName]: 1};
        this.ints[arrow.name] = 1;
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
