# SiMiFox

A simple and minimal Firefox custom configurations to enhance privacy,
security, performance, and UI simplicity.

![Overview](screenshots/homepage.png)

![Multiple tabs](screenshots/multiple-tabs.png)

## How to Use

1. Download or clone the repository:

```
git clone https://github.com/wahyuwiyoko/simifox.git
```

2. Copy the `user.js` file and `chrome` directory from `simifox` directory
to your Firefox profile directory.

For Windows, is located at
`C:\Users\your-username\AppData\Roaming\Mozilla\Firefox\Profiles\your-firefox-profile`

For Mac, is located at
`/Users/your-username/Library/Application Support/Firefox/Profiles/your-firefox-profile`

For Linux, is located at
`/home/your-username/.mozilla/firefox/your-firefox-profile`

Replace `your-firefox-profile` with the correct Firefox profile name.
Usually it's eight random characters with the name of the profile.
For example: `/home/john/.mozilla/firefox/eh3dq93f.simifox`

3. Restart Firefox to apply the configurations.

## Tips

If you start with a new Firefox profile and use this custom configuration,
you may be having a wasted space between the search bar by default like these:

![Search bar space](screenshots/search-bar-space.png)

To remove the "flexible space", right click on the top bar, `Customize Toolbar...`,
drag and drop the `Flexible Space` and `Reload` icon to the "overflow menu",
and `Done`.

You will have _compact-like_ search bar like these:

![Compact search bar](screenshots/search-bar-compact.png)

## Keyboard Shortcuts

You can see the full list of Firefox keyboard shortcuts at their
[website](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly).

And here are the useful shortcuts that I mostly used:

- Open a new tab: `Ctrl+t`
- Close the current tab: `Ctrl+w`
- Undo close tab: `Ctrl+Shift+t`
- Focus address bar: `Ctrl+l`
- Reload page: `Ctrl+r`
- Reload page (override cache): `Ctrl+Shift+r`
- Stop page: `Escape`
- Find in page: `Ctrl+f`
- New private window: `Ctrl+Shift+p`
- Library window (history): `Ctrl+Shift+H`
- Bookmark URL: `Ctrl+d`
- Show/hide the bookmarks toolbar: `Ctrl+Shift+b`
- Show all bookmarks (library window): `Ctrl+Shift+o`
- View site information: `Ctrl+i`
- Toggle developer tools: `Ctrl+Shift+i`
- View add-ons and settings: `Ctrl+Shift+a`

## Privacy Suggestions

- Change default search engine to DuckDuckGo.
- Use [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
  and [DuckDuckGo](https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-for-firefox/)
  extension.
- Use local password manager such as [pass](https://www.passwordstore.org/)
  instead of built-in password manager in browser.

## Special Thanks

- [yokoffing](https://github.com/yokoffing)
- [Eric Murphy](https://github.com/ericmurphyxyz)
- [Rosé Pine](https://rosepinetheme.com/)
