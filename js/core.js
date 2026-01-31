const hashes = {
  1: "dhavj{3f9a2b1c8e7d}",
  2: "dhavj{9c1e7b2a4f8d}",
  3: "dhavj{e7f4c8a2b1d9}"
};

function submitFlag(level) {
  const input = document.getElementById("flag").value.trim();
  const msg = document.getElementById("msg");

  if (input === hashes[level]) {
    localStorage.setItem("dhavj_level_" + level, "true");
    msg.textContent = "Accepted.";
    setTimeout(() => window.location.href = "index.html", 800);
  } else {
    msg.textContent = "Incorrect.";
  }
}

// unlock levels on index
if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
  for (let i = 1; i <= 3; i++) {
    if (localStorage.getItem("dhavj_level_" + i)) {
      const link = document.querySelectorAll(".levels a")[i];
      if (link) link.classList.remove("locked");
    }
  }
}
