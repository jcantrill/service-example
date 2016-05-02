A sample to demonstrate a consumer and producer of a service

As a provider:

node index.js

As a consumer:

PROVIDER=<provderUrl> node index.js

In order to see the consumer consume the producer:

curl http://[consumerAddress]/<message to echo>

i.e.

curl http://localhost:3002/here+is+my+message

will produce:

Echo at Mon, 02 May 2016 19:26:37 GMT 'here+is+my+message'
