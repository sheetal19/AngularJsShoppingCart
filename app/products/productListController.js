(function (){
    
    "use strict";
    
    //Get module object
    var app  = angular.module("productManagement");
    
    //Define product list controller
    var ProductListController = function($scope, productResource){
        
        
       productResource.query(function(data){
           
           $scope.products = data
               
       });
        
       $scope.showImage = false;
        
       $scope.fnToggleImage = function(){
            
           $scope.showImage = !$scope.showImage
       };
    };
    
    app.controller("ProductListController", ["$scope","productResource", ProductListController]);
    

}());