#!/usr/bin/env node

/* eslint-disable no-console */

const express = require('express');
const { green } = require('chalk');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 1136;

const wakandaApp = {
  host: 'localhost',
  port: 8081,
};

app.use(
  '/rest',
  createProxyMiddleware('/rest', {
    target: 'http://' + wakandaApp.host + ':' + wakandaApp.port,
    ws: true,
  })
);

app.listen(PORT, () =>
  console.log(green('Starting test server with mode mockrecord on port', PORT))
);
