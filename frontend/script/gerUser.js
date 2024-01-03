const getUserData = async()=>{
    try {
        const res = await fetch("http://localhost:8000/auth",{
            method:"GET",
            credentials:"include"
        });
        console.log(res)
        const {data} = await res.json();
        console.log(data);
        const userName = document.querySelector("#userName")
        const userEmail = document.querySelector("#userEmail")
        const userBio = document.querySelector("#userBio")
    
        userName.innerText = data.username;
        userEmail.innerText = data.email;
        userBio.innerText = data.bio;
    } catch (error) {
        console.log(error.message)
        // window.location.href = "http://localhost:5501/frontend/signIn.html"
    }
}

// call the function

getUserData()