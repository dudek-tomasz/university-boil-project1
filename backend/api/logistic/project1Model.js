class Project1Model {
    optimize = "gain";
    opType = "max";
    constraints = {};
    variables = {};
    ints = {};
    #suppliers = {};
    #recipients = {};

    supplier(name, supply, price) {
        this.#suppliers[name] = price
        this.constraints[name] = {"max": supply}
    }

    recipient(name, demand, price) {
        this.#recipients[name] = price
        this.constraints[name] = {"max": demand}
    }

    transport(supplierName, recipientName, transportPrice) {
        const variableName = supplierName + '|' + recipientName
        this.variables[variableName] = {
            "gain": this.#recipients[recipientName] - transportPrice - this.#suppliers[supplierName],
            [supplierName]: 1,
            [recipientName]: 1
        }
        this.ints[variableName] = 1
    }
}

module.exports = Project1Model;