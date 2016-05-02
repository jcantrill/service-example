A sample to demonstrate a consumer and producer of a service

To install dependencies:

`npm install`

To run the provider:

`node index.js`

To run the consumer:

`PROVIDER=<provderUrl> node index.js`

In order to see the consumer consume the producer:

curl http://[consumerAddress]/<message to echo>

i.e.

curl http://localhost:3002/here+is+my+message

will produce:

```
Echo at Mon, 02 May 2016 19:26:37 GMT 'here+is+my+message'
```
