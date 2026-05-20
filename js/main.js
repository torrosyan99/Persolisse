let headerBurger1 = document.getElementById('header__burger-1');
let headerBurger2 = document.getElementById('header__burger-2');
let headerNavMob = document.getElementById('header__nav-mob');
let header = document.getElementById("header");

headerBurger1.addEventListener('click', function() {
  headerBurger1.style.display = 'none';
  headerBurger2.style.display = 'block';
  headerNavMob.style.display = 'grid';
  header.style.background = "#EFE5E1"
});

headerBurger2.addEventListener('click', function() {
  headerBurger1.style.display = 'block';
  headerBurger2.style.display = 'none';
  headerNavMob.style.display = 'none';
  header.style.background = "#ffffff00"
});

const blocks1 = document.getElementsByClassName('section-home2__block-row1__block');

for (let i = 0; i < blocks1.length; i++) {
  blocks1[i].addEventListener('click', function() {
    console.log('Клик по элементу:', this);
    document.getElementById("section-home2__block-row1").style.display="none";
    document.getElementById("section-home2__block-row2").style.display="flex";
    document.getElementById("section-home2__row-list2").style.display="none";
    document.getElementById("section-home2__row-list1").style.display="flex";
    // Ваш код здесь
  });
}

const blocks2 = document.getElementsByClassName('section-home2__block-row2__block');

for (let i = 0; i < blocks2.length; i++) {
  blocks2[i].addEventListener('click', function() {
    console.log('Клик по элементу:', this);
    document.getElementById("section-home2__pop-ap").style.display="flex";
    // Ваш код здесь
  });
}

const btns1 = document.getElementsByClassName('section-home2__pop-ap-btn');

for (let i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener('click', function() {
    console.log('Клик по элементу:', this);
    document.getElementById("section-home2__pop-ap").style.display="none";
    document.getElementById("section-home2__block-row3").classList.add("display-flex-pc-mob-block");
    document.getElementById("section-home2__block-row2").style.display="none";
    document.getElementById("section-home2__row-top-list1").style.display="flex";
    // Ваш код здесь
  });
}

const iconSettings = document.getElementById("section-home2__icon-settings");
const iconSettingsClose = document.getElementById("section-home2__icon-settings-close");

iconSettings.addEventListener('click', function() {
     document.getElementById("section-home2__block-left__list").style.display="block";
     iconSettings.style.display="none";
     iconSettingsClose.style.display="block";
});

iconSettingsClose.addEventListener('click', function() {
     document.getElementById("section-home2__block-left__list").style.display="none";
     iconSettings.style.display="block";
     iconSettingsClose.style.display="none";
});


const headerDropDown = document.getElementById("header__dropdown");

headerDropDown.addEventListener('click', function() {
    document.getElementById("header__dropdown__row2").classList.toggle("display-flex")
    document.getElementById("header__dropdown__row3").classList.toggle("display-flex")
    document.getElementById("header__dropdown__arrow").classList.toggle("arrow-transform1")
});

const headerDropDownMob = document.getElementById("header__dropdown-mob");

headerDropDownMob.addEventListener('click', function() {
    document.getElementById("header__dropdown__row2-mob").classList.toggle("display-flex")
    document.getElementById("header__dropdown__row3-mob").classList.toggle("display-flex")
    document.getElementById("header__dropdown__arrow-mob").classList.toggle("arrow-transform1")
});

