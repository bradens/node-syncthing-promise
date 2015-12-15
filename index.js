'use strict'

const syncthing = require('node-syncthing'),
      Promise = require('bluebird'),
      _ = require('lodash');

// Everything is exported with methodNameAsync for the promise based api.
let syncthingApi = _.extend({
  system: Promise.promisifyAll(syncthing.system),
  db: Promise.promisifyAll(syncthing.db),
  stats: Promise.promisifyAll(syncthing.stats),
  misc: Promise.promisifyAll(syncthing.misc),
}, Promise.promisifyAll(syncthing));

module.exports = syncthingApi;

