import crypto from 'crypto';

const postCtrl = {};

postCtrl.getAll = (req, res) => {
    res.send("working get");
};

postCtrl.create = async (req, res) => {
    const permalink = crypto.randomBytes(16).toString("base64Url");
    const date = new Date().toISOString();
    const postToSave = { ...req.body, date, permalink };
    console.log(postToSave);
    //const createdPost = await postModel.create(postToSave);
    res.status(201).json({ post: "createdPost" });
};

postCtrl.update = (req, res) => {
    res.send("working update");
};

postCtrl.delete = (req, res) => {
    res.send("working delete");
};

export default postCtrl;
