import mongoose from 'mongoose';
import BlogModel from '../models/BlogModels.js'
import UserModel from '../models/UserModel.js'

export const AllBlogData = async (req, res) => {
    try {
        const blog = await BlogModel.find({});
        if (!blog) {
            return res.status(400).json({ success: false, message: "no data" })
        }
        return res.status(200).json({ count: blog.length, success: true, message: "All blogs", blog })
    } catch (err) {
        return res.status(400).json({ success: false, message: "error:", err })
    }
}

export const SingleBlogData = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await BlogModel.findById(id);
        if (!blog) {
            return res.status(400).json({ success: false, message: "no blog found" })
        }
        return res.status(200).json({ count: blog.length, success: true, message: "blog", blog })
    } catch (err) {
        return res.status(400).json({ success: false, message: "error:", err })
    }
}

export const CreateBlogData = async (req, res) => {
    try {
        const { title, description, image, user } = req.body;
        if (!title || !description || !image || !user) {
            return res.status(400).json({
                success: false, message: `fill all details`
            })
        }
        const existinceUser = await UserModel.findById(user)
        if (!existinceUser) {
            return res.status(400).json({
                success: false, message: `unable to find user`,
            })
        }
        //create and save blog
        const blog = new BlogModel({ title, description, image, user });
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        //add the blog to users blog array
        existinceUser.blogs.push(blog);
        await existinceUser.save({ session });
        //commit transection
        await session.commitTransaction();
        await blog.save();

        return res.status(200).json({ success: true, message: "blog created", blog })


    } catch (err) {
        return res.status(400).json({ success: false, message: "error:", err })
    }
}

export const UpdateBlogData = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, image } = req.body;

        const blog = await BlogModel.findByIdAndUpdate(id, { ...req.body }, { new: true });

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        return res.status(200).json({ success: true, message: "blog updated", blog })


    } catch (err) {
        console.log(err)
        return res.status(400).json({ success: false, message: "error:", err })
    }
}

export const DeleteBlogData = async (req, res) => {
    try {
        const id = req.params.id;

        const blog = await BlogModel.findByIdAndDelete(id);

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        return res.status(200).json({ success: true, message: "blog delete", blog })


    } catch (err) {
        console.log(err)
        return res.status(400).json({ success: false, message: "error:", err })
    }

} 