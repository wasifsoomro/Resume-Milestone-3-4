var _a;
// Tracking added skills in an array
var addedSkills = [];
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workexperience').value;
    // Check if any skills have been added
    if (addedSkills.length === 0) {
        alert("Please add at least one skill before submitting.");
        return; // Prevent form submission if no skills are added
    }
    // Display the form values in the resume
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;
    document.getElementById('display-objective').textContent = objective;
    document.getElementById('display-education').textContent = education;
    document.getElementById('display-experience').textContent = workExperience;
    // Clear and append the skills to the resume section
    var displaySkills = document.getElementById('display-skills');
    displaySkills.innerHTML = ''; // Clear the skills list before repopulating
    addedSkills.forEach(function (skill) {
        var skillLi = document.createElement('li');
        skillLi.textContent = skill;
        displaySkills.appendChild(skillLi);
    });
    document.querySelector('.resume').style.display = 'block'; // Display the resume
});
// Skill input logic
var skillInput = document.getElementById('skill-input');
var addSkillBtn = document.getElementById('add-skill');
var skillsList = document.getElementById('skills-list');
skillInput.addEventListener('input', function () {
    addSkillBtn.disabled = !skillInput.value.trim(); // Disable the add button if input is empty
});
addSkillBtn.addEventListener('click', function () {
    var skill = skillInput.value.trim();
    if (skill) {
        addedSkills.push(skill); // Add the skill to the array
        // Append the skill to the skills list in the UI
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
        // Clear the input and disable the button
        skillInput.value = skill;
        addSkillBtn.disabled = true;
    }
});
// File input logic
var fileInput = document.getElementById('file-input');
var profileImage = document.getElementById('display-profile-image');
fileInput.addEventListener('change', function (e) {
    var _a;
    var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            profileImage.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
