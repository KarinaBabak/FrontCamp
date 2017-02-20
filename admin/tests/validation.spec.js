describe('Minimum Length Validation Tests', function () {
  var $scope, myFormText;

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element(
      '<form name="myForm"><textarea type="text" ng-model="text" ng-required="true" name="text" min-length-validation></textarea> </form>'
    );
    $scope.model = { text: undefined }
    $compile(element)($scope);
    myFormText = $scope.myForm.text;
  }));

    it('should be valid if text contains more than 20 symbols', function () {
      myFormText.$setViewValue('12345678901234567891011');
      expect(myFormText.$modelValue).toEqual('12345678901234567891011');
      expect(myFormText.$valid).toBe(true);
    });

    it('should be not valid if text contains less than 20 symbols', function () {
      myFormText.$setViewValue('one');
      $scope.$digest();
      expect(myFormText.$modelValue).toEqual('one');
      expect(myFormText.$valid).toBe(false);
    });

    it('should not pass with undefined value', function () {
      $scope.$digest();
      expect(myFormText.$valid).toBe(false);
    });
});