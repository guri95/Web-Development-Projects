     var start=new Date().getTime();
        
        
        
        function makeShapeAppear(){
            var x=(Math.random()*200)+50;
            var y=Math.random()*400;
            
            document.getElementById("shape").style.top=y+"px";
            document.getElementById("shape").style.left=y+"px";
            document.getElementById("shape").style.width=x+"px";
            document.getElementById("shape").style.height=x+"px";
            document.getElementById("shape").style.display="block";
          //  alert(randomcolor());
            document.getElementById("shape").style.backgroundColor=randomcolor();
            
            if(Math.random()>0.5){
                document.getElementById("shape").style.borderRadius="50%";
            }else{
                 document.getElementById("shape").style.borderRadius="0%";
            }
            
            start=new Date().getTime();
        }
        function delay(){
            
            setTimeout(makeShapeAppear, Math.random() *1800)    //Wait 3 seconds
        }
        
        function randomcolor(){
            var letters='0123456789ABCDEF'.split('');
            var color='#';
            
            for(var i=0;i<6;i++){
                color+=letters[Math.floor(Math.random()*16)];
                
            }
            return color;
        }
      
        document.getElementById("shape").onclick=function(){
           
            document.getElementById("shape").style.display="none";
            var end=new Date().getTime();
            var timetaken=(-start+end)/1000;
            
            document.getElementById("timer").innerHTML=timetaken+" s";
            delay();
            
        }