import User from '../../models/User'
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method == 'POST') {
    console.log(req.body);
    let user = await User.findOne({"email":req.body.email})
    const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
    console.log(bytes.toString(CryptoJS.enc.Utf8))
    let decryptedPass=bytes.toString(CryptoJS.enc.Utf8)
    if(user){
        if(req.body.email==user.email && req.body.password ==decryptedPass){
          var token = jwt.sign({email:user.email,name:user.name }, 'jwtsecret',{expiresIn:"2d"}); //login exprires in two days
            res.status(200).json({success:true,token});
        }  
        else{

            res.status(200).json({ success: false, error:"Please login With correct crendtials "});  
        }
     }
     else{
        res.status(200).json({ success: false, error:"No user Found"});  

     }
  }
   else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDB(handler);
