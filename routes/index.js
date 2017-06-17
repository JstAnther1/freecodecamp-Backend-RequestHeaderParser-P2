var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/yourdetails', function(req, res, next) {
  var ipAdd=req.socket.remoteAddress;
  var lang=req.headers["accept-language"].split(",")[0];
  var OS=req.headers["user-agent"].split("(")[1].split(")")[0];
  res.json({"IP Address":ipAdd,"Language":lang,"OperatingSystem":OS});
});



module.exports = router;

/*everything that need is in req(request itself), so to respond out
  its just creating variables that contain the values belonging to objects
  in request
*/
