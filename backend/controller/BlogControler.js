import mongoose from 'mongoose';
import BlogModel from '../models/BlogModels.js'
import UserModel from '../models/UserModel.js'

export const AllBlogData = async (req, res) => {
    try {
        const blog = await BlogModel.find({}).populate('user');
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
        return res.status(200).json({ count: blog.length, success: true, message: "serached blog", blog })
    } catch (err) {
        return res.status(400).json({ success: false, message: "error:", err })
    }
}

export const CreateBlogData = async (req, res) => {
    try {
        const { title, description, image, user } = req.body;//it is id
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
        await blog.save({});
        //add the blog to users blog array
        existinceUser.blogs.push(blog);
        await existinceUser.save({});

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

        // Find the blog by id and populate the user
        const blog = await BlogModel.findById(id).populate("user");

        // Check if blog exists
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        // Remove the blog reference from the user's blogs array
        blog.user.blogs.pull(blog._id);  // Accessing blogs array of user, assuming user model has blogs array

        // Save the updated user
        await blog.user.save();

        // Delete the blog
        await BlogModel.findByIdAndDelete(id);

        return res.status(200).json({ success: true, message: "Blog deleted", blog });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, message: "Error:", err });
    }
}

export const UserBlogData = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id).populate('blogs');
        if (!user) {
            return res.status(404).json({ success: false, message: "user not found" });
        }
        return res.status(200).json({ success: true, message: "user blogs", user })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false, message: "error", err })

    }
}