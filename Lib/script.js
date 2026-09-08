
const nav = document.querySelector('.navbar');

function navLinks() {
  const links = nav.querySelectorAll('a');
  const titlePage = document.querySelector('.title-page');
  const title = document.querySelector('.title');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      titlePage.innerHTML = link.textContent;
      title.innerHTML = link.textContent;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

navLinks();

const projectList = document.querySelector(".project-list");
const projects = [
  { title: "Project 1", description: "Description of project 1" },
  { title: "Project 2", description: "Description of project 2" },
  { title: "Project 3", description: "Description of project 3" },
];

projects.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");
  projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          `;
  projectList.appendChild(projectItem);
});

const skillsList = document.querySelector(".skills-list");
const skills = [
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },

];

skills.forEach((skill) => {
  const skillItem = document.createElement("div");
  skillItem.classList.add("skill-item");
  skillItem.innerHTML = `
                <img src="${skill.logo}" alt="${skill.name} logo" />
                <p>${skill.name}</p>
            `;
  skillsList.appendChild(skillItem);
});

const recommendationForm = document.querySelector(".recommendation-form");
recommendationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const recommendation = document.getElementById("recommendation").value;


  const recommendationList = document.querySelector(".recommendation-list");
  const recommendationItem = document.createElement("div");
  recommendationItem.classList.add("recommendation-item");
  recommendationItem.innerHTML = `
            <p>"${recommendation}"</p>
            <p>- ${name}</p>
          `;
  recommendationList.appendChild(recommendationItem);

  alert("Thank you for your recommendation!");

  recommendationForm.reset();
});