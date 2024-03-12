const path = require('path');
const express = require("express");

const rootDir = require('../util/path');
const router = express.Router();

router.use("/contactus", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

router.post("/sucess", (req, res, next) => {
//   res.send(
//     '<form action="/admin/add-product" method="POST"> <input type="text" name="title" /><input type="text" name="title2" /><button type="submit">Submit</button> </form>'
//   );
console.log('Form successfuly filled');
    res.send('<h1>Form successfuly filled </h1>');
});


module.exports = router;