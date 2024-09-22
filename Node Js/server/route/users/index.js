const express = require('express');
const { fetchUsers } = require('../../controllers/users/user.controllers');



const userRouter = express.Router();



function authorise(req,res,next){
     console.log(req.query.token,"sssssss")
    if(!req.query.token){
        res.send('unauthorised user');
    }

    next();
}

userRouter.route('/',)
.get(authorise,(req,res) => {
    fetchUsers(req,res)
})
.post()



module.exports = userRouter;