const asyncHandler = require("express-async-handler");
const tokens=require("./token.json")
const get_all_ico = asyncHandler(async (req, res) => {
 
  try {
  
     res.json(tokens);

  } catch (error) {
    res.json({message:error})
  }
})











module.exports = {
  get_all_ico
  };