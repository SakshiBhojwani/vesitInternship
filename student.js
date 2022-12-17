var fName=document.querySelector(".firstName");
var lName=document.querySelector(".lastName");
var address=document.querySelector(".address");
var phoneNo=document.querySelector(".phoneNo");
var dob=document.querySelector(".dob");

function validate(){
    if(phoneNo.value.length==0||phoneNo.value.length<10){
        document.querySelector("#error").innerHTML="please fill valid phone no!";
        alert("please fill valid phone no!");
    }
    else if(fName.value.length!=0&&lName.value.length!=0&&address.value.length!=0&&phoneNo.value.length!=0&&dob.value.length!=0){
        alert("Student added successfully!!");
    }
}