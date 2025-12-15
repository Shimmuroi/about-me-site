/* themeBtn */
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("themeBtn");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "Light Mode";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("themeBtn", isDark ? "dark" : "light");
});

/* editJobBtn */
const editBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("job");

editBtn.addEventListener("click", () => {
    const newTitle = prompt("Enter your new job title:", jobTitle.textContent);
    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
});

/*  toggleSkillBtn */
const toggleBtn = document.getElementById("toggleSkillBtn");
const skillList = document.querySelector(".skills dl");

toggleBtn.addEventListener("click", () => {
    const isHidden = skillList.style.display === "none";

    if (isHidden) {
        skillList.style.display = "block";
        toggleBtn.textContent = "Hide Skills";
    } else {
        skillList.style.display = "none";
        toggleBtn.textContent = "Show Skills";
    }
});

/*  msgBox char counter */
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");
const maxChars = msgBox.getAttribute("maxlength");

counter.textContent = maxChars;

msgBox.addEventListener("input", () => {
    const remaining = maxChars - msgBox.value.length;
    counter.textContent = remaining;
});

/* form validation */
function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();
    const msgBox = document.getElementById("msgBox").value.trim();

    if (name === "" || email === "" || msgBox === "") {
        alert("Please fill out all fields.");
        return false;
    }

    return true;
}

/* footer current date */
const today = new Date();
const localeDate = today.toLocaleDateString(); 
document.getElementById("dateDisplay").textContent = localeDate;

/* Profile image says hello kapag hovered*/
const profileImg = document.getElementById("profile_img");
const imgLabel = document.getElementById("imgLabel");

function enlargeImage() {
    profileImg.style.transform = "scale(1.2)";
    imgLabel.style.display = "block";
}

function resetImage() {
    profileImg.style.transform = "scale(1)";
    imgLabel.style.display = "none";
}

profileImg.addEventListener("mouseover", enlargeImage);
profileImg.addEventListener("mouseout", resetImage);

/* greetings */
function showGreeting() {
    const greetingElement = document.getElementById("greeting");
    const now = new Date();
    const hour = now.getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingElement.textContent = greeting;
}

window.onload = showGreeting;
