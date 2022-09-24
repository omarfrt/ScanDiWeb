/* eslint-disable max-len */
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/**
Fonts
 */
/* raleway-regular - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url('./fonts/raleway-v28-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/raleway-v28-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/raleway-v28-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/raleway-v28-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/raleway-v28-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/raleway-v28-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}

/* roboto-condensed-regular - latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-condensed-v25-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/roboto-condensed-v25-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/roboto-condensed-v25-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/roboto-condensed-v25-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/roboto-condensed-v25-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/roboto-condensed-v25-latin-regular.svg#RobotoCondensed') format('svg'); /* Legacy iOS */
}


*,
*::before,
*::after {
  box-sizing: border-box;
}
/**
 * Removes the default spacing and border for appropriate elements.
 */
 body{
   margin: 0;
 }
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre {
  margin: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}
button {
  background: transparent;
  padding: 0;
  cursor: pointer;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
fieldset {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
/**
 * Tailwind custom reset styles
 */
/**
 * 1. Use the system font stack as a sane default.
 * 2. Use Tailwind's default "normal" line-height so the user isn't forced
 * to override it to ensure consistency even when using the default theme.
 */
html,* {
  font-family: "Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  line-height: 1.5; /* 2 */
  scroll-behavior: smooth;
}
*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}
img {
  border-style: solid;
}
textarea {
  resize: vertical;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: inherit;
  opacity: 0.5;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: inherit;
  opacity: 0.5;
}
input::placeholder,
textarea::placeholder {
  color: inherit;
  opacity: 0.5;
}
button,
[role="button"] {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
/**
 * Reset links to optimize for opt-in styling instead of
 * opt-out.
 */
a {
  color: inherit;
  font-size:inherit;
  text-decoration: inherit;
  cursor:pointer;
}
/**
 * Reset form element properties that are easy to forget to
 * style explicitly so you don't inadvertently introduce
 * styles that deviate from your design system. These styles
 * supplement a partial reset that is already applied by
 * normalize.css.
 */
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
/**
 * Use the configured 'mono' font family for elements that
 * are expected to be rendered with a monospace font, falling
 * back to the system monospace stack if there is no configured
 * 'mono' font family.
 */
pre,
code,
kbd,
samp {
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
/**
 * Make replaced elements by default as that's
 * the behavior you want almost all of the time. Inspired by
 * CSS Remedy, with  added as well.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}
/**
 * Constrain images and videos to the parent width and preserve
 * their instrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */
img,
video {
  max-width: 100%;
  height: auto;
}
`;
export default GlobalStyles;
