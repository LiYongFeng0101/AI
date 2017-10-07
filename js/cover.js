window.onload = function(){
    var show = document.getElementById("background")
    var click = document.getElementById("consult")
    var close = document.getElementById("close")
    var modal = document.getElementById("modal")

    click.onclick = function(){
        show.style.display = "block"
    }
    show.onclick = function(){
        show.style.display = "none";  
    }

    modal.onclick = function(ev){
        var oEvent=ev||event;
        oEvent.cancelBubble=true;
        show.style.display = "block"
    }
    close.onclick = function(ev){
         var oEvent=ev||event;
        oEvent.cancelBubble=true;
        show.style.display = "none"
    }
}
   

