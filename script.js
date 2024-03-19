function handleSubmit() {
  const fullname = document.getElementById("fullnme").value;
  const email = document.getElementById("email").value;
  const phonenumber = document.getElementById("phonenumber").value;
  const subject = document.getElementById("subject").value;
  if (fullname && email && phonenumber && subject) {
    alert("Successfully submited....! ");
  } else {
    alert("Enter required fields...!");
  }
}

function navigation() {
  const links = document.querySelectorAll(".header a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

navigation();

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
  scrollToTopBtn.style.opacity = window.scrollY > 20 ? "1" : "0";
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function showContent(tabName) {
  // Hide all content sections
  document.getElementById("skills-content").classList.add("hidden");
  document.getElementById("education-content").classList.add("hidden");

  // Deactivate all tabs
  document.getElementById("skills-tab").classList.remove("active");
  document.getElementById("education-tab").classList.remove("active");

  // Show the selected content section
  document.getElementById(tabName + "-content").classList.remove("hidden");

  // Activate the selected tab
  document.getElementById(tabName + "-tab").classList.add("active");
}

// Show skills content by default
showContent("skills");
