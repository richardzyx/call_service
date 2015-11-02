"use strict";

var db_config ;

if(process.env.NODE_ENV==="formal"){
    db_config = require('./db_config').formal;//leave space for production settings
}
else{
    db_config = require('./db_config').dev;
}

exports.config=db_config;