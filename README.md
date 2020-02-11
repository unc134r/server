<h1 align="center">Forward Server</h1>

<p align="center"><a href="https://aframe.io" target="_blank"><img width="480" alt="A-Frame" src="https://user-images.githubusercontent.com/674727/32120889-230ef110-bb0f-11e7-908c-76e39aa43149.jpg"></a></p>

<p align="center"><b>The best thing to happen to JavaScript since NodeJS. Just kidding. It's a wrapper for a whole bunch of other already great packages.</b></p>

<p align="center">
  <a href="https://travis-ci.org/aframevr/aframe"><img src="https://img.shields.io/travis/aframevr/aframe.svg?style=flat-square" alt="Build Status"></a>
  <a href="https://codecov.io/gh/aframevr/aframe">
    <img src="https://codecov.io/gh/aframevr/aframe/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/aframe">
    <img src="https://img.shields.io/npm/dt/aframe.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/aframe">
    <img src="https://img.shields.io/npm/v/aframe.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/aframe">
    <img src="https://img.shields.io/npm/l/aframe.svg?style=flat-square" alt="License"></a>
  </a>
</p>

<div align="center">
  <a href="https://forward.miami">Forward Miami</a>
  &mdash;
  <a href="https://github.com/fwdmiami/server/issues">Issues</a>
  &mdash;
  <a href="https://www.npmjs.com/package/@fwd/server">NPM Package</a>
</div>

## Install

```javascript
// npm i @fwd/server
```


## Usage

### Basic Server

```javascript

const server = require('@fwd/server')

// static server in 4 lines
server.get('/', (req, res) => {
  res.send("Hey, Sexy!")
})
server.start(80, __dirname)


```

### Cache In Memory

```javascript

const server = require('@fwd/server')

// Get
server.cache('key')

// Store
server.cache('key', value)

// Store With Expiration
server.cache('key', value, 10000)

```

### Cron

```javascript

const server = require('@fwd/server')

// Run Cron
server.cron(() => {

}, "every 4 hours")

```

### Timestamp

```javascript

const server = require('@fwd/server')

// static server in 4 lines
server.timestamp()

server.timestamp('LL')

```


### UUID

```javascript

const server = require('@fwd/server')

server.uuid()
// uuid v4

```

### Time in Milliseconds

```javascript

const server = require('@fwd/server')

server.time(1, 'hour')
// uuid v4

```

## Questions

For questions and support, [ask on StackOverflow](https://stackoverflow.com/questions/ask/?tags=fwd-server).

## Stay in Touch

- Creator, [Send Us A Message](https://forward.miami).

And get in touch with the maintainers!

- [Forward Miami](hello@forward.miami)

## Contributing

WE NEED HELP!

## License

This program is free software and is distributed under an [MIT License](LICENSE).