# orchard

## Note
there are two parts to this project. one is a node project intended to run as a service for the vue project. to run the application, both will need to be started from the command-line. cd into the directory containing the script server.js (this should be located at the root of the project (so /orchard)) in two windows. in one you will need to start the vue project (npm run serve) and in the other you will need to run the service (node server.js, or, if you prefer: nodemon server.js)

### Project setup
```
npm install --this will install the dependencies
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
