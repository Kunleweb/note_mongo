// const { default: axios } = require("axios");

const login = async(email, password)=>{
     const res = await axios({
        method: 'POST',
        url: '/api/user/login',
        data: {email, password},
        withCredentials:true
     })
     console.log('response from server', res.data);

    if (res.data.status === 'success') {
      // redirect after successful login
      window.location.href = '/api/v1/home'
    } 

}



document.getElementById('loginform').addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('login.js loaded');
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
})