import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'title is required'] },
    description: { type: String, required: [true, 'description is required'] },
    image: { type: String, required: [true, 'image is required'] },
    user: {
        type: mongoose.Types.ObjectId, ref: "user", required: [true, "user id is required"]
    }
}, { timestamps: true })

const BlogModel = mongoose.model("blog", BlogSchema);

export default BlogModel;