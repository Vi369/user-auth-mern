const formSubmit = document.getElementById("submit");

formSubmit.addEventListener("click", (event)=>{
    event.preventDefault()

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const userData = {
        username,
        password
    }
    userLogin(userData)
})

const userLogin = async(payload)=>{
  try {
    const res =  await fetch("http://localhost:8000/login",{
          method: "POST",
          credentials: 'include',
          redirect: 'follow',
          headers: {"content-type":"application/json"},
          body: JSON.stringify(payload)
      });
      const isLoggin = await res.json()
      console.log(isLoggin)
      window.location.href="http://localhost:5501/frontend/index.html";

  } catch (error) {
    console.log(error.message)
  }

}
