const postCtrl = {};

postCtrl.getAll = (req, res) => {
  res.send("working get");
};

postCtrl.create = (req, res) => {
    res.send("working create");
};

postCtrl.update = (req, res) => {
    res.send("working update");
}; 

postCtrl.delete = (req, res) => {
    res.send("working delete");
};  

export default postCtrl;
