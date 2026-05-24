// Header menu

const menuButton = document.querySelector('.header__menu-button');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');

menuButton.addEventListener('click', () => {
  document.body.classList.toggle('body-menu-overflow');
  menuButton.classList.toggle('header__menu-button--active');
  header.classList.toggle('header--menu-opened');
})

headerOverlay.addEventListener('click', () => {
  document.body.classList.remove('body-menu-overflow');
  menuButton.classList.remove('header__menu-button--active');
  header.classList.remove('header--menu-opened');
})


// Modal

const MODAL_ANIMATION_DELAY = 200;
const modals = {};
const overlay = document.querySelector('.overlay');

document.querySelectorAll('.modal').forEach((modal) => {
  modals[modal.dataset.modalType] = modal;

  modal.addEventListener('click', (e) => {
    e.stopPropagation();
    const modalClose = e.target.closest('.modal__close');
    if (modalClose) closeModal();
  });
});

function openModal(type) {
  const modal = modals[type];

  if (!modal) return;

  overlay.classList.add('overlay--active');
  document.body.classList.add('body-overflow');
  modal.classList.add('modal--active');

  setTimeout(() => {
    modal.classList.add('modal--showed');
  }, 10);
}

function closeModal() {
  const activeModal = document.querySelector('.modal--active');

  if (!activeModal) return;

  activeModal.classList.remove('modal--showed');

  setTimeout(() => {
    overlay.classList.remove('overlay--active');
    document.body.classList.remove('body-overflow');
    activeModal.classList.remove('modal--active');
  }, MODAL_ANIMATION_DELAY);
}

function changeModalType(activeType, type) {
  modals[activeType].classList.remove('modal--active');
  modals[activeType].classList.remove('modal--showed');
  modals[type].classList.add('modal--active');
  modals[type].classList.add('modal--showed');
}

document.body.addEventListener('click', ({target}) => {
  const modalButton = target.closest('.modal-button');
  if (modalButton) openModal(modalButton.dataset.type);
});

overlay.addEventListener('click', closeModal);


// Login/Register

// function isValidEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }
//
// function showError(form, message) {
//   const errorEl = form.querySelector('.modal-form__error');
//
//   errorEl.textContent = message;
//   errorEl.classList.add('modal-form__error--active');
// }
//
// function hideError(form) {
//   const errorEl = form.querySelector('.modal-form__error');
//
//   errorEl.textContent = '';
//   errorEl.classList.remove('modal-form__error--active');
// }

const registerLoginButton = document.querySelector('.register__login');


if (registerLoginButton) {
  registerLoginButton.addEventListener('click', () => {
    changeModalType('register', 'login');
  })
}

// Lang

const lang = document.querySelector('.header__lang');
const langButton = document.querySelector('.header__lang-button');

lang.addEventListener('click', (e) => {
  e.stopPropagation();
})

langButton.addEventListener('click', (e) => {
  langButton.classList.toggle('header__lang-button--active');
})

document.body.addEventListener('click', () => {
  if (langButton.classList.contains('header__lang-button--active')) langButton.classList.remove(
    'header__lang-button--active');
})

// Quiz class

class Quiz {
  constructor(container, questions, result) {
    const quiz = document.querySelector(container);

    this.title = quiz.querySelector('.quiz__title');
    this.answers = quiz.querySelector('.quiz__answers');
    this.back = quiz.querySelector('.quiz__back');
    if (!this.title || !this.answers || !this.back) return;

    const steps = quiz.querySelector('.quiz__steps');
    const passedText = quiz.querySelector('.quiz__passed-text');
    const line = quiz.querySelector('.quiz__steps-line');
    const lineActive = line.querySelector('.quiz__steps-line-active');
    this.activeStep = 0;

    this.questions = questions;

    if (steps) {
      this.steps = steps;
      this.setStep()
    }

    if (passedText) {
      this.passedText = passedText;
      this.setPassedText()
    }

    if (line && lineActive) {
      this.line = lineActive;
      this.setLine()
    }

    this.setAnswers()

    this.result = {};
    this.answers.addEventListener('submit', (e) => {
      e.preventDefault();
      this.result[this.questions[this.activeStep].question] = e.submitter.value;
      this.activeStep++;
      if (this.activeStep === this.questions.length) {
        this.setOk();
        this.render()
        result(this.result)
        return
      }
      this.setAnswers();
      this.render()


    })
    this.back.addEventListener('click', (e) => {
      delete this.result[this.questions[this.activeStep].question];
      this.activeStep--;
      this.setAnswers();
      this.render()

    })
  }


  setPassedText() {
    this.passedText.innerText =
      `The test was passed by ${Math.trunc(((this.activeStep) / this.questions.length) * 100)}%`;
  }

  setStep() {
    const activeStep =
      this.questions.length >= 10
        ? String(this.activeStep + 1).padStart(2, '0')
        : this.activeStep + 1;
    this.steps.innerHTML =
      `<span class="quiz__steps-current">${activeStep}</span>
      /
      <span class="quiz__steps-length">${this.questions.length}</span>`;
  }

  setLine() {
    this.line.style.width = `${((this.activeStep) / this.questions.length) * 100}%`
  }

  setAnswers() {
    this.title.innerText = this.questions[this.activeStep].question;

    this.answers.innerText = '';
    this.questions[this.activeStep].answers.forEach((answer) => {
      this.answers.innerHTML += `<button class="quiz__answer" value="${answer}">
<span class="quiz__check">
<svg width="12" height="8">
<use xlink:href="assets/images/icons.svg#check"></use>
</svg>
</span>
<span>${answer}</span>
</button>`;
    })
  }

  render() {
    if (this.steps) this.setStep()
    if (this.passedText) this.setPassedText()
    if (this.line) this.setLine()
  }

  setOk() {
    this.title.innerText = 'Congratulations! You have successfully completed the test.';
    this.answers.remove();
    this.back.remove();
    if(this.steps) this.steps.remove()


  }
}