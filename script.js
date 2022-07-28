function navin() {
  var name=document.getElementById('fn');
  if(name.value=='' ){
    name.style.border="solid 1px red";
    document.getElementById('lb1').style.visibility="visible";
    return false;
  }
  var lname=document.getElementById('ln');
  if(lname.value=='' ){
    lname.style.border="solid 1px red";
    document.getElementById('lb2').style.visibility="visible";
    return false;
  }
  var age=document.getElementById('age');
  if(age.value=='' ){
    age.style.border="solid 1px red";
    document.getElementById('lb3').style.visibility="visible";
    return false;
  }
  var gm=document.getElementById('gm');
  var gf=document.getElementById('gf');
  if(gm.checked==false && gf.checked==false)
  {
    document.getElementById('lb4').style.visibility="visible";
    return false;
  }

  var gender="";
  if(gm.checked==true)
  {
    gender="male";
  }
  else if(gf.checked==true)
  {
    gender="female";
  }
  var num=document.getElementById('num');
  if (num.value=="")
  {
    num.style.border="solid 1px red";
    document.getElementById('lb5').style.visibility="visible";
    return false;
  }
  var emai=document.getElementById('em');
if (emai.value=="")
{
  emai.style.border="solid 1px red";
  document.getElementById('lb6').style.visibility="visible";
  return false;
}
  var psw1=document.getElementById('psw1');
  if(psw1.value=='' ){
    psw1.style.border="solid 1px red";
    document.getElementById('lb7').style.visibility="visible";
    return false;
  }
  var regx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (regx.test(psw1.value)){}
  else{
    alert("invalid");
  }
  var psw2=document.getElementById('psw2');
  if(psw2.value=='' ){
    psw2.style.border="solid 1px red";
    document.getElementById('lb7').style.visibility="visible";
    return false;
  }
  else if(psw2.value==psw1.value){
    return true;
  }
  else if(psw2.value!=psw1.value ){
    psw2.style.border="solid 1px red";
    document.getElementById('lb8').style.visibility="visible";
    return false;
  }



}
