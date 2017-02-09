export default ($resource) => {
    var url = '/api/articles/:articleId';
    return $resource(url, { articleId: '@id'}, {
        create: {
            method: "POST",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        },
        update: {
            method: "PUT",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        },
        delete: {
            method: 'DELETE',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    })
};