export default ($resource) => {
    var url = '/api/articles/categories';
    return $resource(url, {}, {
        get: {
            method: "GET",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }})
};