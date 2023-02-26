export class Network {
    constructor(network, xTrain, yTrain, lRate, loss) {
        this.network = network
        this.xTrain = xTrain
        this.yTrain = yTrain
        this.lRate = lRate;
        this.loss = loss;

        this.epoch = 0;
        this.isRunning = false;

        this.epochErrors = []
    }

    train() {
        if (!this.isRunning) return
        
        let epochError = 0;

        for (let sample = 0; sample < this.xTrain.length; sample++) {
            let ff = this.xTrain[sample]

            ff = this.predict(ff)

            epochError += this.loss.feedForward(ff, this.yTrain[sample])

            let gradient = loss.backPropagate(ff, this.yTrain[sample])

            for (let layer = this.network.length - 1; layer >= 0; layer--) {
                gradient = this.network[layer].backPropagate(gradient, this.lRate)
            }
        }
    

        this.epochErrors.push(epochError)
    }

    predict(ff) {
        for (let layer = 0; layer < this.network.length; layer++) {
            ff = this.network[layer].feedForward(ff)
        }

        return ff
    }
}

export default Network