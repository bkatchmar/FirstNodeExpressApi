app.controller("ctrl", function($scope, caller) {
    $scope.todoitems = [];
    caller.getEndpoint("/api/v1/todos").then(function (response) {
        console.log(response.data);
    });
});