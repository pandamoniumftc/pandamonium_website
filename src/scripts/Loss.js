export class Loss {

    constructor() {
        if (this.constructor == Layer) {
            throw new Error("Abstract classes can't be instantiated.")
        }
    }

    feedForward(actual, expected) {
        throw new Error("method 'feedForward()' must be implemented");
    }

    backPropagate(actual, expected) {
        throw new Error("method 'backPropagate()' must be implemented");
    }
}