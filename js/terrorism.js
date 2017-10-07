
        window.onload = function(){
            var canvas = document.getElementById('result');
            var btn = document.getElementById("card-list");
            var click = btn.getElementsByTagName("li");
            var text = document.getElementById("text");
            var show =document.getElementById("cover");
            var a  = " {"+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp'+"errno"+ ":" +"0"+","+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+"msg"+ ":" + "success" +","+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+"data"+":"+ "{"+'\n'+
                            '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+ '&nbsp;'+'&nbsp;'+"result"+":"+"0.0028921812772751"+'\n'+
                       '&nbsp;'+'&nbsp;'+'&nbsp;'+ "}"+'\n'+
                    "} "
            var b  =" {"+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp'+"errno"+ ":" +"0"+","+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+"msg"+ ":" + "success" +","+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+"data"+":"+ "{"+'\n'+
                            '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+ '&nbsp;'+'&nbsp;'+"result"+":"+"0.9997918009758"+'\n'+
                       '&nbsp;'+'&nbsp;'+'&nbsp;'+ "}"+'\n'+
                     "} "
            var c  =" {"+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp'+"errno"+ ":" +"0"+","+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+"msg"+ ":" + "success" +","+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+"data"+":"+ "{"+'\n'+
                            '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+ '&nbsp;'+'&nbsp;'+"result"+":"+" 0.99228948354721"+'\n'+
                       '&nbsp;'+'&nbsp;'+'&nbsp;'+ "}"+'\n'+
                     "} "
            var d = " {"+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp'+"errno"+ ":" +"0"+","+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+"msg"+ ":" + "success" +","+'\n'+
                        '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+"data"+":"+ "{"+'\n'+
                            '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+ '&nbsp;'+'&nbsp;'+"result"+":"+" 0.9997918009758"+'\n'+
                       '&nbsp;'+'&nbsp;'+'&nbsp;'+ "}"+'\n'+
                     "} "

                canvas.style.position = "absolute";
                canvas.style.left = "50%"
                canvas.style.top = "50%"
                canvas.style.transform ="translate(-50%, -50%) scale(0.869565)";
                canvas.style.transition = "all 1s"

                canvas.style.backgroundImage ="url(images/terrorism/demo-card-1.png)" 
                click[0].onclick = function(){
                    canvas.style.backgroundImage ="url(images/terrorism/demo-card-1.png)";
                    text.innerHTML =  a;
                    show.style.opacity = ".7";
                    show.style.backgroundImage ="url(images/terrorism/cover1.png)"
                };
                click[1].onclick = function(){
                    canvas.style.backgroundImage ="url(images/terrorism/demo-card-2.png)";
                    text.innerHTML =  b
                    show.style.opacity = ".7";
                    show.style.backgroundImage ="url(images/terrorism/cover.png)"
                };
                click[2].onclick = function(){
                    canvas.style.backgroundImage ="url(images/terrorism/demo-card-3.png)";
                    show.style.backgroundImage ="url(images/terrorism/cover1.png)"
                    text.innerHTML =  b;
                    show.style.opacity = ".7";
                }
                click[3].onclick = function(){
                    canvas.style.backgroundImage ="url(images/terrorism/demo-card-4.png)"
                     show.style.backgroundImage ="url(images/terrorism/cover.png)";
                     show.style.opacity = ".7";
                };
                click[4].onclick = function(){
                    canvas.style.backgroundImage ="url(images/terrorism/demo-card-5.png)"
                     show.style.backgroundImage ="url(images/terrorism/cover.png)";
                     show.style.opacity = ".7";
                }
                click[5].onclick = function(){
                    canvas.style.backgroundImage ="url(images/terrorism/demo-card-6.png)"
                     show.style.backgroundImage ="url(images/terrorism/cover1.png)";
                     show.style.opacity = ".7";
                }
                click[6].onclick = function(){
                    canvas.style.backgroundImage ="url(images/terrorism/demo-card-7.png)"
                     show.style.backgroundImage ="url(images/terrorism/cover1.png)";
                     show.style.opacity = ".7";
                }
                click[7].onclick = function(){
                    canvas.style.backgroundImage ="url(images/terrorism/demo-card-8.png)"
                     show.style.backgroundImage ="url(images/terrorism/cover1.png)";
                     show.style.opacity = ".7";
                }
        }
