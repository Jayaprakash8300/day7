var countries = new XMLHttpRequest();
countries.open("GET",'https://restcountries.com/v2/all',true);
countries.send();
countries.onload= function(){
    var data = JSON.parse(countries.response);
    
    console.log(data.filter(element=>element));
    console.log(data.filter(element=> element.population<200000))
   
    //total population
   
    var con=[]
    for(var i=0;i<data.length;i++){
        con.push(data[i].population)
    }
    console.log(con.reduce((acc,cv)=>acc+cv))
    }


