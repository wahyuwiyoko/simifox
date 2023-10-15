# Contributing

Thank you for your time to contributing this project!

Any contribution are welcome, whether it's just a small code changes or just
giving a star to the repository.

Here are some contribution you can do:

- [Add user preferences configuration](#add-user-preferences-configuration)
- [Improve Firefox UI](#improve-firefox-ui)
- [Improve README or fix typos](#improve-readme-or-fix-typos)

See [How to Contribute](#how-to-contribute) section to guide you how to
contribute this project.

## Add User Preferences Configuration

Any improvement of configuration for `user.js` without breaking some basic
functionality are very helpful to the core of browsing experience. Whether
it's for privacy, performance, or any suggestion for both.

You can search any preferences by enter `about:config` on your search bar and
try experimenting yourself for the changes effect.

## Improve Firefox UI

By now, the Firefox UI are just a copy of
[Eric Murphy's `userChrome.css`](https://github.com/ericmurphyxyz/userChrome.css)
with a little improvement. Any Firefox UI improvement is welcome to
make it more minimal and responsive.

These is how to debug your Firefox style:

1. Press `Ctrl+Shift+i` or right click and `inspect` to show the developer tools.
2. Click the three dots at the right side of developer tools window and go to
   `Settings`.
3. At the `Advanced settings` option, checkmark the `Enable browser chrome and
   add-on debugging toolboxes` and `Enable remote debugging`.
4. Close the developer tools window and press `Ctrl+Shift+Alt+i`.
5. If it prompt the `Incoming Connection` window, click `OK` to allow remote
   debugging.

Now you can inspect every top bar element such as navigation bar and tab bar.
You can also save every changes inside `Style Editor` and select the
`userChrome.css`.

## Improve README or Fix Typos

English are not the native language of this repository maintainer. So you may
have found some typo or grammar mistake. Small changes like typos or improving
the README are also helped the others to understand the context.

## How to Contribute

- Don't use formatters such as Prettier or ESLint on your editor. These
  formatters can mess up the code style.
- Use 2 spaces for indentation.
- Save files in UTF-8 encoding and LF (Unix) end-of-line format (EOL).
- Double check all code changes or typo before submitting a pull request.
- Open a pull request and provide clear and concise information in description.

## Similiar Projects

Here are some other projects that can be references for improving the
browsing experiences:

- [Betterfox](https://github.com/yokoffing/Betterfox)
- [pyllyukko's user.js](https://github.com/pyllyukko/user.js)
- [Firefox CSS hacks](https://github.com/MrOtherGuy/firefox-csshacks)
- [Cascade](https://github.com/andreasgrafen/cascade)
