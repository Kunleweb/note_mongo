const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.remove();
};

const showAlert = (type, message) => {
  hideAlert(); // remove any existing alert

  // create alert div
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  alertDiv.textContent = message;
  alertDiv.title = 'notification';

  // apply styles directly
  Object.assign(alertDiv.style, {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)', // center horizontally
    minWidth: '200px',            // wider for readability
    padding: '15px 25px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: '10px',
    textAlign: 'center',
    zIndex: '1000',
    backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  });

  // add to DOM
  document.body.appendChild(alertDiv);

  // auto-hide after 5 seconds
  setTimeout(hideAlert, 5000);
};

const signup = async(name,email, password,passwordConfirm)=>{
     const res = await axios({
        method: 'POST',
        url: 'signup',
        data: {name,email, password, passwordConfirm},
        withCredentials:true
     })
     console.log('response from server', res.data)
    if(res.data.status === 'success'){
        showAlert('User Created', 'Succes!')
    }
    // if(res.data.status){
    //     window.location.href = 'http://127.0.0.1:3000/api/user/login/'
    // }
    };




document.getElementById('signupform').addEventListener('submit', (e)=>{
      e.preventDefault();
    console.log('login.js loaded');
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;
    signup(name,email, password,passwordConfirm);
});
  
document.getElementById('signupform').addEventListener('click', (e)=>{
    e.preventDefault();
    return window.location.href = '/'
})

