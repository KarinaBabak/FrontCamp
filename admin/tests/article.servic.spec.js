describe('Article Service Tests', function ArticleServiceTests() {

    let articleService;
    let articles;
    let $httpBackend;

    angular.mock.module.sharedInjector();

    beforeAll(function () {
        angular.mock.module('adminApp');
    });

    beforeEach(inject(function ($injector, $q) {
        articleService = $injector.get('ArticleService');
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

    it('should fetch articles', function () {
        let currentResult;

        $httpBackend.expectGET('/admin').respond(articles);
        articleService.query().$promise.then(data => {
            currentResult = data;
        });
        $httpBackend.flush();

        expect(currentResult[0].id).toEqual(articles[0].id);
        expect(currentResult[1].id).toEqual(articles[1].id);
        expect(currentResult.length).toEqual(2);
    });
});