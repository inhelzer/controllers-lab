// playful tiny interactions
const btn = document.getElementById("toggleMode");
const body = document.body;

// remember mode
const saved = localStorage.getItem("mode");
if (saved === "light") body.classList.add("light");

btn?.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("mode", body.classList.contains("light") ? "light" : "dark");
});

// tiny hover sound-free "wiggle" (CSS-free)
document.querySelectorAll(".postTitle").forEach(h => {
  h.addEventListener("mouseenter", () => {
    h.style.transform = "rotate(-0.6deg)";
    h.style.transition = "transform 120ms ease";
  });
  h.addEventListener("mouseleave", () => {
    h.style.transform = "rotate(0deg)";
  });
});
