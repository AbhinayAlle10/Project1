const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    msg.textContent = "Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = `Thanks, ${name}! I'll contact you soon.`;
  msg.style.color = "green";
  form.reset();
});
