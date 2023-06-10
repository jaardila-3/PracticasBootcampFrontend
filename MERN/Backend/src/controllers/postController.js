import crypto from 'crypto'; //genera una cadena aleatoria codificada en base64Url.
import { postModel } from '../models/postModel.js';

const postCtrl = {};

postCtrl.getAll = async (req, res) => {
    // mongosse sort desc by date
    const posts = await postModel.find({}).sort({ date: -1 }).limit(5);
    res.status(200).json({ posts });
};

postCtrl.getOne = async (req, res) => {
    const post = await postModel.findOne({ _id: req.params.id });
    res.status(200).json({ post });
};

postCtrl.create = async (req, res) => {
    const permalink = crypto.randomBytes(16).toString("base64Url");
    const date = new Date().toISOString();
    const postToSave = { ...req.body, date, permalink };
    console.log(postToSave);
    const createdPost = await postModel.create(postToSave); // create: mongoose ODM method
    res.status(201).json({ post: createdPost });
};

postCtrl.update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const updatedPost = await postModel
        .findOneAndUpdate({ _id: id }, data, { new: true, });

    res.status(200).json({ post: updatedPost });
};

postCtrl.delete = async (req, res) => {
    const deletedPost = await postModel.findOneAndDelete({
        _id: req.params.id,
    });
    res.status(200).json({ post: deletedPost });
};

export default postCtrl;
