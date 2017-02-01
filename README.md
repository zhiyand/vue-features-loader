# vue-features-loader

*NOTE: this loader only works with Webpack*

## Install

```npm install vue-features-loader```

## Usage

### 1. Put `vue-features-loader` into the loaders chain for `Vue` files

Within your Webpack config:

```javascript
...
loaders: [
  {
    test: /\.vue$/,
    loader: 'vue!vue-features'
  },
  ...
],
...
```

### 2. Create a features configuration file `features.js`

```javascript
var define = require('vue-features-loader/define')

/* Here are your feature toggles */
var features = {
  AWESOME_FEATURE: true,
  FEATURE_IN_DEVELOPMENT: isProduction() ? false : true,
  ...
}

module.exports = {
  features,
  defines: define(features)
}
```

### 3. Feed your feature toggles into DefinePlugin for use with JavaScript, and
feed your feature toggles to vue-features-loader for use with Vue templates.

Within your Webpack config:

```javascript
var feature = require('./features')

...
plugins: [
  new webpack.DefinePlugin({
    'features': feature.defines
  }),
],
vueFeatures: feature.features
...

```

### 4. Guard your code with feature toggles in JavaScript

```javascript
...
if (features.AWESOME_FEATURE) {
  // your code when AWESOME_FEATURE is turned on
}
...
```

### 5. Guard your code with feature toggles in Vue templates

```html
...
<on feature="FEATURE_IN_DEVELOPMENT">
  <p>This should only show up if the FEATURE_IN_DEVELOPMENT is turned on.</p>
</on>

<off feature="FEATURE_IN_DEVELOPMENT">
  <p>This should only show up if the FEATURE_IN_DEVELOPMENT is turned off.</p>
</off>
...
```

