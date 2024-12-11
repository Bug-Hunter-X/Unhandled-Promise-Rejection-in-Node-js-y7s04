# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js: unhandled promise rejections.  The `bug.js` file shows code that causes an unhandled promise rejection, while `bugSolution.js` shows the corrected code.

## Bug

The `bug.js` file creates a promise that immediately rejects.  Without proper error handling, this will lead to an unhandled promise rejection, which can cause Node.js to crash or behave unpredictably.

## Solution

The `bugSolution.js` file demonstrates the proper way to handle promise rejections using `.catch()`. This ensures that errors are properly logged and handled without causing application instability.