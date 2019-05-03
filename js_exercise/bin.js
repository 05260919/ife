var decNumber;
    function dec2bin(decNumber) {
    var decNumber=parseInt(document.getElementById('dec-number').value);
    var binbit=parseInt(document.getElementById('bin-bit').value);
    var bin=new Array();
    var binReverse=new Array();
    var i=0;
    var k=0;
    var m=0;


    if(decNumber<0)
        alert("请输入一个非负整数");
    else{
        while(decNumber>=1)
        {
            bin[i]=decNumber%2;
            // alert(bin[i]);
            if(bin[i]==0)
            decNumber=decNumber/2;
            else if(bin[i]==1)
            decNumber=(decNumber-1)/2;
          
            i++;

        }
        if(binbit<=i)
        {
            for(var j=i-1;j>=0;j--)
         {
             binReverse[k]=bin[j];
             k++;
         }
         document.getElementById('result').innerHTML=binReverse;
        }
        else{
            for( m=binbit-i;m>0;m--)
            {
                binReverse[k]=0;
                k++;
            }
            for(var j=i-1;j>=0;j--)
            {
                binReverse[k]=bin[j];
                k++;
            }
            document.getElementById('result').innerHTML=binReverse;
        }
         

    }

    
    // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
}
