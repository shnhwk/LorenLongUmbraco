angular.module("umbraco")
.controller("Macro.texteditor",
function ($scope) {
    $scope.textInput = {
        label: 'bodyText',
        description: 'Load some stuff here',
        view: 'rte',
        value: $scope.model.value,
        config: {
            editor: {
                toolbar: ["code", "styleselect", "bold", "italic", "underline", "link", "unlink", "alignleft", "alignright", "aligncenter", "alignjustify"],
                stylesheets: ["EditorStyles"],
                dimensions: { height: 400 }
            }
        }
    };
    $scope.$watch('textInput.value', function (newValue, oldValue) {
        $scope.model.value = newValue;
    });
});