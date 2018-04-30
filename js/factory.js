app.factory("myfactory",($http,$q)=>{
    const object={
        talkToServer(){
            var pr=$q.defer();
            console.log("SERVER CALL FACTORY");
            var url="https://api.coinmarketcap.com/v1/ticker/";
            $http.get(url).then(success,fail);

            function success(data){
                console.log("Success",data);
                pr.resolve(data);
            }
            function fail(error){
                pr.reject(error);
            }
            return pr.promise;
        }
    };
    return object;
})