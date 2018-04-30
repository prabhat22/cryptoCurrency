const Operations=
{ 
    currencyArr:[],

    prepareObject(data)
    {  
        for(let post of data)
        {
            var object=new Currency(post.rank,post.name,post.symbol,post.price_usd,post.market_cap_usd);
           
            this.currencyArr.push(object);
        
        }
       
    },
    search(id)
  {
    return this.currencyArr.filter(obj=>obj.rank==id)[0];
  },
    getArray()
    {
        return this.currencyArr;
    }
  
}