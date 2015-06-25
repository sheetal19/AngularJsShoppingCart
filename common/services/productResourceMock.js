(function(){
    
    "use strict";
    
    var app = angular.module("productResourceMock",["ngMockE2E"]);
    
    app.run(function ($httpBackend){
        
        var products =[
                        {"productId":1,
                        "productName":"Laptop 1",
                        "productCode":"LAP2014",
                        "releaseDate":"20/12/2014",
                        "description":"i5 3rd Gen 15inch 500GB HDD 4GB RAM",
                        "cost":1000.00,
                        "price":1250.00,
                        "category":"Computer",
                        "tags":["laptop","computer","electronics"],
                        "imageUrl":"http://img5a.flixcart.com/image/computer/z/p/f/lenovo-essential-notebook-400x400-imadw8cxmywuwhuy.jpeg"
                        },
                        {"productId":2,
                        "productName":"Laptop 2",
                        "productCode":"LAP2015",
                        "releaseDate":"20/12/2014",
                        "description":"i5 3rd Gen 15inch 500GB HDD 4GB RAM",
                        "cost":500.00,
                        "price":650.00,
                        "category":"Computer",
                        "tags":["laptop","computer","electronics"],
                        "imageUrl":"http://img5a.flixcart.com/image/computer/j/5/g/hp-notebook-15-s003tu-200x200-imaeyf6e5cgmhn9r.jpeg"
                        }
        ];
        
        var productUrl = "/api/products";
        

        $httpBackend.whenGET(productUrl).respond(products);
        
        var editRegEx = new RegExp(productUrl + "/[0-9][0-9]*",'');
        
        $httpBackend.whenGET(editRegEx).respond(function (method,url,data){
            
            var product = { "productId" : 0};
            
            var parameters = url.split('/');
            
            var length = parameters.length;
            
            var id = parameters[length - 1];
            
            if(id > 0){
                
                for(var i = 0;i<products.length;i++){
                    
                    if(products[i].productId == id)
                    {
                        product = products[i];
                        
                        break;
                    }
                }
            }
            
            
            return [200, product,{}];
        });
        
        $httpBackend.whenPOST(productUrl).respond(function(method,url,data){
            
            var product = angular.fromJson(data);
            
            if(!product.productId){
                
                //New product id...
                product.productId = products[products.length - 1].productId + 1;
                
                products.push(product);
            }
            else{
                
                //Update the product data...
                for(var i = 0; i < products.length; i++){
                    
                    if(products[i].productId == product.productId)
                    {
                        products[i] = product;
                        
                        break;
                    }
                }
            }
            
            return [200, product,{ }];
        });
        
        $httpBackend.whenGET(/app/).passThrough();
    
    });
    
    

}());