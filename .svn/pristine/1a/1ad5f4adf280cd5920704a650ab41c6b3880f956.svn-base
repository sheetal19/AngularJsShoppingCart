(function(){
    
    "use strict";
    
    var app = angular.module("common.services");
    
    var productResource = function ($resource){
        
        return $resource("/api/products/:productId");
    
    };
    
    app.factory("productResource",["$resource",productResource]);

}());