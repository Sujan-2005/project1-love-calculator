function calculateLove(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();

    if(name1===""||name2===""){
        alert("Please fill the input.");
    }else{
        var lovepercentage=(Math.floor(Math.random()*100))+1;
        var result=document.getElementById("result");
        result.innerHTML=`${name1} And ${name2}'s Love Percentage Is = ${lovepercentage}`;
    
        if(lovepercentage<30){
        result.innerHTML+="<br> Not A Great Match! Find Others."
        }
        else if(lovepercentage<80){
        result.innerHTML+="<br> The Match Is Somewhat Ok! Keep Trying."
        }
        else{
            result.innerHTML+="<br> Great Match! Don't Search Others."
        }
}
}