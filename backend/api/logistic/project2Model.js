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
        if ("in" in node) {
            let variableName = "in_" + node.name
            let constraintName = variableName + "in";
            this.constraints[constraintName] = {max: node.in};
            this.totalMaxIn += node.in;
            this.variables[variableName] = {[constraintName]: 1, [node.name]: 1, in: 1};
            this.ints[constraintName] = 1;
        }
        if ("out" in node) {
            let variableName = "out_" + node.name
            let constraintName = variableName + "out";
            this.constraints[constraintName] = {max: node.out};
            this.totalMaxOut += node.out;
            this.variables[variableName] = {[constraintName]: 1, [node.name]: -1, out: 1};
            this.ints[constraintName] = 1;
        }
    }

    arrow(arrow) {
        let nodes = arrow.name.split("_");
        let constraintName = arrow.name + "c";
        this.constraints[constraintName] = {}
        if ("min" in arrow) {
            this.constraints[constraintName].min = arrow.min;
        }
        if ("max" in arrow) {
            this.constraints[constraintName].max = arrow.max;
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
