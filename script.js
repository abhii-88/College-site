const yearSelect = document.getElementById("year");
const semSelect = document.getElementById("sem");
const subjectsDiv = document.getElementById("subjects");

// Jab branch choose karo tab year options aayenge
document.getElementById("branch").addEventListener("change", function() {
  yearSelect.innerHTML = '<option value="">--Choose--</option>';
  semSelect.innerHTML = '<option value="">--Choose--</option>';
  subjectsDiv.innerHTML = "";

  if (this.value) {
    for (let i = 1; i <= 4; i++) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.text = i + " Year";
      yearSelect.appendChild(opt);
    }
  }
});

// Jab year choose karo tab semester dikhega
yearSelect.addEventListener("change", function() {
  semSelect.innerHTML = '<option value="">--Choose--</option>';
  subjectsDiv.innerHTML = "";

  if (this.value) {
    for (let i = 1; i <= 2; i++) {
      let opt = document.createElement("option");
      opt.value = "sem" + i;
      opt.text = "Semester " + i;
      semSelect.appendChild(opt);
    }
  }
});

// Jab semester choose karo tab subjects dikhenge
semSelect.addEventListener("change", function() {
  subjectsDiv.innerHTML = "";

  if (this.value) {
    let ul = document.createElement("ul");
    let subjects = ["Maths", "Physics", "Programming"];
    subjects.forEach(sub => {
      let li = document.createElement("li");
      li.textContent = sub;
      ul.appendChild(li);
    });
    subjectsDiv.appendChild(ul);
  }
});
