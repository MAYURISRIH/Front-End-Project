//================= Tap area ===========================

function handleClick(num) {
  console.log('num', num);
  const hide = document.getElementsByClassName('login_container');
  for (const element of hide) {
    element.style.display = 'none';
  }

  const show = document.getElementById('container' + num);
  show.style.display = 'flex';

  const buttons = document.getElementsByTagName('button');
  for (const element of buttons) {
    element.classList.remove('active');
  }

  const selectedButton = document.getElementById('button' + num);
  selectedButton.classList.add('active');
}
handleClick(1);
//=================== login page ============================
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const tickIcon = document.getElementById('tick_icon');
const errorIcon = document.getElementById('error_icon');
const eyeIcon = document.getElementsByClassName('eye_icon')[0];
const emailHelperText = document.getElementById('email_helper_text');
const passwordHelperText = document.getElementById('password_helper_text');
let isValidEmail = false;
let isValidPassword = false;
emailElement.addEventListener('keyup', (event) => {
  const { value } = event.target;
  isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  if (isValidEmail) {
    tickIcon.style.display = 'block';
    errorIcon.style.display = 'none';
    emailElement.classList.remove('error');
    emailHelperText.style.display = 'none';
  } else {
    errorIcon.style.display = 'block';
    tickIcon.style.display = 'none';
  }
});

passwordElement.addEventListener('keyup', (event) => {
  const { value } = event.target;
  if (value.length > 0) {
    passwordElement.classList.remove('error');
    passwordHelperText.style.display = 'none';
    isValidPassword = true;
  }
});

function showPassword() {
  if (passwordElement.type === 'password') {
    passwordElement.type = 'text';
    eyeIcon.src = './assets/close_eye.png';
  } else {
    eyeIcon.src = './assets/open_eye.png';
    passwordElement.type = 'password';
  }
}

function login() {
  if (!isValidEmail) {
    emailElement.classList.add('error');
    emailHelperText.style.display = 'block';
  }
  if (!isValidPassword) {
    passwordElement.classList.add('error');
    passwordHelperText.style.display = 'block';
  }
  if (isValidEmail && isValidPassword) {
    alert('login Success');
    tickIcon.style.display = 'none';
    emailElement.value = '';
    passwordElement.value = '';
  }
}

//========================= signup page =====================

const allInputs = document.querySelectorAll('.input');
const signupBtn = document.getElementById('signup_btn');
const modal = document.getElementById('modal-container');
const modalCloseBtn = document.getElementById('sign_up_modal_close_btn');

//====================== signup page success modal ===========
let isAnyFieldIsEmpty = false;
signupBtn.addEventListener('click', () => {
  isAnyFieldIsEmpty = [...allInputs].some((el) => !el.value);
  if (isAnyFieldIsEmpty) {
    allInputs.forEach((el) => {
      if (!el.value) {
        el.classList.add('error');
      }
    });
    return undefined;
  } else {
    modal.style.display = 'flex';
  }
});
modalCloseBtn.addEventListener('click', () => {
  allInputs.forEach((el) => {
    el.value = '';
  });
  modal.style.display = 'none';
  handleClick(1);
});
allInputs.forEach((el) => {
  el.addEventListener('keyup', () => {
    const isInError = el.classList.contains('error');
    isInError && el.classList.remove('error');
  });
});
