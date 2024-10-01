// Tracking added skills in an array
let addedSkills: string[] = [];

document.getElementById('resume-form')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workexperience') as HTMLInputElement).value;

    // Check if any skills have been added
    if (addedSkills.length === 0) {
        alert("Please add at least one skill before submitting.");
        return; // Prevent form submission if no skills are added
    }

    // Display the form values in the resume
    (document.getElementById('display-name') as HTMLElement).textContent = name;
    (document.getElementById('display-email') as HTMLElement).textContent = email;
    (document.getElementById('display-phone') as HTMLElement).textContent = phone;
    (document.getElementById('display-objective') as HTMLElement).textContent = objective;
    (document.getElementById('display-education') as HTMLElement).textContent = education;
    (document.getElementById('display-experience') as HTMLElement).textContent = workExperience;

    // Clear and append the skills to the resume section
    const displaySkills = document.getElementById('display-skills') as HTMLUListElement;
    displaySkills.innerHTML = ''; // Clear the skills list before repopulating
    addedSkills.forEach(skill => {
        const skillLi = document.createElement('li');
        skillLi.textContent = skill;
        displaySkills.appendChild(skillLi);
    });

    (document.querySelector('.resume') as HTMLElement).style.display = 'block'; // Display the resume
});

// Skill input logic
const skillInput = document.getElementById('skill-input') as HTMLInputElement;
const addSkillBtn = document.getElementById('add-skill') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

skillInput.addEventListener('input', function () {
    addSkillBtn.disabled = !skillInput.value.trim(); // Disable the add button if input is empty
});

addSkillBtn.addEventListener('click', function () {
    const skill = skillInput.value.trim();
    if (skill) {
        addedSkills.push(skill); // Add the skill to the array

        // Append the skill to the skills list in the UI
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);

        // Clear the input and disable the button
        skillInput.value = skill;
        addSkillBtn.disabled = true;
    }
});

// File input logic
const fileInput = document.getElementById('file-input') as HTMLInputElement;
const profileImage = document.getElementById('display-profile-image') as HTMLImageElement;

fileInput.addEventListener('change', function (e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            profileImage.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
});
