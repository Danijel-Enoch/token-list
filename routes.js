const express = require('express');
const router=express.Router();
const {
    get_all_ico,
}=require("./icoController");

router.route("/tokenlist/testnet").get(get_all_ico)

module.exports=router;