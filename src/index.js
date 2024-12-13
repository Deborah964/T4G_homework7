let username=prompt("enter your name");
let age=prompt("enter your age");
let email=prompt("enter your email");
if(age<12){
    alert('Hi ${username}you are ${age}years old and you are too young to register.Sorry,try again some time');
   } else if(age>=12 && age <=18){
    alert('Hi ${username},you are ${age} years old and you have limited options to register for.we will keep in touch via your email:${email}');

   }else if(age>=18)
   {
    alert(`Hi ${username},you are ${age} years old and you can register for any option of your choice.We will keep in touch via your email:${email} byee `);
   } else{
    alert('Invalid input,please refresh your page and try again or better still submit another response');
   }