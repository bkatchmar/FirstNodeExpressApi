// Service to call external APIs
app.service("caller", function($http, $q) {
    // Call any endpoint via basic get request
    this.getEndpoint = function(url) {
        var deferred = $q.defer();

        $http.get(url, { headers : {} }).then(function(data) {
            deferred.resolve(data);
        }, function(data) {
            deferred.reject("There was an error");
        });

        return deferred.promise;
    }
});