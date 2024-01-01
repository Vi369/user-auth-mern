import express from 'express'
import { signIn, signUp } from '../controllers/user.controller'
import {signUpPageValidator} from '../middlewares/signUpPageValidator.js'
const router = express.Router()

router.route('/register').post(signUpPageValidator,signUp)
router.route('/register').post(signIn)

export default router