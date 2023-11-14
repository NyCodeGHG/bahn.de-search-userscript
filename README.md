# bahn.de Search Userscript

The website of Deutsche Bahn [bahn.de](https://bahn.de) has this really annoying issue that all of your search details
are lost once you close the tab. This [userscript](https://en.wikipedia.org/wiki/Userscript) fixes that issue by storing the websites state in
[`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) instead of
[`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
