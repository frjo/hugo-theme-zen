# KSS Style Guide

This style guide documents the designs of this website which are built with component-based styles and Sass variables, functions and mixins. To ensure it is always up-to-date, this style guide is automatically generated from comments in the Sass files.

## Organization

Design components are reusable designs that can be applied using just the CSS class names specified in the component. We categorize our components to make them easy to find.

<dl>
<dt>**Defaults**</dt>
<dd>`sass/base` — The default “base” components apply to HTML elements. Since all of the rulesets in this class of styles are HTML elements, the styles apply automatically.</dd>
<dt>**Layouts**</dt>
<dd>`sass/layouts` — Layout components position major chunks of the page. They just apply positioning, no other styles.</dd>
<dt>**Components**</dt>
<dd>`sass/components` — Miscellaneous components are grouped together, but feel free to further categorize these.</dd>
<dt>**Navigation**</dt>
<dd>`sass/navigation` — Navigation components are specialized design components that are applied to website navigation.</dd>
<dt>**Forms**</dt>
<dd>`sass/forms` — Form components are specialized design components that are applied to forms or form elements.</dd>
</dl>

In addition to the components, our component library also contains these folders:

<dl>
<dt>**Colors and Sass**</dt>
<dd>`sass/init` — This Sass documents the colors used throughout the site and various Sass variables, functions and mixins. It also initializes everything we need for all other Sass files: variables, 3rd-party libraries, custom mixins and custom functions.</dd>
<dt>**Style guide helper files**</dt>
<dd>`sass/style-guide` — files needed to build this automated style guide; includes some CSS overrides for the default KSS style guide</dd>
</dl>
