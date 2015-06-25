(function (){
    
    "use strict";
    
    //Get module object
    var app = angular.module("productManagement");

    var ProductDetailController = function ($scope,product,productService) {
        
        $scope.product = product;
        
        $scope.title = "Product Detail: " + $scope.product.productName;
        
        if($scope.product.tags){
            
            $scope.product.tagList = $scope.product.tags.toString();
            
        }
        
        $scope.marginPercent = productService.fnCalculateMarginPercent($scope.product.price,
                                                                      $scope.product.cost);
        
    }
    
    app.controller("ProductDetailController",ProductDetailController);
    
}());