 window.onscroll=function(){
        var qq=document.getElementById('qq_1');
        var oTb=document.getElementById('tb');
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>3500){
            qq.style.display="none"
        }
        else{
            qq.style.display="block";
        }
        if(scrollTop>900){
            oTb.style.display="block";
        }
        else{
            oTb.style.display="none"
        }
        qq.onclick=function(){
            document.body.scrollTop=document.documentElement.scrollTop=4000;
        }
        oTb.onclick=function(){
            document.body.scrollTop=document.documentElement.scrollTop=0;
        }
    }