
        window.onload = function(){
            var oBtn1 = document.getElementById("btn1");
            var oBtn2 = document.getElementById("btn2")
            var oBtn3 = document.getElementById("btn3")
            var oBtn4 = document.getElementById("btn4")
            var btn= document.getElementById("show");
            var video = document.getElementById("video")

            var anotherCover = document.getElementById("cover1");
            var anotherCover2 = document.getElementById("cover2");
            var anotherCover3 = document.getElementById("cover3");
            var anotherCover4 = document.getElementById("cover4")
            
            var show = document.getElementById("img-cover");
            var tit = document.getElementById("tit")
            var cover = document.getElementById("cover");
            
            oBtn1.onclick = function(){
                anotherCover.style.display ="none";
                cover.style.backgroundImage = "url(images/video/poster-1.png)"
                show.setAttribute("src","images/video/poster-1.png");
                tit.innerHTML = "回到汪星球_百度感恩节微电影";
                if(anotherCover2.style.display = "none"){
                    anotherCover2.style.display = "block"
                }
                if(anotherCover3.style.display = "none"){
                    anotherCover3.style.display = "block"
                }
                if(anotherCover4.style.display = "none"){
                    anotherCover4.style.display = "block"
                }
            }
            oBtn2.onclick = function(){
                if(anotherCover.style.display ="none"){
                    anotherCover.style.display ="block";   
                }
                if(anotherCover3.style.display ="none"){
                    anotherCover3.style.display ="block";   
                }
                if(anotherCover4.style.display = "none"){
                    anotherCover4.style.display = "block"
                }
                anotherCover2.style.display="none"
                show.setAttribute("src","images/video/poster-2.png");
                cover.style.backgroundImage = "url(images/video/poster-2.png)"
                video.setAttribute("src", "https://gcik9stp4yee5v0aciu.exp.bcevod.com/mda-hdet2kxz3n4afc89/hdet45e7efbnkb8pw52/mda-hdet2kxz3n4afc89.mp4");
                tit.innerHTML = "百度云宣传片";
            }
            oBtn3.onclick = function(){
                if(anotherCover.style.display ="none"){
                    anotherCover.style.display ="block";   
                }
                if(anotherCover2.style.display ="none"){
                    anotherCover2.style.display ="block";   
                }
                if(anotherCover4.style.display = "none"){
                    anotherCover4.style.display = "block"
                }
                anotherCover3.style.display="none";
                cover.style.backgroundImage = "url(images/video/poster-3.png)"
                show.setAttribute("src","images/video/poster-3.png");
                tit.innerHTML = "百度索引真实世界";
                video.setAttribute("src", "https://gcik9stp4yee5v0aciu.exp.bcevod.com/mda-hdet98mvf8sw12nv/hdetreka5kduke72pz7/mda-hdet98mvf8sw12nv.mp4")
            }
            
            oBtn4.onclick = function(){
                if(anotherCover.style.display ="none"){
                    anotherCover.style.display ="block";   
                }
                if(anotherCover2.style.display ="none"){
                    anotherCover2.style.display ="block";   
                }
                if(anotherCover3.style.display = "none"){
                    anotherCover3.style.display = "block"
                }
                anotherCover4.style.display="none"
                cover.style.backgroundImage = "url(images/video/poster-4.png)"
                show.setAttribute("src","images/video/poster-4.png");
                tit.innerHTML = "无人车实拍";
                video.setAttribute("src", "https://gcik9stp4yee5v0aciu.exp.bcevod.com/mda-hdetr6d0eec0spw1/hdet7ms0c8gg38kausq/mda-hdetr6d0eec0spw1.mp4")
            }
            btn.onclick = function(){
                cover.style.display = "none";
            }
        }