function showMessage(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    document.getElementById("message").textContent = 
    "Form submitted sucessfully!" + "\n" +
    "Hello" + name + "(" + gender + ")" +
    " We'll contact you at " + email +
    (phone ? " or phone:" + phone: "");

    console.log("User has", name.length, "characters in name");
    console.log("User lives at", address);

}
function resetFunction(){
        document.getElementById("myForm").reset();
    }