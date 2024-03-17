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
  if (saveData) {
    const { email, message } = JSON.parse(sizeForm);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

form.addEventListener('input', changeForm);
document.addEventListener('load', loadForm);

form.addEventListener('submit', event => {
  event.preventDefault();
  
  localStorage.removeItem('feedback-form-state');

  if (form.elements.email.value === '') {
    alert('Please enter your email');
  }

  if (form.elements.message.value === '') {
    alert('Please enter your message');
  }

  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });

  form.reset();
});