# Single Page Application Demo

## Introduction

This is a demo project for beginners showing them how to build a Single Page Application without using a popular framework such as React, Angular, Vue.js, Ember or Backbone.js.

The main libraries used here are:

- [jQuery](https://jquery.com/) : DOM Handler
- [Handlebars](https://handlebarsjs.com/) : Templates Library
- [Vanilla Router](https://github.com/Graidenix/vanilla-router) - Clint-side routing

The tutorial for this demo is on [Sitepoint.com](https://www.sitepoint.com/single-page-app-without-framework/).
This application consumes data provided by [Fixer.io](https://fixer.io) and [Currency Converter API](https://www.currencyconverterapi.com).

## ATTENTION!! Bug Fixes on 9th July 2019

A number of fixes were implemented on 9th July 2019 to make the project features working again. Below is a breakdown:

### 1. NPM Audit

All packages were upgraded to their latest versions as of 9th July 2019. Hence all security vulnerabilities found in package dependencies have been patched.

### 2. Fixer API Endpoint

The Fixer API Endpoint now requires the API key to be appended at the end of the URL. See [docs](https://fixer.io/documentation). Here is an example:

```html
https://data.fixer.io/api/latest
    ? access_key = API_KEY
```

See [fixer-service.js](https://github.com/brandiqa/single-page-application/blob/master/lib/fixer-service.js) to see what has changed.

### 3. Currency Converter API

The Currency Converter API endpoint has changed numerous items since this project was first created. See [docs](https://www.currencyconverterapi.com/docs). Below is a quick summary:

1. The new URL to be used for free access is `https://free.currconv.com`
2. The API has been upgraded from v5 to v7 : `/api/v7/`
3. An API key is now required to access the free service. Register one with your email address from this [link](https://free.currencyconverterapi.com/free-api-key)

See [fixer-currency-service.js](https://github.com/brandiqa/single-page-application/blob/master/lib/free-currency-service.js) to see what has changed.

## Requirements

- [Node.js](http://nodejs.org/)

## Installation Steps

You'll need to register an [account](https://fixer.io/signup/free) with fixer.io in order to access their **Free API Key**. You'll also need to register with [Currency Converter API](https://free.currencyconverterapi.com/free-api-key) to get their **Free API Key** too.  After you have cloned the repository, create a new file called `.env` at the root of the project. Provide your API keys inside the file like this:

```env
API_KEY=<insert api access key from fixer here>
CONVERTER_API_KEY=<insert api access key from Currency Converter here>
PORT=3000
TIMEOUT=5000
```

1. Clone repository
2. Run `npm install`
3. Start server with `npm start` or `node server`
4. Visit [http://localhost:3000/](http://localhost:3000/).

## License

The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
