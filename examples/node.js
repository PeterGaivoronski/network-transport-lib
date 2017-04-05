var NetworkTransport = require('../dist/network_transport').NetworkTransport;

var nt = new NetworkTransport("localhost:8000/api/", ["http", "websocket_msgpack"]);

console.log("sending requuest...")

var respose_received = false;

nt.send({
    "endpoint": "cars"
}, function(status_code, res){
    console.log("response", status_code, res)
    respose_received = true;
});


(function wait () {
   if (!respose_received) setTimeout(wait, 1000);
})();
