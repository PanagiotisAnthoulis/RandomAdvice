function gen(){
$.getJSON("https://api.adviceslip.com/advice",function(data){
console.log(data);
document.getElementById('advice').innerText=data.slip.advice;
 
});}

function search($x){
    $.getJSON("https://api.adviceslip.com/advice/search/"+$x,function(data){
    console.log(data);
    document.getElementById('advice').innerHTML='';
    var o=1
    for(var i=0;i<data.slips.length;i++){
        
        document.getElementById('advice').innerHTML+=o+'.'+data.slips[i].advice+'<br>';
        o++;
    }
    });}