import { Layer } from "./Layer";

export class Dense extends Layer {
    constructor(inputLen, outputLen) {
        this.inputLen = inputLen
        this.outputLen = outputLen

        this.inputs = new Array(inputLen)
        this.outputs = new Array(outputLen)
        this.biases = new Array(outputLen)

        this.weights = new Array(outputLen)

        for (let j = 0; j < outputLen; j++) {
            this.weights[j] = new Array(inputLen)
            for (let i = 0; i < inputLen; i++) {
                this.weights[j][i] = Math.random() - 0.5
            }
            
            this.outputs[j] = Math.random() - 0.5
            this.biases[j] = Math.random() - 0.5
        }
    }

    feedForward(fInput) {
        if (fInput.length != this.inputLen) throw new Error("input length does not match the length of the provided input")
        
        this.inputs = fInput;

        for (let j = 0; j < this.outputLen; j++) {
            let sum = this.biases[j];

            for (let i = 0; i < this.inputLen; i++) {
                sum += this.weights[j][i] * this.inputs[i]
            }
            this.outputs[j] = sum;
        }

        return this.outputs;
    }

    backPropagate(incomingGradient, lRate) {
        let previousLayerGradient = new Array(this.inputLen)

        if (incomingGradient.length != this.outputLen) throw new Error("incoming gradient length does not match this layers output length")

        for (let i = 0; i < this.inputLen; i++) {
            let sum = 0;
            for (let j = 0; j < this.outputLen; j++) {
                sum += incomingGradient[j] * this.weights[j][i]
            }
            previousLayerGradient[i] = sum
        }
        
        for (let j = 0; j < this.outputLen; j++) {
            for (let i = 0; i < this.inputLen; i++) {
                this.weights[j][i] -= incomingGradient[j] * this.inputs[i] * lRate
            }
        }

        for (let j = 0; j < this.outputLen; j++) {
            this.biases[j] -= incomingGradient[j] * lRate
        }
        
        return previousLayerGradient
    }

}

export default Dense