window.onload=function(){
	    var oDiv=document.getElementById('cont');
		var oUl1=document.getElementById('list');
        var oLi1=document.getElementById('li');
		var button=document.getElementById('button')
        var buttons=button.getElementsByTagName('div');
		var prev=document.getElementById('prev');
		var next=document.getElementById('next');
        var index=0
        var timer;
        var time;
        var oLi1Width=parseInt(oLi1.clientWidth);
		//alert(buttons.length)
            function show(j){
                for(var i=0;i<buttons.length;i++){
                    buttons[i].className="";
                }
                buttons[j].className="on"
                clearInterval(time)
                time=setInterval(function(){
                    oUl1.style.left=oUl1.offsetLeft-oLi1Width+"px";
                },1200)
            }
        // button.onmouseover=function(){
        //     clearInterval(timer);
        // }
        // button.onmouseout=function(){
        //      timer=setInterval(function(){
        //             index++;
        //             if(index==buttons.length){
        //                 index=0;
        //             }
        //             show(index)
        //         },2000)
        // }
        // for(var i=0;i<buttons.length;i++){
        //     buttons[i].index=i;
        //     buttons[i].onmouseover=function(){
        //         show(this.index)
        //     }
        // }
            timer=setInterval(function(){
                    index++;
                    if(index==buttons.length){
                        index=0;
                    }
                    show(index)
                },2000)
                
           
}