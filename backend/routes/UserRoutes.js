import express from "express"
import { getUser, login, register } from "../controller/UserControler.js";

const router = express.Router();

router.get('/alluser', getUser);
router.post('/register', register)
router.post('/login', login)
export default router;