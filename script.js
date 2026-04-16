// script.js

const data = {
  socials: [
    { name: "VK Группа", link: "https://vk.com/borntopraay" },
    { name: "VK Артист", link: "https://vk.com/artist/borntopraay" },
    { name: "VK Личка", link: "https://vk.com/brntpry" },
    { name: "Instagram", link: "https://instagram.com/borntopraay" },
    { name: "Telegram", link: "https://t.me/brntpry" },
    { name: "TikTok", link: "https://tiktok.com/@borntopraay" },
    { name: "YouTube", link: "https://www.youtube.com/@borntopraay" }
  ],

  music: [
    { name: "BandLink", link: "https://band.link/scanner?search=borntopraay" },
    { name: "VK Music", link: "https://vk.com/artist/borntopraay" },
    { name: "Shazam", link: "https://www.shazam.com" },
    { name: "Audiomack", link: "https://audiomack.com/borntopraay" }
  ],

  releases: [
    "Трек 1 (пример)",
    "Трек 2 (пример)",
    "Трек 3 (пример)"
  ],

  smartLinks: [
    "BandLink Smart Link #1",
    "BandLink Smart Link #2"
  ]
};

// render socials
const socialGrid = document.getElementById("socialGrid");
data.socials.forEach(s => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<a href="${s.link}" target="_blank">${s.name}</a>`;
  socialGrid.appendChild(div);
});

// render music
const musicGrid = document.getElementById("musicGrid");
data.music.forEach(m => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<a href="${m.link}" target="_blank">${m.name}</a>`;
  musicGrid.appendChild(div);
});

// releases
const releaseList = document.getElementById("releaseList");
data.releases.forEach(r => {
  const li = document.createElement("li");
  li.textContent = r;
  releaseList.appendChild(li);
});

// smart links
const smartList = document.getElementById("smartLinksList");
data.smartLinks.forEach(l => {
  const li = document.createElement("li");
  li.textContent = l;
  smartList.appendChild(li);
});

// counters (demo values пока без API)
document.getElementById("socialCount").textContent = data.socials.length;
document.getElementById("musicCount").textContent = data.music.length;
document.getElementById("releaseCount").textContent = data.releases.length;
document.getElementById("powerScore").textContent =
  data.socials.length * 10 + data.music.length * 15;

function toggleBlock(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}
