import express from 'express'
import { signIn, signUp } from '../controllers/user.controller'

const router = express.Router()

router.route('/register').post(signUp)
router.route('/register').post(signIn)

export default router