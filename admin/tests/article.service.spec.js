describe('Article Service Tests', function ArticleServiceTests() {

    let articleService;
    let articles;
    let $httpBackend;

    angular.mock.module.sharedInjector();

    beforeAll(function () {
        angular.mock.module('adminApp');
    });

    beforeEach(inject(function ($injector, $q) {
        articleService = $injector.get('articleService');
        $httpBackend = $injector.get('$httpBackend');

        articles = [{
            _id: 1,
            title: 'Super article1',
            content: 'text1'
        }, {
            _id: 2,
            title: 'Super article2',
            content: 'text2'
        }];
    }));

    afterEach(function () {
        articleService = null;

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return all articles', function shouldReturnArticles() {
        let currentResult;

        $httpBackend.expectGET('/api/articles').respond(articles);
        articleService.query().$promise.then(data => {
            currentResult = data;
        });
        $httpBackend.flush();

        expect(currentResult[0]._id).toEqual(articles[0]._id);
        expect(currentResult[1]._id).toEqual(articles[1]._id);
        expect(currentResult.length).toEqual(2);
    });

    xit('should add new article', function shouldAddArticle() {
        articleService.add(articles[0]);
		$httpBackend.flush();
		expect(articleService.add).toHaveBeenCalledWith({}, new FormData());
    });
});