import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.linearModel = null
    this.state = {
      prediction: null,
      message: null
    }
  }

  componentDidMount() {
    this._initializingTheModel()
    this._trainNewModel()
  }

  _initializingTheModel = () => {
    this.linearModel = tf.sequential();
    
    // linear
    this.linearModel.add(tf.layers.dense({
      units: 1,
      inputShape: [1]
    }))

    // preate the model for training with defnining Loss function
    this.linearModel.compile({
      optimizer: 'sgd',
      loss: 'meanSquaredError'
    });
  }

  _trainNewModel = async () => {
    const xs = tf.tensor1d([1.2, 2.4, 3.5, 4.71, 5.98, 6.168, 7.779, 8.182, 9.59, 2.16, 7.042, 10.71, 5.313, 7.97, 5.654, 9.7, 3.11]);
    const ys = tf.tensor1d([4.6, 5.7, 6.9, 9.19, 10.684, 12.53, 23.366, 32.596, 42.53, 1.22, 2.87, 3.45, 1.65, 2.904, 2.42, 2.4, 1.31]);

    await this.linearModel.fit(xs, ys)
  }

  _linearPrediction = async (event) => {
    const { value } = event.target
    const output = this.linearModel.predict(tf.tensor2d([value], [1, 1]))
    const prediction = Array.from(output.dataSync())[0]
    this.setState({
      prediction: prediction
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Linear Machine Learning</h1>
        </header>
        <p className="App-intro">
          <input 
            className='App-input'
            placeholder="Enter a Number for prediction"
            onChange={this._linearPrediction}
            type="number" 
          />
          <h2>
            {this.state.prediction}
          </h2>
        </p>
      </div>
    );
  }
}

export default App;
