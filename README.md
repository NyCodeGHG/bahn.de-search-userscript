# bahn.de Search Userscript

The website of Deutsche Bahn [bahn.de](https://bahn.de) has this really annoying issue that all of your search details
are lost once you close the tab. This [userscript](https://en.wikipedia.org/wiki/Userscript) fixes that issue by storing the website state in
[`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) instead of
[`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

## Installation

Install a userscript manager like [Violentmonkey](https://violentmonkey.github.io/).

Click on the purple install button or alternatively [this link](https://codeberg.org/marie/bahn.de-search-userscript/raw/branch/main/bahn.user.js):

[![Click here to install](https://img.shields.io/badge/Install-purple?style=for-the-badge&logo=script)](https://codeberg.org/marie/bahn.de-search-userscript/raw/branch/main/bahn.user.js)

Your userscript manager will automatically detect that you want to install the script.
Follow the instructions of your userscript manager.

## License

This repository is licensed under [GPL-3.0-or-later](LICENSE).

## Security

As of today (14.11.2023) Deutsche Bahn stores no sensitive data in the state.
If you do find a security issue please contact me via [matrix](https://matrix.to/#/@marie:marie.cologne).
