const dotenv=require("dotenv");
dotenv.config();
const jwt=require("jsonwebtoken")

JWT_SECRET_ADMIN=process.env.JWT_SECRET_ADMIN
JWT_SECRET_USER=process.env.JWT_SECRET_USER

const authenticateAdmin = (Token1)=>(req, res, next) => {
    console.log(Token1);
    if (!Token1) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(Token1, JWT_SECRET_ADMIN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
  
      req.user = user;
      next();
    });
  }

  const authenticateUser = (token) => (req, res, next) => {
    console.log("Hello2");
    console.log("Received Token:", token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, JWT_SECRET_USER, (err, user) => {
        if (err) {
            console.error("Token Verification Error:", err);
            return res.status(403).json({ message: 'Forbidden' });
        }
        else{
            console.log("No error")
        }
        req.user = user;
        next();
    });
}



module.exports={
    authenticateAdmin,
    authenticateUser
}