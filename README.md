# Government of British Columbia Parks Bootstrap V5 Theme

[Getting Started instructions](https://bcgov.github.io/bootstrap-theme/docs/getting-started/introduction/)

[Full documentation and demonstrations of the theme](https://digitalspace.github.io/bcparks-bootstrap-theme/)

A Bootstrap version 5 BC Government look-and-feel featuring:
- The [BC Sans](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity/bc-sans)
  typeface
- Compatibility with pure Bootstrap markup
- A few additions:
  - `bcgold` colour classes for the old-style gold buttons (`btn-bcgold`, `bg-bcgold`, etc)
  - card classes to replace the old panel styles (`card-primary`, `card-success`, etc)
- Increased contrast for accessibility
- No Javascript extensions. Bootstrap itself, jQuery and popper.js are optional dependencies
- Source SCSS files are included in the distribution, allowing local customizations
- Supports NPM, Yarn and Bower package manager integration
- Includes sample HTML pages and common components like headers and footers for quick setup

The project is a successor to the previous
[bootstrap-theme](https://github.com/bcgov/bootstrap-theme).

## Theme Developers

If you find yourself wanting to enhance or fix the theme you'll be interested reading this
section on how to setup this source on your local device.

First, we do accept pull requests and will promptly merge fixes or enhancements if they
make sense for the rest of the relying applications.  Note, you should probably check out
our issues and/or raise an issue before doing the pull request.

### Tools Setup

You'll need the following tools installed on your device to begin working on the theme:

- The Git client and a GitHub account
- [NodeJS 14.x](https://nodejs.org/en/) or greater with NPM 3 or greater to build

### First Install

After your tools are in place, you should clone and install some packages:

```bash
git clone git@github.com:digitalspace/bcparks-bootstrap-theme.git
cd bcparks-bootstrap-theme
npm install
```

### Building Dist

This project has been created using webpack-cli. To build the styles, Javascript and other assets, use:

```bash
npm run build
```

This will create a directory named dist. Webpack will generate minified js and css code as well as bring over all assets and sass code.

### Deploying Dist

To package up dist for deployment you can use the following command at the root level of the project:

```bash
npm pack
``` 