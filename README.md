This issue:

https://github.com/bholloway/resolve-url-loader/issues/5

Getting started.

```
git clone git@github.com:ccorcos/webpack-sass-url-issue.git
cd webpack-sass-url-issue/proj1/
npm install
node server.js
```

You'll see an error like this:

```
ERROR in ./~/css-loader!./~/resolve-url-loader!./~/sass-loader!./component.scss
Module not found: Error: Cannot resolve 'file' or 'directory' ./proj1/fine.png in /Users/chetcorcos/Desktop/webpack-sass-url-issue/proj1
 @ ./~/css-loader!./~/resolve-url-loader!./~/sass-loader!./component.scss 6:98-125

ERROR in ./~/css-loader!./~/resolve-url-loader!./~/sass-loader!../proj2/other.scss
Module not found: Error: Cannot resolve 'file' or 'directory' ./proj2/javascript.png in /Users/chetcorcos/Desktop/webpack-sass-url-issue/proj2
 @ ./~/css-loader!./~/resolve-url-loader!./~/sass-loader!../proj2/other.scss 6:104-137
```

My intensions are to resolve all file to the root so we can share resources, hence this in my webpack configuration:

```js
  resolve: {
    root: [
      path.resolve('..'),
    ],
    modulesDirectories: [
      'node_modules'
    ]
  }
```

[`sass-loader`](https://github.com/jtangelder/sass-loader) recognizes and issue with url writing and recomments using the [`resolve-url-loader`](https://github.com/bholloway/resolve-url-loader).

> Add the missing url rewriting using the resolve-url-loader. Place it directly after the sass-loader in the loader chain.

But the resolve-url-loader will not search outside proj1 event though the resolve root is pointing there.

> The search will continue while within the project directory and until a package.json or bower.json file is encountered.