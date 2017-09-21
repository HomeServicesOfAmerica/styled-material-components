# Styled Material Components

[Styled Components](https://www.styled-components.com) inspired library that implements Material Design for stress free React Application scaffolding.

## Inspiration and goals
1. [Styled Components](https://www.styled-components.com) is a great way to couple components with styles.
2. [Material Components](https://github.com/material-components/material-components-web) is the best implementation of material design spec (it is google afterall)
3. We want a native react implementation of the above, and Styled Components gives us that power.
4. Sass Mixins can be mostly written as styled component mixins. See src/mixins/ for examples of this. 

## Contributing
1. Fork this repo
2. Create a new branch on your fork
3. Run yarn install
4. Run yarn dev
5. Make changes to components in src/
6. Add the components to pages in /pages
7. Pages are mapped to routes for our documentation
8. Open a PR
9. Profit :D

## How to use
The components in this library are Styled Components and have full access to the Style Components v2 api. That means you can call .extend on any of the exported components to modify the styling of everything within the component.

Currently we have only one component, a container and a decorator.

### Theme Provider
Similar to the Styled Components ThemeProvider (its a thin wrapper around it) except that it provides a default theme that matches material design's default theme. You can provide a custom theme here with any option from src/theme/defaultTheme.js overwritten. You can nest ThemeProviers just like with StyledComponents to overwrite portions of the theme for sections of your application

### Button
This component is for creating a material design button. It has props that match the documentation from [Material Components](https://github.com/material-components/material-components-web)

Example Implementation: 

```js
// Flat button with primary text color
<Button primary>I'm a Button</Button>

// Flat button with accent text color
<Button accent>I'm a Button</Button>

// Raised button with primary background color
<Button raised primary>I'm a Button</Button>
```

### withRipple
This is a decorator (higher order component) to add a javascript ripple effect to any element that is a styled component. (it must have the .extend function).

```js
const JSRippleButton = withRipple(Button);
<JSRippleButton raised primary>Test</JSRippleButton>
```
