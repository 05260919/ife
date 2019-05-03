function geneTable(data){
    thWrapper.innerHTML='';
    if(checked_items.regions.length === 1){
        var theader = ["地区","商品","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    }else{
        var theader = ["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    }

    for(var i=0;i<theader.length;i++){
        var th=document.createElement('th');
        th.innerHTML=theader[i];
        thWrapper.appendChild(th);
    }
    tby.innerHTML='';
    
   // console.log(data.length);
    for(m=0;m<data.length;m++){
        var tr=document.createElement('tr');
        for(n=0;n<theader.length;n++){
            var trtd=document.createElement('td');
            trtd.innerHTML=data[m][n];
            tr.appendChild(trtd);
        }
        tby.appendChild(tr);
    
    }

    //合并共同项
    for(var r = 0;r < data.length;r++){
        for(var s = r+1;s < data.length;s++){
            if(tby.children[r].children[0].innerText === tby.children[s].children[0].innerText){
                tby.children[s].children[0].style.display = "none";
                tby.children[r].children[0].rowSpan += 1;
            }else{
                break;
            }
        }
       // r = s - 1;
    }
        
}
