
var user=document.querySelector("#user");
user.addEventListener('keyup',function(){
    var u_wrong=document.querySelector(".u_wrong");
    var u_check=document.querySelector(".u_check");
    if(user.value.length==0||user.value.length<6){
        user.style.border='2px solid red';
        u_wrong.style.display='block';
        u_check.style.display='none';
        return false;
    }else{
        user.style.border='2px solid green'
        u_wrong.style.display='none';
        u_check.style.display='block';
    }
})

var pass=document.querySelector("#pass");
pass.addEventListener('keyup',function(){
    var p_wrong=document.querySelector(".p_wrong");
    var p_check=document.querySelector(".p_check");
    if(pass.value.length==0||pass.value.length<6){
        pass.style.border='2px solid red';
        p_wrong.style.display='block';
        p_check.style.display='none';
        return false;
    }else{
        pass.style.border='2px solid green'
        p_wrong.style.display='none';
        p_check.style.display='block';
    }
})

function validate(){
    var pass=document.querySelector("#pass");
    var user=document.querySelector("#user");
    if(user.value.length==0||user.value.length<6){
        document.querySelector("#error").innerHTML="please fill the required feilds!";
        alert("enter valid username");
        return false;
    }else if(pass.value.length==0||pass.value.length<6){
        document.querySelector("#error").innerHTML='please fill the required feilds!';
        alert("enter valid password");
        return false;  
    }
    else{
        alert("Logged in successfully");
    }
}