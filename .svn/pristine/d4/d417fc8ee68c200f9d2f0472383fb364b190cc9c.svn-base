(function(){
    
    "use strict";
    
    //Get module object
    var app = angular.module("productManagement");
    
    var ProductEditController = function($scope,$state,product,productService){
        
        $scope.product = product;
        
        $scope.priceOption = "percent";
        
        $scope.fnMarginPercent = function(){
            
            return productService.fnCalculateMarginPercent($scope.product.price,$scope.product.cost);
            
        };

        //Calculate the price based on markup precent or amount
        $scope.fnCalculatePrice = function(markup){
            
            var price = 0;
            
            if($scope.priceOption == "amount"){
                
                price = productService.fnCalculatePriceFromMarkupAmount($scope.product.cost, markup);
                
            }
            else{
                
                price = productService.fnCalculatePriceFromMarkupPercent($scope.product.cost,markup);
            }
            
            $scope.product.price = price;
        };
        
        
        if($scope.product && $scope.product.productId){
            
            $scope.title = "Edit: " + $scope.product.productName;
        }
        else{
            
            $scope.title = "New Product";
        }
        
        $scope.fnOpen = function ($event){
            
            $event.preventDefault();
            
            $event.stopPropagation();
            
            $scope.opened = !$scope.opened;
        };
        
        $scope.fnSubmit = function (isValid){
            
            if(isValid){
                
                product.$save(function(data){
                
                toastr.success("Save successfull");
                    
                });
            }
            else
            {
                alert("Please conrrect the validation error first.");
            }
        };
        
        $scope.fnCancel = function (){
            
            $state.go("productList");
        };
        
        $scope.fnAddTags = function(tags){

            if(tags){
                
                var array = tags.split(',');
                
                $scope.product.tags = product.tags ? product.tags.concat(array): array;
                
                $scope.newTags = "";
            }
            else{
                
                alert("Please enter one or more tags separted by commas");
            }
        };
        
        $scope.fnRemoveTags = function(index){
            
            $scope.product.tags.splice(index,1);
            
        };
    };
    
    app.controller("ProductEditController",ProductEditController);

}());