const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  document.querySelector('.main').classList.add('blur');
  document.querySelector('.logo').classList.add('blur');
  openMenu.classList.add('blur');
});

closeMenu.addEventListener('click', () => {
  mainMenu.style.top = '-100%';
  document.querySelector('.main').classList.remove('blur');
  document.querySelector('.logo').classList.remove('blur');
  openMenu.classList.remove('blur');
});

document.querySelectorAll('.links').forEach((link) => {
  link.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    document.querySelector('.main').classList.remove('blur');
    document.querySelector('.logo').classList.remove('blur');
    openMenu.classList.remove('blur');
  });
});

// Popup windows for Projects viewing
const modelContainer = document.querySelector('.modelContainer');
const project = document.querySelector('.name');
const company = document.querySelector('.company');
const role = document.querySelector('.role');
const year = document.querySelector('.year');
const imageLink = document.querySelector('.image');
const modalContainer = document.querySelector('.modelContainer');
const workSections = document.querySelector('.work__sections');

const projectsList = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imageLink: 'img/Snapshoot-Portfolio1.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Backend',
    company: 'canopi',
    year: '2015',
    sourceLink: 'https://github.com/joseph07-drack/Portofolio/',
    demoLink: 'https://joseph07-drack.github.io/Portofolio/',
  },
  {
    name: 'Multi-post stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
    imageLink: 'img/Snapshoot-Portfolio2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/joseph07-drack/Portofolio/',
    demoLink: 'https://joseph07-drack.github.io/Portofolio/',
  },
  {
    name: 'Facebook 360',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley',
    imageLink: 'img/Snapshoot-Portfolio3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Backend',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/joseph07-drack/Portofolio/',
    demoLink: 'https://joseph07-drack.github.io/Portofolio/',
  },
  {
    name: 'Facebook 360',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imageLink: 'img/Snapshoot-Portfolio4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2015',
    sourceLink: 'https://github.com/joseph07-drack/Portofolio/',
    demoLink: 'https://joseph07-drack.github.io/Portofolio/',
  },
];

// generating content dynamically from the object
workSections.innerHTML = '';
for (let i = 0; i < projectsList.length; i += 1) {
  let languages = '';
  projectsList[i].technologies.forEach((language) => {
    languages += `
      <li><a href='' class='lang1' title='${language}' class='lang-2'>${language}</a></li>
    `;
  });
  workSections.innerHTML += `
      <div class='works'>
          <div class='works__image'>
            <img src='${projectsList[i].imageLink}' alt='work 1' class='img1' />
          </div>
          <div class='work__description'>
            <h2>${projectsList[i].name}</h2>
            <div class='short_desc'>
              <h4>${projectsList[i].company}</h4>
              <span></span>
              <h4>${projectsList[i].role}</h4>
              <span></span>
              <p>${projectsList[i].year}</p>
            </div>
            <div class='long_desc'>
              <p>
                ${projectsList[i].description}
              </p>

              <ul class='work__lang'>
                ${languages}
              </ul>
            </div>
            <button type='button' class='btn btn-enabled project-modal-${i}'>See project</button>
          </div>
    </div>
  `;
}

// showing the popup window once a button get clicked

for (let i = 0; i < projectsList.length; i += 1) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    project.innerHTML = projectsList[i].name;
    imageLink.src = projectsList[i].imageLink;
    role.innerHTML = projectsList[i].role;
    company.innerHTML = projectsList[i].company;
    year.innerHTML = projectsList[i].year;

    document.querySelector('.work__sections').classList.add('blur');
    document.querySelector('.header').classList.add('blur');
    document.querySelector('.showcase').classList.add('blur');
    document.querySelector('.contact-form').classList.add('blur');
    document.querySelector('.about-me').classList.add('blur');
    modalContainer.classList.add('show');
  });
}
document.querySelector('.closeModal').addEventListener('click', () => {
  modelContainer.style.display = 'none';
  window.location.reload();
  document.querySelector('.header').classList.remove('blur');
  document.querySelector('.showcase').classList.remove('blur');
});

// Form validation
const email = document.querySelector('#email');
const validationAlert = document.querySelector('.alert');
const contactForm = document.querySelector('.form-group');

contactForm.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    validationAlert.innerHTML = 'Your email address should not contain uppercase letters';
    event.preventDefault();
  }
});

const nameField = document.querySelector('#name');
const emailAddressField = document.querySelector('#email');
const messageField = document.querySelector('#message');

contactForm.addEventListener('input', () => {
  // add information in the local storage
  const userData = {
    name: nameField.value,
    emailAddress: emailAddressField.value,
    message: messageField.value,
  };

  // store information in the local storage
  localStorage.setItem('userData', JSON.stringify(userData));
});