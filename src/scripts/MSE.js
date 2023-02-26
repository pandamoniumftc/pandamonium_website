
export class MSE {
    constructor() {}

    feedForward(actual, expected) {
        if (actual.length != expected.length) {
            throw new Error("expected and actual did not match in length")
        }

        let sum = 0;

        for (let i = 0; i < expected.length; i++) {
            sum += (expected[i] - actual[i]) ** 2
        }
        
        return sum / expected.length; 
    }

    backPropagate(actual, expected) {
        if (actual.length != expected.length) {
            throw new Error("expected and actual did not match in length")
        }

        out = new Array(expected.length)

        for (let i = 0; i < out.length; i++) {
            out[i] = (2.0 / expected.length) * (actual[i] - expected[i])
        }

        return out;
    }
}

export default MSE