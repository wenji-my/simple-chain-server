# RESTful Web API
This is a web API using Express that submit and retrieve blockchain data.

## Node.js Framework
- Express

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

### Configuring your project

```
npm install
```

```
node app.js
```

## Testing
To test code:

1: Download Several tools, try one of the tools listed below.
- [Postman](https://www.getpostman.com/) is a powerful tool used to test web services. It was developed for sending HTTP requests in a simple and quick way.

- [CURL](https://curl.haxx.se/) is a command-line tool used to deliver requests supporting a variety of protocols like HTTP, HTTPS, FTP, FTPS, SFTP, and many more.

2: Send API request using a browser.
- GET
  - Example URL path: http://localhost:8000/block/0, where '0' is the block height.

- POST
  - Example URL path: http://localhost:8000/block, and add param like this:

      
        {
          "body": "Testing block with test string data"
        }
      