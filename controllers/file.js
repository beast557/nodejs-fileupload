const path = require('path')
exports.upload_file = async(req,res,next)=>{
try {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    sampleFile = req.files.foo;
    uploadPath =  path.join(__dirname, '..','uploads', sampleFile.name) ;
    const fileDetails = {
        name: req.files.foo.name,
        mimetype: req.files.foo.mimetype,
        size: (req.files.foo.size)/1000+" kb",
        checksum: req.files.foo.md5
    }
    sampleFile.mv(uploadPath, function(err) {
        if (err)
          return res.status(500).send(err);
        res.send({msg:'File uploaded!',
    fileDetails});
      });
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error'); 
}
}