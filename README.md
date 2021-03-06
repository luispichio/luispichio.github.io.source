# V4

[![Netlify Status](https://api.netlify.com/api/v1/badges/1963b488-7b78-48c9-9e2d-6fb5e47ab3af/deploy-status)](https://app.netlify.com/sites/brittanychiang/deploys)

The fourth iteration of my personal site built with [Gatsby](https://www.gatsbyjs.org/) and hosted with [Netlify](https://www.netlify.com/).

> ð¢ **PSA for those who want to fork or copy this repo and use it for their own site:**
>
> Please be a decent person and give me proper credit by linking back to my website! Refer to this handy [quora post](https://www.quora.com/Is-it-bad-to-copy-other-peoples-code) if you're not sure.

ð [Looking for v3?](https://bchiang7.github.io/)

## ð Quick Start

1. **Install the Gatsby CLI**

   ```sh
   npm install -g gatsby-cli
   ```

2. **Install and switch to the correct version of Node using NVM**

   ```sh
   nvm install
   ```

3. **Install dependencies**

   ```sh
   yarn install
   ```

4. **Start the development server**

   ```sh
   yarn start
   ```

## Building and Running for Production

In addition to the development server started with `yarn start`, you can also generate a full static production build and serve that to preview the site as it will appear once deployed:

```sh
yarn build
```

```sh
yarn serve
```

## ð§ What's inside?

A quick look at the top-level files and directories in this project.

    .
    âââ node_modules
    âââ src
    âââ .gitignore
    âââ .prettierrc
    âââ gatsby-browser.js
    âââ gatsby-config.js
    âââ gatsby-node.js
    âââ gatsby-ssr.js
    âââ LICENSE
    âââ package-lock.json
    âââ package.json
    âââ README.md
    âââ yarn.lock

1. **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. âSrcâ is a convention for âsource codeâ.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins youâd like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You wonât change this file directly).

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the projectâs name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm. This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.
