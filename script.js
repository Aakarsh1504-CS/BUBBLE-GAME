var score=0;
var hit;
var tim=60;
function makebubble(){
    var clutter=``;
    for(var i=1;i<=79;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div id="bubble">${rn}</div>`
}
document.getElementById("content").innerHTML=clutter;
}
function increasepoint(){
    score+=10;
    document.getElementById("k").textContent=score;
}
function gethit(){
  hit=Math.floor(Math.random()*10);
  document.getElementById("boxh").textContent=hit;
}
function timer(){
    var timer=setInterval(function(){
        if(tim>0){
            tim--;
            document.getElementById("box").textContent=tim;
        }
        else{
            clearInterval(timer);
            document.getElementById("content").innerText="Over";
        }
    },1000)
}
makebubble()
timer()
gethit()
document.getElementById("content").addEventListener("click",function(dets){
    var cn=Number(dets.target.textContent);
    if(cn===hit){
        increasepoint();
        gethit();
        makebubble();
    }
})