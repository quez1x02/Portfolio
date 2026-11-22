const header = document.querySelector("header"),
  bar = document.querySelector(".progress"),
  menu = document.querySelector(".menu"),
  nav = document.querySelector("#nav");
addEventListener("scroll", () => {
  header.classList.toggle("scrolled", scrollY > 20);
  bar.style.width = `${(scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100}%`;
});
menu.onclick = () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
};
nav.querySelectorAll("a").forEach(
  (a) =>
    (a.onclick = () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }),
);
document.querySelectorAll('a[href="#top"]').forEach(
  (a) =>
    (a.onclick = (e) => {
      e.preventDefault();
      scrollTo({ top: 0, behavior: "smooth" });
    }),
);
function time() {
  document.querySelector("#clock").textContent = new Intl.DateTimeFormat(
    "en-CA",
    {
      timeZone: "America/Toronto",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    },
  ).format(new Date());
}
time();
setInterval(time, 30000);
const projects = {
  barbershop: {
    name: "Oak & Steel Barbershop",
    url: "https://quez1x02.github.io/Oak-Steel-Barbershop/",
    dir: "Premium local service brand",
    overview:
      "A dark, material-led barbershop experience that gives booking, services and people equal care.",
    features: [
      "Four-step appointment booking flow",
      "Responsive service and barber sections",
      "Gallery, testimonials and Toronto location",
    ],
    tech: "HTML · CSS · JavaScript",
  },
  cafe: {
    name: "Morrow & Finch Café",
    url: "https://quez1x02.github.io/Morrow-Finch-Caf-/",
    dir: "Warm editorial café experience",
    overview:
      "A light, editorial café site designed around food, menu discovery and a relaxed reservation experience.",
    features: [
      "Interactive menu categories",
      "Reservation form with validation",
      "Responsive editorial gallery",
    ],
    tech: "HTML · CSS · JavaScript",
  },
  construction: {
    name: "Northline Construction",
    url: "https://quez1x02.github.io/Northline-Construction/",
    dir: "Architectural construction website",
    overview:
      "A grid-led construction site built to make complex work feel clear, capable and well-documented.",
    features: [
      "Interactive project case studies",
      "Quote request form",
      "Structured services and process experience",
    ],
    tech: "HTML · CSS · JavaScript",
  },
  estate: {
    name: "Avenue & Co. Real Estate",
    url: "https://quez1x02.github.io/Avenue-Co.-Real-Estate/",
    dir: "Contemporary property brand",
    overview:
      "A calm, lifestyle-led brokerage experience with property discovery as its core interaction.",
    features: [
      "Buy/rent property search",
      "Listing filters and responsive cards",
      "Consultation contact flow",
    ],
    tech: "HTML · CSS · JavaScript",
  },
};
const dialog = document.querySelector("#projectDialog"),
  content = document.querySelector("#dialogContent");
document.querySelectorAll("[data-project]").forEach(
  (project) =>
    (project.onclick = () => {
      const p = projects[project.dataset.project];
      content.innerHTML = `<div class="case"><div class="browser"><div class="browser-bar"><i></i><i></i><i></i><span>Project preview</span></div><iframe src="${p.url}" title="${p.name} live preview"></iframe></div><div><p class="eyebrow">Concept project</p><h2>${p.name}</h2><strong>${p.dir}</strong><p>${p.overview}</p><ul>${p.features.map((f) => `<li>— ${f}</li>`).join("")}</ul><p>${p.tech}</p><a class="button" href="${p.url}" target="_blank" rel="noopener">Open live project <span>↗</span></a></div></div>`;
      dialog.showModal();
    }),
);
document.querySelector(".close").onclick = () => dialog.close();
dialog.onclick = (e) => {
  if (e.target === dialog) dialog.close();
};
document.querySelector("#contactForm").onsubmit = (e) => {
  e.preventDefault();
  if (!e.currentTarget.checkValidity()) {
    e.currentTarget.reportValidity();
    return;
  }
  const d = new FormData(e.currentTarget);
  e.currentTarget.querySelector(".form-message").textContent =
    `Thanks, ${d.get("name")}. Your message is ready to send—I'll reply at ${d.get("email")} soon.`;
  e.currentTarget.reset();
};
