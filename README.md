# Y+ and Wall Spacing Calculator

## Overview

Y+ Calculator. Given flow conditions (i.e. Free Stream Velocity, Density, Reference Length, Viscosity, n Iterations), this module will calculate and plot n Y+ values and their corresponding wall spacing. In wall bounded viscous flow y+ is a non-dimensional representation of wall distance, which is useful in abstracting and solving fluid problems.

## How it Works

Simply copy the files into your application and viola.

## Using the calculator 

Create a new calculator instance:

```js

// Create a new calculator instance
var yourCalculator = new yCalc(freeStreamVelocity, density, referenceLength, viscosity, numberIterations, yPlusValue) // spoiler alert: the input variables have to be integers or floats... duh

// Calculate things to plot
var resultsArray = yourCalculator.wallDistanceData(numberIterations);   // Wall Distance Data for n yPlus values starting from 1

// Calculate things
var Re = yourCalculator.reynoldsNumber(); 				  				// Reynolds Number

var skinFriction = yourCalculator.skinFriction();         				// Skin Friction

var wallShearStress = yourCalculator.wallShearStress();   				// Wall Shear Stress

var frictionVelocity = yourCalculator.frictionVelocity(); 				// Friction Velocity

var wallDistanceAtSomeValue = yourCalculator.wallDistance(someYplus);	// Wall Distance

```

# License

Licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) license.