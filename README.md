# Linear machine learning project

I have started learning machine learning and this is the basic of tensorflow.js and linear learning algorithm

## Importing tensorflow

```
import * as tf from '@tensorflow/tfjs';
```

## Initializing the Model
- Sequential because it will be a sequence of numbers
- dense layers are fully connected layers
- units is dimensionality of the output space
- inputShape will be used to create an input layer to insert before this layer
- sgd: Stochastic gradient descent
https://en.wikipedia.org/wiki/Stochastic_gradient_descent
- meanSquaredError: this is our loss definition

```
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
```

## Training with Data

Two arrays for using as a training data
```
const xs = tf.tensor1d([1.2, 2.4, 3.5, 4.71, 5.98, 6.168, 7.779, 8.182, 9.59, 2.16, 7.042, 10.71, 5.313, 7.97, 5.654, 9.7, 3.11]);

const ys = tf.tensor1d([4.6, 5.7, 6.9, 9.19, 10.684, 12.53, 23.366, 32.596, 42.53, 1.22, 2.87, 3.45, 1.65, 2.904, 2.42, 2.4, 1.31]);

this.linearModel.fit(xs, ys)
```


## Prediction for the next number
This will predict a number based on a value

```
this.linearModel.predict(tf.tensor2d([value], [1, 1]))
```


If you want, create a pull-request or just contact me on @ehsangazar