function range(){
    var i=0;
    var num=new Array();
     p=document.getElementById('number'); 
    

     for(i=1;i<=100;i++)
     {
         a=String(i);
          if(i%3==0||a.indexOf("3")>-1)
          {
            //  num[i]="PA";
            p.innerHTML+="PA";
              
          }
            
          else
        {
            //  num[i]=i;
            //   alert(num[i]);
            p.innerHTML+=i;
         }
            
     }
    //  document.getElementById('number').innerHTML=num;
     
}
range();