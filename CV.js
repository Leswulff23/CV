window.addEventListener('load', () => {

    document.getElementById("result-fname").innerHTML= localStorage.getItem("FName");
    document.getElementById("result-mlname").innerHTML=localStorage.getItem("MName")+" "+localStorage.getItem("LName");
    document.getElementById("result-gender").innerHTML=localStorage.getItem("Gender");
    document.getElementById("result-phone").innerHTML=localStorage.getItem("Phone");
    document.getElementById("result-email").innerHTML=localStorage.getItem("Email");
    document.getElementById("result-postal").innerHTML=localStorage.getItem("Postal");
})