class Layer {

    constructor() {
        if (this.constructor == Layer) {
            throw new Error("Abstract classes can't be instantiated.")
        }
    }

    feedForward(fInput) {
        throw new Error("method 'feedForward()' must be implemented");
    }

    backPropagate(incomingGradient, lRate) {
        throw new Error("method 'backPropagate()' must be implemented");
    }
}

export default Layer