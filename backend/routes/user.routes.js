import express from 'express'
import { signUpValidator } from '../middlewares/signUp.middleware.js'
import { signInValidator } from '../middlewares/signIn.middle.js'
import { getUser, signIn, signUp } from '../controllers/user.controller.js'
import { verifyJWT } from '../middlewares/auth.middle.js'
const router = express.Router()

router.route("/register").post(signUpValidator, signUp)
router.route("/login").post(signInValidator, signIn)
router.route("/auth").get(verifyJWT, getUser)


export default router