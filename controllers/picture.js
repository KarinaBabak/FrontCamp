module.exports = {
    getImgPath: function(file) {
        return file.destination + '/' 
            + file.filename + '.' 
            + file.mimetype.split('/')[1];
    }    
}

//