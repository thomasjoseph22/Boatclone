

function display(id,cl){
    let id2 = document.getElementById(id)
    let cl2=document.getElementById(cl)
    id2.classList.remove("d-none");
    cl2.style.fontWeight="bolder";
}


function fade(id,cl){
    let id2 = document.getElementById(id)
    let cl2=document.getElementById(cl)
    id2.classList.add("d-none");
    cl2.style.fontWeight="";
}

function logins(){
    alert("You Have successfully logged-in")
}

function cart(){
    alert("Item added to cart")
}


function validateAndSubmit() {
    var Email = document.getElementById("email").value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(Email)) {
        alert("Please fill in all fields correctly.");
    } else {
        alert("Data submitted successfully!");
        document.getElementById("email").value = "";

       
    }
}