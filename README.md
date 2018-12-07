# [Styled Material Components](https://styled-material-components.com/)

[Styled Components](https://www.styled-components.com) inspired library that implements Material Design for stress free React Application scaffolding.

## Table of Contents

0. [Inspiration and goals](#inpiration-and-goals)
0. [Getting Started](#getting-started)
0. [Contributing](#contributing)
0. [How to use](#how-to-use)
0. [Theme Provider](#theme-provider)
0. [Component Example](#component-example)
0. [Decorator Example](#decorator-example)

## Inspiration and goals
1. [Styled Components](https://www.styled-components.com) is a great way to couple components with styles.
2. [Material Components](https://github.com/material-components/material-components-web) is the best implementation of material design spec (it is google afterall)
3. We want a native react implementation of the above, and Styled Components gives us that power.
4. Sass Mixins can be mostly written as styled component mixins. See src/mixins/ for examples of this.

## Getting Started
* Fork the repo
* Run:
```
yarn install
yarn build
yarn run dev
```
* Open http://localhost:8081 in your browser

## Contributing
* Check out our [Contributing Guide](https://github.com/ConciergeAuctions/styled-material-components/blob/master/CONTRIBUTING.md)
* Please follow the [Code of Conduct](https://github.com/ConciergeAuctions/styled-material-components/blob/master/CODE_OF_CONDUCT.md)

## How to use
All components in this library are either:
1) Already styled components and will work when wrapping with styled()
2) Handle the className prop correctly so that wrapping with styled() will work.

### Theme Provider
Similar to the Styled Components ThemeProvider (its a thin wrapper around it) except that it provides a default theme that matches material design's default theme. You can provide a custom theme here with any option from src/theme/defaultTheme.js overwritten. You can nest ThemeProviers just like with StyledComponents to overwrite portions of the theme for sections of your application

### Global Style Helpers (^0.1.1-beta)
Prior to version 0.1.1-beta we injected global styles behind the scenes. In our use case this lead to us having to override these often. Styled-components v4 created a new createGlobalStyle builder that exports components. So now you can import these global styles manually and add them to your code where and if you want.

1) SMCGlobalStyles (includes the app wide styles that are typical in most material apps)
2) DrawerGlobalStyles (includes some global styles that push content around on the screen when the presence of a drawer is detected)

### Component Example
#### Button
This component is for creating a material design button. It has props that match the documentation from [Material Components](https://github.com/material-components/material-components-web)

Example Implementation:

```js
// Flat button with primary text color
<Button primary>I’m a Button</Button>

// Flat button with accent text color
<Button accent>I’m a Button</Button>

// Raised button with primary background color
<Button raised primary>I’m a Button</Button>
```

### Decorator Example
#### withRipple
This is a decorator (higher order component) to add a javascript ripple effect to any element that can have a className attached to it.

```js
const JSRippleButton = withRipple(Button);
<JSRippleButton raised primary>Test</JSRippleButton>
```
