const form = document.querySelector('.feedback-form');

const changeForm = () => {
  const formWork = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formWork));
};

const loadForm = () => {
  const sizeForm = localStorage.getItem('feedback-form-state');
  if (sizeForm) {
    const { email, message } = JSON.parse(sizeForm);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

form.addEventListener('input', changeForm);
window.addEventListener('load', loadForm);


form.addEventListener('submit', validForm)
  
  function validForm(event){
  event.preventDefault();
  
  localStorage.removeItem('feedback-form-state');

  if (form.elements.email.value === '') {
    alert('Введіть будь ласка свою електронну адресу (email)');
  } else if(form.elements.message.value === '') {
    alert('Введіть будь ласка своє повідомлення (message)');
  }

  if (form.elements.email.value.trim() && form.elements.message.value.trim()) {
    console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim()});
  }
  
 if (form.elements.email.value.trim() && form.elements.message.value.trim()) {
  form.reset();
 }
  
};












