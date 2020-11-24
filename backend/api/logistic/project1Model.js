class Project1Model {
    optimize = "gain";
    opType = "max";
    constraints = {};
    variables = {};
    ints = {};
    #suppliers = {};
    #recipients = {};

    supplier(name, supply, price) {
        this.#suppliers[name] = parseFloat(price)
        this.constraints[name] = {"max": parseFloat(supply)}
    }

    recipient(name, demand, price) {
        this.#recipients[name] = parseFloat(price)
        this.constraints[name] = {"max": parseFloat(demand)}
    }

    transport(supplierName, recipientName, transportPrice) {
        const variableName = supplierName + '|' + recipientName
        this.variables[variableName] = {
            "gain": this.#recipients[recipientName] - parseFloat(transportPrice) - this.#suppliers[supplierName],
            [supplierName]: 1,
            [recipientName]: 1
        }
        this.ints[variableName] = 1
    }
}

module.exports = Project1Model;