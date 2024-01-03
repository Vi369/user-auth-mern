const formSubmit = document.getElementById("submit")

formSubmit.addEventListener("click",(event) => {
  event.preventDefault();
  
  const userName = document.getElementById("username").value
  const userPassword = document.getElementById("password").value
  const userData = {
    username:userName,
    password:userPassword
  }

  userLogin(userData)

})

const userLogin = async (payload) => {
  try {

      const resp = await fetch("http://localhost:8000/login",{
        method:"POST",
        credentials: 'include',
        redirect: 'follow',
        headers:{"content-type":"application/json"},
        body:JSON.stringify(payload)
      })

      const data = await resp.json();
      console.log(data)
      window.location.href="http://localhost:5501/frontend/index.html";
    
  } catch (error) {
    console.log(error.message)
  }
}
