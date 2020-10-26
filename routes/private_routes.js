const router = require("express").Router();
const verify = require("./verifyToken");

//This is a private route
router.get("/", verify ,(req,res)=>{
    console.log(req.user);  //<---You have access to the user! You can do a database search based on the ID and get the user
    res.json({posts: {
        title: "my first post",
        description: "random data you shoudn't access"
    }
    });
});


module.exports = router;