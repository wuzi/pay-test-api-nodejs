# Pay Test API

Pay Test API made with nodejs

## Getting Started

```bash
# install packages
npm install

# run server
npm start
```

## Docker
To run the app with docker first build the image:

```bash
docker build -t wuzi/pay-test-api-nodejs:0.1.0 .
```

Then start the container:

```bash
docker-compose up
```

## Built With

* [nodejs](https://nodejs.org/en/) - JavaScript run-time environment
* [typescript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript
* [koa](https://koajs.com/) - Web framework

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Documentation

To view the documentation, start the server and go to `{{host}}/v1/docs`.
