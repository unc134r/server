<h1 align="center">Forward Server</h1>

<p align="center"><a href="https://aframe.io" target="_blank"><img width="480" alt="A-Frame" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2391&q=80"></a></p>

<p align="center"><b>The best thing to happen to JavaScript since NodeJS. Just kidding.</b></p>

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

## What is it

<p>The tagline up there may have exaggerated a bit. All this package is a wrapper for other npm packages nicely wrapped in a decent API.</p>

## Use Case

Creating quick static hosting servers. And we mean really quick. 

## Contribute

We're looking for help maintaning, improving and organizing this package. 


## Install

```javascript
npm i @fwd/server
```


## Usage

### Basic Server

```javascript

const server = require('@fwd/server')

server.get('/', (req, res) => {
  res.send("Hey, Sexy!")
})

server.post('/', (req, res) => {
  res.send({
    id: server.uuid(),
    created_at: server.timestamp()
  })
})

server.start(80, __dirname)


```

### Cache In Memory

```javascript

const server = require('@fwd/server')

// Store
server.cache('saying', "wubba lubba dub dub")
// OR

// Store With Expiration
server.cache('otherSaying', 'oh geez rick', 10000)

// Get
server.cache('saying')
/// wubba lubba dub dub


```

### Cron

```javascript

const server = require('@fwd/server')

// Run Cron
server.cron(() => {
  console.log("I'm four hours older, woohoo!")
}, "every 4 hours")

server.cron(() => {
  console.log("A minute later...")
}, "every 1 minute")

```

### Timestamp

```javascript

const server = require('@fwd/server')

server.timestamp()

// Change format
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
// 3600000

```

## Questions

For questions and support, [ask on StackOverflow](https://stackoverflow.com/questions/ask/?tags=fwd-server).

## Stay in Touch

- Creator, [Send Us A Message](https://forward.miami).

## Contributing

We need help. We only accept critique in the form of merge requests :)

## License

This program is free software and is distributed under an [MIT License](LICENSE).