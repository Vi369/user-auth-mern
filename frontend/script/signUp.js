const formSubmit = document.getElementById("submit");
formSubmit.addEventListener("click",(event)=>{
    event.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const fullName = document.getElementById("name").value
    const bio = document.getElementById("bio").value

    if(!username && email && password && fullName && bio) {  
        return alert("All input fields are required")
    }
   
    const userData = {
        fullName,
        email,
        bio,
        password,
        username
    }

    registerUser(userData)

})

// function declaration
 
const registerUser = async(payload)=>{
    try {
        const res = await fetch("http://localhost:8000/register",{
            method: "POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(payload)
        })

        const userData = await res.json()
        console.log(userData);
        window.location.href="http://localhost:5501/frontend/signIn.html"
    } catch (error) {
        console.log(error.message);
    }

}

