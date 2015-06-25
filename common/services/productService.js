(function(){
    "use strict";
    
    var productService = function(){
        
        var fnCalculateMarginPercent = function(price,cost){
            
            var margin = 0;
            
            if(price && cost){
                margin = (100 * (price - cost))/price;
            }
            
            margin = Math.round(margin);
            
            return margin;
        };
        
        var fnCalculateMarginAmount = function(price,cost){
            
            var margin = 0;
            
            if(price && cost){
                
                margin = price - cost;
            }
            
            margin = Math.round(margin);
            
            return margin;
        };
        
        var fnCalculatePriceFromPercent = function(cost,percent){
            
            var price = cost;
            
            if(cost && percent){
                
                price = cost + (cost * percent / 100);
                
                price = (Math.round(price * 100)) / 100;
                
            }
            
            return price;
        };
        
        var fnCalculatePriceFromAmount = function(cost,amount){
            
            var price = cost;
            
            if(cost && amount){
                
                price = cost + amount;
                
                price = (Math.round(price * 100)) / 100;
                
            }
            
            return price;
        };
        
        return{
            
            fnCalculateMarginPercent:fnCalculateMarginPercent,
            
            fnCalculateMarginAmount:fnCalculateMarginAmount,
            
            fnCalculatePriceFromMarkupPercent:fnCalculatePriceFromPercent,
            
            fnCalculatePriceFromMarkupAmount:fnCalculatePriceFromAmount
        }
        
    };
    
    angular.module("common.services")
            .factory("productService",
                     productService);
    
}());