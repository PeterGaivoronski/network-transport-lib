# Network transport javascript library

Abstracts RESTful network transport for javascript applications. 

## Installation

For general js via bower:

```
bower install https://github.com/PeterGaivoronski/network-transport-lib.git --production
```

For ionic/angular 2 via npm:

```
npm install https://github.com/PeterGaivoronski/network-transport-lib/tarball/master
```

## Usage

Load the library into your project via any UMD loader. For example if installed via npm in es6, it would be:

```
import { NetworkTransport } from 'network-transport-lib';
```

If you are installing in angular 2 or another clientside project via bower, simply load the dependencies into your script first and then load `dist/network_transport.min.js`.

Create a new instance of network transport for every api / protocol combination you need.

Valid transport layers: `http`, `https`, `websocket_msgpack`, `websocket_msgpack_secure`


```
var net_transport = new NetworkTransport([api_url], [transport layers]);
```

Send requests using the send() function:

```
net_transport.send({
   "method": <REST method> (default: GET)
   "endpoint": <REST endpoint> (required)
   "id": <resource id> (optional)
   "custom_method": <endpoint custom method> (optional)
   "query_params": <map of query params to attach to url> (optional)
   "data": <data to send with request> (optional)
   "headers": <headers to send with request> (optional),
   "with_credentials": <boolean: use cookies in request, currently applies to http-type requests only> (default: true)
   "force_transport": <string: force a transport layer> (optional)
}, callback);
```

Callback functions should accept the following arguments:

```
function(status_code, response){
    ...
}
```

Subscribe rxjs subjects to particular endpoints for transport layers that support push notifications:

```
// wildcard (all endpoints)
net_transport.subscribe_endpoint("*", [global_socket_subject]);
//specific stream
net_transport.subscribe_endpoint([endpoint], [socket_subject]);
```

Example code (es6):

```
import { Subject } from 'rxjs/Rx';

import { NetworkTransport } from 'network-transport-lib';

// if you are writing a service, export this subject via a variable and .subscribe() to it for each component to listen for push events
let global_socket_subject = new Subject();

var net_transport = new NetworkTransport("localhost:8000/api/", ["http", "websocket_msgpack"]);

// subscribe global socket subject to all events
net_transport.subscribe_endpoint("*", global_socket_subject);

// send request... get all cars
net_transport.send({
    "endpoint": "cars",
    "method": "GET"
}, function(status_code, res){
    console.log("got response", status_code, res);
});

```

## Build from source

```
npm install
bower install
npm run build
(npm run dev for live rebuild dev version)
```

## Current issues

Node.js is not working with the most recent build. Node support is TBD.
