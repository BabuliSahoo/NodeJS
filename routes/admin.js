const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="Text" name="Title"><button type="submit">Add Product</button><form1>'
  );
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
