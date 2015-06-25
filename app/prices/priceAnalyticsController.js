(function (){
    
    "use strict";
    
    var app = angular.module("productManagement");
    
    var PriceAnalyticsController = function($scope,$filter,products,productService){
        
        $scope.title = "Price Analytics";
        
        for(var i =0 ; i<products.length ; i++){
            
            products[i].marginPercent = productService.fnCalculateMarginPercent(products[i].price,
                                                                                products[i].cost);
            
            products[i].marginAmount = productService.fnCalculateMarginAmount(products[i].price,
                                                                                products[i].cost);
            
        }
        
        var orderedProductsAmount = $filter("orderBy")(products,"marginAmount");
        
        var filteredProductsAmount = $filter("limitTo")(orderedProductsAmount,5);
        
        var chartDataAmount = [];
        
        for(var i=0;i<filteredProductsAmount.length;i++){
            
            chartDataAmount.push({
                x:filteredProductsAmount[i].productName,
                y:[filteredProductsAmount[i].cost,
                  filteredProductsAmount[i].price,
                  filteredProductsAmount[i].marginAmount]
            }); 
        }
        
        $scope.dataAmount = {
            
            series:["Cost","Price","Margin Amount"],
            
            data:chartDataAmount
        };
        
        $scope.configAmount = {
            title:"Top $ margin products",
            tooltips:true,
            lables:false,
            mouseover:function(){
            },
            mouseout:function(){
            },
            click:function(){
            },
            legend : {
                display:true,
                position:'right'
            }
        };
        
        var orderedProductsPercent = $filter("orderBy")(products,"marginAmount");
        
        var filteredProductsPercent = $filter("limitTo")(orderedProductsAmount,5);
        
        var chartDataPercent = [];
        
        for(var i=0;i<filteredProductsPercent.length;i++){
            
            chartDataPercent.push({
                x:filteredProductsPercent[i].productName,
                y:[filteredProductsPercent[i].marginPercent]
            });
        }
        
        $scope.dataPercent = {
            
            series:["Margin %"],
            
            data:chartDataPercent
        };
        
        $scope.configPercent = {
            title:"Top % margin products",
            tooltips:true,
            lables:false,
            mouseover:function(){
            },
            mouseout:function(){
            },
            click:function(){
            },
            legend:{
                display:true,
                position:'right'
            }
        };

    };
    
    app.controller("PriceAnalyticsController", PriceAnalyticsController);

}());