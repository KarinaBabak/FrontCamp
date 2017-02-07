export default () => {
    return (input) => {
        if (angular.isString(input)) {
            return angular.uppercase(input[0]) + angular.lowercase(input.substring(1))
        }
        else {
            return input;
        }
    };
}