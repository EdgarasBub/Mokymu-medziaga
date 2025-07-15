import express from 'express'
import { loginUser,signupUser,logoutUser } from '../controllers/userControllers.js'

const router = express.Router();

router.post('/logout', logoutUser)
router.post('/login', loginUser)
router.post('/signup', signupUser)

export default router;