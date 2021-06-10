const path = require('path')
const { v4  } = require('uuid');

exports.upload_file = async(req,res,next)=>{
try {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    sampleFile = req.files.foo;

    fileName = sampleFile.name+v4()
    uploadPath =  path.join(__dirname, '..','uploads',fileName ) ;
    const fileDetails = {
        name: fileName,
        mimetype: sampleFile.mimetype,
        size: (sampleFile.size)/1000+" kb",
        checksum: sampleFile.md5
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