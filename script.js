const toast = document.getElementById("toast");
const searchInput = document.getElementById("searchInput");
const cards = [...document.querySelectorAll(".searchable-card")];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// Sidebar navigation
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
    showToast(`${item.querySelector("span:nth-child(2)")?.textContent || "Section"} selected`);
  });
});

// Filter buttons
document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    if (filter.classList.contains("filter-more")) {
      showToast("More recycling filters coming soon");
      return;
    }

    document.querySelectorAll(".filter").forEach((f) => f.classList.remove("active"));
    filter.classList.add("active");

    const name = filter.textContent.trim();

    if (name === "Overview") {
      cards.forEach((card) => card.classList.remove("hidden-card"));
      return;
    }

    cards.forEach((card) => {
      const text = card.dataset.search || "";
      card.classList.toggle("hidden-card", !text.includes(name.toLowerCase()));
    });
  });
});

// Search
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const text = `${card.dataset.search} ${card.textContent}`.toLowerCase();
    card.classList.toggle("hidden-card", query.length > 0 && !text.includes(query));
  });
});

// Buttons
document.getElementById("recycleBtn").addEventListener("click", () => {
  showToast("Recycling machine connection will be added next");
});

document.getElementById("guideBtn").addEventListener("click", () => {
  showToast("Recycling Guide will open here");
});

document.getElementById("signupButton").addEventListener("click", () => {
  showToast("Sign Up page coming next");
});

document.getElementById("loginButton").addEventListener("click", () => {
  showToast("Login page coming next");
});

document.querySelectorAll(".card-action").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Choose a smart recycling machine to continue");
  });
});

document.querySelectorAll(".see-all").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Full recycling activity will be available here");
  });
});

// Theme button
document.getElementById("themeButton").addEventListener("click", () => {
  document.body.classList.toggle("light");
  showToast(document.body.classList.contains("light") ? "Light mode enabled" : "Dark mode enabled");
});
