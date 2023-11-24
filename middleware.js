const express = require('express');

function datastore_middleware(req, res, next) {
    if (req.body.datastore === "DATABASE"){
        // pass to other function but since i didn't create those i am goona return an error
         res.status(400).json({"message":"only CRM datastore is supported"});
         return
    }else if (req.body.datastore === "CRM"){
    // if datastore method is CRM 
    next()
    }else{
    res.status(400).json({"message":"invalid or missing datastore value"})
    }
}

module.exports = {datastore_middleware}