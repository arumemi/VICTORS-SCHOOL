
const navMenu = document.querySelector('.nav__menu');
const navMenuOpen = document.querySelector('.nav__menu-open');
const navMenuClose = document.querySelector('.nav__menu-close');

const TABLET_BREAKPOINT = 1024;

const showMenu = () => {
   navMenu.style.display = 'flex';
   navMenuOpen.style.display = 'none';
   navMenuClose.style.display = 'inline-block';
};

const hideMenu = () => {
   navMenu.style.display = 'none';
   navMenuOpen.style.display = 'inline-block';
   navMenuClose.style.display = 'none';
};

const syncMenuToViewport = () => {
   if (window.innerWidth > TABLET_BREAKPOINT) {
      navMenu.style.display = 'flex';
      navMenuOpen.style.display = 'none';
      navMenuClose.style.display = 'none';
      return;
   }

   navMenu.style.display = 'none';
   navMenuOpen.style.display = 'inline-flex';
   navMenuClose.style.display = 'none';
};

navMenuOpen.addEventListener('click', showMenu);
navMenuClose.addEventListener('click', hideMenu);

document.querySelectorAll('.nav__menu a').forEach((link) => {
   link.addEventListener('click', () => {
      if (window.innerWidth <= TABLET_BREAKPOINT) {
         hideMenu();
      }
   });
});

window.addEventListener('resize', syncMenuToViewport);
syncMenuToViewport();

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

const destinationWhatsappBase = 'https://wa.me/2348052999040';

document.querySelectorAll('.destination__card-btn').forEach((button) => {
   const card = button.closest('.destination__card');
   if (!card) {
      return;
   }

   const destinationName = card.querySelector('.destination__card-header h3')?.textContent.trim();
   const locationName = card.querySelector('.destination__card-location span')?.textContent.trim();

   let destinationLabel = destinationName || locationName || 'this destination';

   if (destinationName && locationName && destinationName.toLowerCase() !== locationName.toLowerCase()) {
      destinationLabel = `${destinationName} (${locationName})`;
   }

   const whatsappMessage = `Hi, I'm interested in studying abroad in ${destinationLabel}. Please share more information.`;
   button.href = `${destinationWhatsappBase}?text=${encodeURIComponent(whatsappMessage)}`;
   button.setAttribute('aria-label', `Learn more about ${destinationLabel} on WhatsApp`);
});
