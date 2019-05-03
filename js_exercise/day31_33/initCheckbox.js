function initCheckbox(container, vals, checked_item) {
    var checkAll = '<input type="checkbox" value="全选" checkbox_type="all"/>全选';
    container.innerHTML += checkAll;
    for (var i = 0; i < vals.length; i++) {
        var ipt = document.createElement('input');
        ipt.value = vals[i];
        ipt.type = 'checkbox';
        ipt.setAttribute('checkbox_type', 'child');
        container.appendChild(ipt);
        container.innerHTML += vals[i];

    }

    container.addEventListener("click", function (event) {
        var tar = event.target;
         checkbox_item = container.getElementsByTagName('input');
        if (tar.type === 'checkbox') {
            for (var c = 1; c < checkbox_item.length; c++) {
                checkbox_item[c].removeAttribute('disabled');
            }
            checked_item.length = 0;
            var attr = tar.getAttribute('checkbox_type');
            if (attr === 'all') {
                for (var j = 0; j < checkbox_item.length; j++) {
                    if (!checkbox_item[j].checked) {
                        checkbox_item[j].checked = true;
                    }
                    if (j != 0) {
                        checked_item.push(checkbox_item[j].value);
                    }

                }
            }
            else if(attr==='child'){
                var status=[];
                var  pos=0;
                var idx=0;
                var res=[];
              //  console.log(typeof res);
                for(m=1;m<checkbox_item.length;m++){
                    status.push(checkbox_item[m].checked);
                }
               //console.log(status);
                findAll(status,true,res);
                if(res.length===checkbox_item.length-1){
                    checkbox_item[0].checked=true;
                }
                else if(res.length===1){
                    checkbox_item[res[0]+1].disabled='disabled';
                }
                else if(res.length<checkbox_item.length-1){
                checkbox_item[0].checked=false;
                }


                function findAll(arr,tar,res){
                    idx=arr.indexOf(tar,pos);
                    if(idx>-1){
                        res.push(idx);
                        pos=idx+1;
                        checked_item.push(checkbox_item[idx+1].value);
                    }
                    else{
                        return false;
                    }
                    if(pos<arr.length){
                        findAll(arr,tar,res);
                    }
                }
            }
        } 
        //console.log(checked_item);
          geneTable(getAllData());
    })
 

}  
initCheckbox(regionWrapper,region_checkbox_val,checked_items.regions);
initCheckbox(productWrapper,product_checkbox_val,checked_items.products);
