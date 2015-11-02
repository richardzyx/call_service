/**
 * Just in case of any need to hash data into a future database
 */
var Buffer = require("buffer").Buffer;
var crypto = require("crypto");

exports.toMd5 = function(data) {
    var buf = new Buffer(data);
    var str = buf.toString("binary");
    return crypto.createHash("md5").update(str).digest("hex");
};