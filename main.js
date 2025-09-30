
const navMenu = document.querySelector('.nav__menu');
const navMenuOpen = document.querySelector('.nav__menu-open');
const navMenuClose = document.querySelector('.nav__menu-close');

   navMenuOpen.addEventListener('click', () =>{
      navMenu.style.display = 'flex';
      navMenuOpen.style.display ='none';
      navMenuClose.style.display ='inline-block';
});

   navMenuClose.addEventListener('click', () =>{
      navMenu.style.display = 'none';
      navMenuOpen.style.display ='inline-block';
      navMenuClose.style.display ='none';
});

const themeBtn = document.querySelector('.theme__btn')
themeBtn.addEventListener('click', () =>{
   if(document.body.className == 'dark'){
      document.body.className = ''
      themeBtn.innerHTML = `<i class="uil uil-moon"></i> `
      localStorage.setItem('mood', 'dark')
   }
   else{
      document.body.className = 'dark'
       localStorage.setItem('mood', '')
       themeBtn.innerHTML = `<i class="uil uil-sun"></i> `
       
   }
});
   window.addEventListener('load', () =>{
      document.body.className = localStorage.getItem('mood')
      if(localStorage.getItem('mood') ==""){
         themeBtn.innerHTML = `<i class="uil uil-moon"></i> `
      }
      else{
          themeBtn.innerHTML = `<i class="uil uil-sun"></i> `
      }
   });
