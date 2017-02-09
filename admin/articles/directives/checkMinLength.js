export const minLengthValidation = () => {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.minLengthValidation = function (modelValue) {
                if(modelValue === undefined)
                    return false;
                return modelValue.length >= 20;
            };
        }
    }
}