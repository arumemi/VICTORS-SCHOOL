
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

const themeBtn = document.querySelector('.theme__btn');
const themeStorageKey = 'themePreference';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const applyTheme = (theme) => {
   document.body.classList.toggle('dark', theme === 'dark');
   themeBtn.innerHTML = theme === 'dark'
      ? `<i class="uil uil-sun"></i> `
      : `<i class="uil uil-moon"></i> `;
};

const getInitialTheme = () => {
   const savedTheme = localStorage.getItem(themeStorageKey);
   if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
   }
   return prefersDark.matches ? 'dark' : 'light';
};

applyTheme(getInitialTheme());

themeBtn.addEventListener('click', () => {
   const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
   const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
   applyTheme(nextTheme);
   localStorage.setItem(themeStorageKey, nextTheme);
});

if (prefersDark.addEventListener) {
   prefersDark.addEventListener('change', (event) => {
      const savedTheme = localStorage.getItem(themeStorageKey);
      if (!savedTheme) {
         applyTheme(event.matches ? 'dark' : 'light');
      }
   });
}
