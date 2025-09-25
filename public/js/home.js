
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



function showPage(pageId, button) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById(pageId).style.display = 'flex';
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  button.classList.add('active');
}

const save_content = async(title, content)=>{
    const res = await axios({
        method: 'POST',
        url: '/api/note/addnote',
        data: {title, content},
        withCredentials: true
    })
    console.log(res.data);
    if(res.data.status === 'success'){
        showAlert('Note added', 'Success!')
    }
}




document.getElementById('save_content').addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('pinged!')
    const title = e.target.title.value;
    const content = e.target.content.value;
    save_content(title, content)

})




document.querySelectorAll('.delete-note-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const slug = form.dataset.slug;
      const res = await axios.delete(`/api/note/deletenote/${slug}`);
      if(res.data.status === 'success'){
        form.parentElement.remove();
      } else {
        showAlert('sucesss!', 'done');
        //will fix this  later
      }
    
  });
});




