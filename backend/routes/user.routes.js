import express from 'express'
import { signUpValidator } from '../middlewares/signUp.middleware'
import { signInValidator } from '../middlewares/signIn.middle'
import { getUser, signIn, signUp } from '../controllers/user.controller'
import { verifyJWT } from '../middlewares/auth.middle'
const router = express.Router()

router.route("/register").post(signUpValidator, signUp)
router.route("/login").post(signInValidator, signIn)
router.route("/").get(verifyJWT, getUser)


export default router