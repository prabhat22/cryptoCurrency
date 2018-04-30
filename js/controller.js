app.controller("myctrl",($scope,myfactory)=>{
  
    
        console.log("load call cntrl");
        var pr=myfactory.talkToServer();
        console.log("Data set ctrl");
      
        pr.then(function(data){
            console.log(data);
            $scope.result=data.data;
            $scope.total=data.data.length;
            Operations.prepareObject($scope.result);
           
         
           
        },function(err){
            $scope.error=err;
        })
       
     $scope.moreInfo=function(rank)
     {
      var object=Operations.search(rank);
      $scope.heading=object.name;
      $scope.name="Name is:" + object.name;
      $scope.rank="Rank is:"+object.rank;
      $scope.symbol="Symbol is:"+ object.symbol;
      $scope.price="Price is:"+ object.price;
      $scope.market="Market_Cap is:"+ object.market_cap;
      console.log(object)

     }
    
});