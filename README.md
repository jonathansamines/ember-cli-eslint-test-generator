# ember-eslint-test-generator
A simple package which allows you to set a default test generator to your ember-cli-eslint enabled application.

## Installation

1. Install the package

    ```bash
      npm install --save-dev ember-eslint-test-generator
    ```

2. Update your `ember-cli-build.js` file and add this configuration.

    ```js
      var eslintTestGenerator = require('ember-eslint-test-generator')({
        runner: 'qunit'
      });

      var app = new EmberApp(defaults, {
        eslint: {
          testGenerator: eslintTestGenerator
        }
      });
    ```
