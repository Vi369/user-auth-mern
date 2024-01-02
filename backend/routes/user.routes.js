import express from 'express'
import { signIn, signUp } from '../controllers/user.controller'
import { signInPageValidator, signUpPageValidator } from '../middlewares/user.middlewares.js'
const router = express.Router()

router.route('/register').post(signUpPageValidator,signUp)
router.route('/register').post(signInPageValidator,signIn)

export default router