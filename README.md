# ax-tc-string

Sample implementation of a custom TC String built from the "cookies:complete" event of Axeptio.

## Installation

Check out this repository, then install the dependencies with your favorite package manager

```
npm install
```

## Preview and test

The Axeptio widget is loaded with a prepared configuration that contains two IAB vendors. 
ou can switch to another Axeptio configuration by changing the parameters in the `publi/index.html` file.

The required TC String will be written in the console when the `cookies:complete` event is dispatched
by the Axeptio Widget. More information on the Axeptio's SDK can be found here https://developers.axeptio.eu/cookies/axeptio-javascript-sdk.

This application has been built using Rollup, and can be started locally for preview and testing purposes :

```
npm run dev
```

Be sure to change the baseUrl of the TC String Core framework to match your public assets folder : the IAB script will lookup for a `vendor-list.json` in there. 
By default, rollup uses the http://localhost:5000 URL to run in dev mode.
