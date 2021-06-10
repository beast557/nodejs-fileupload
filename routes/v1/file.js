const express = require('express');
const router = express.Router();

const {upload_file} = require('../../controllers/file')
router.post("/upload", upload_file);

module.exports = router;