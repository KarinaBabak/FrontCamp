module.exports = {
    getImgPath: function(file) {
        return file.destination.split('/')[1] + '/' 
            + file.filename;
    }    
}
