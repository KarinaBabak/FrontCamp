export default ($resource) => {
    var url = '/category';
    return $resource(url, {}, {
        get: {
            method: "GET",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }})
};