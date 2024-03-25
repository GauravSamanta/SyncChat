import jwt from 'jsonwebtoken';

const generateToken = (id,res) => {

const token=jwt.sign({id},process.env.JWT_SECRET,{  
expiresIn:'15d'
});
res.cookie("chat_cookie",{
    maxAge: 15*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict"
});
return token;
}
export default generateToken;