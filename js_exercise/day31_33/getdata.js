function getData(region,product){
    //console.log(checked_items.regions);
    for(var i=0;i<sourceData.length;i++){
       if(sourceData[i].region===region&&sourceData[i].product===product){
            if(checked_items.regions.length===1){
              var  oneRow =[sourceData[i].region,sourceData[i].product]
            }
            else{
              var  oneRow=[sourceData[i].product,sourceData[i].region]
            }
            for(var j=0;j<12;j++){
            oneRow.push(sourceData[i].sale[j]);
            }
        }
        
    }
   return oneRow;
}
function getAllData(){
    var allData=[];
    for(var a=0;a<checked_items.products.length;a++)
        for(var b=0;b<checked_items.regions.length;b++){
            allData.push(getData(checked_items.regions[b],checked_items.products[a]));
    }
  //  console.log(allData);
    return allData;

}