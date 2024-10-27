import express from 'express';
import { fetchUsers } from '../../controllers/users/user.controllers.js';

const userRouter = express.Router();

function authorise(req, res, next) {
    console.log(req.query.token, "sssssss");
    if (!req.query.token) {
        return res.send('unauthorized user');
    }
    next();
}

userRouter.route('/')
    .get(authorise, (req, res) => {
        fetchUsers(req, res);
    })
    .post((req, res) => {
        // Implement the post logic here
        res.send('User created'); // Example response
    });

export default userRouter;
