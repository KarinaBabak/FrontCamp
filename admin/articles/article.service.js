export default ($resource) => {
    var url = '/api/articles';
    return $resource(url, {}, {
        create: {
            method: "POST",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        },
        edit: {
            method: "PUT",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }})
};