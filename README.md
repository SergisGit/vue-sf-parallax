# vue-sf-parallax (vue-mouse-parallax s3rg1s fork)

[![npm](https://img.shields.io/npm/v/vue-mouse-parallax.svg) ![npm](https://img.shields.io/npm/dm/vue-mouse-parallax.svg)](https://www.npmjs.com/package/vue-mouse-parallax)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

An easy to use Mouse Parallax Component - Made with Vue.js

## Demo

[vuejs mouse parallax](https://aminerman.com/playground/vuejs-mouse-parallax/)


# Installation

```
npm install --save vue-sf-parallax
```

## Default import

Install all the components:

```javascript
import Vue from 'vue'
import VueMouseParallax from 'vue-sf-parallax'

Vue.use(VueMouseParallax)
```

Use specific components:

```javascript
import Vue from 'vue'
import { ParallaxContainer, ParallaxElement } from 'vue-sf-parallax'

Vue.component('parallax-container', ParallaxContainer)
Vue.component('parallax-element', ParallaxElement)
```

**⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.**

## Browser

```html
<link rel="stylesheet" href="vue-sf-parallax/dist/vue-mouse-parallax.css"/>

<script src="vue.js"></script>
<script src="vue-sf-parallax/dist/vue-mouse-parallax.browser.js"></script>
```


# Usage

In order for the effect to work, the <parallax-element /> should be contained within <parallax-container />

Options can then be passed to <parallax-element /> like so :

```html
// App.vue

<parallax-container>

    <parallax-element :parallaxStrength="-5" :type="'translation'">
        <h2>Put your content here</h2>
     </parallax-element>

</parallax-container>
```

## Props

| Prop   |      Type      |  Default Value | Description
|----------|:-------------:|------|------|
| parallaxStrength |  Number | 10 | Strength of the Parallax Effect |
| type |  String   | 'translation' | 'translation' - 'rotation' - 'depth' |


## License

[MIT](http://opensource.org/licenses/MIT)
