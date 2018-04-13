# Single Page Application Demo

This is a demo project for beginners showing them how to build a Single Page Application without using a popular framework such as React, Angular, Vue, Ember or Backbone.js.

The main libraries used here are:

- [jQuery](https://jquery.com/) : DOM Handler
- [Handlebars](https://handlebarsjs.com/) : Templates Library
- [Vanilla Router](https://github.com/Graidenix/vanilla-router) - Clint-side routing

You can find the tutorial this demo comes with on [Sitepoint](https://www.sitepoint.com).
This application consumes data provided by [Fixer.io](https://fixer.io).

## Requirements

- [Node.js](http://nodejs.org/)

## Installation Steps

You'll need to register an [account](https://fixer.io/signup/free) with fixer.io in order to access their **Free API Key**. After you have cloned the repository, create a new file called `.env` at the root of the project. Provide your api key inside the file like this:

```env
API_KEY=<insert api access key here>
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
