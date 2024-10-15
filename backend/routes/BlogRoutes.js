import express from 'express'
import { AllBlogData, CreateBlogData, DeleteBlogData, SingleBlogData, UpdateBlogData, UserBlogData } from '../controller/BlogControler.js';

const router = express.Router();

router.get('/allblog', AllBlogData)

router.get('/getblog/:id', SingleBlogData)
router.post('/createblog', CreateBlogData)
router.put('/updateblog/:id', UpdateBlogData)
router.delete('/deleteblog/:id', DeleteBlogData)
router.get('/usergetblog/:id', UserBlogData)

export default router;