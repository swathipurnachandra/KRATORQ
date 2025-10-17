const events = [
  {
    title: "Paper Presentation",
    tagline: "Present. Persuade. Inspire.",
    description:
      "Showcase your innovative engineering ideas, research, and problem-solving skills to a panel of experts. Whether it’s a novel design, breakthrough experiment, or futuristic concept — this is your platform to share, learn, and shine among the brightest minds.",
    image: "Images/4.jpg",
    formLink: "https://forms.gle/c3hbLbrcjXT13TYq6", // 🔗 add Google Form link
  },
  {
    title: "Auto Quiz",
    tagline: "Rev your brains, not your engines.",
    description:
      "Challenge your knowledge of automobiles, engines, and modern mobility. From mechanical fundamentals to the latest automotive innovations, this quiz will test how fast your mind can shift gears.",
    image: "images/10.jpg",
    formLink: "https://forms.gle/74zHrYH3jNyVgNcu8",
  },
  {
    title: "Tech MUN (Model United Nations)",
    tagline: "Where policy meets innovation.",
    description:
      "Step into the shoes of world engineers, leaders, and technocrats. Debate and design solutions for global engineering challenges through diplomacy, logic, and creative thinking.",
    image: "images/3.jpg",
    formLink: "https://forms.gle/DXBEwDs91dHJBrAD8 ",
  },
  {
    title: "Pit Stop Challenge – F1 Ideathon",
    tagline: "Think like an engineer, act like a racer.",
    description:
      "Ideate and design F1-inspired concepts — from pit stop efficiency to performance engineering. Collaborate, strategize, and race your way to victory in this high-octane ideathon.",
    image: "images/1.jpg",
    formLink: "https://forms.gle/eCn8NrjFgqjExXpSA",
  },
  {
    title: "Treasure Hunt",
    tagline: "Decode. Discover. Dominate.",
    description:
      "Follow the clues, crack the codes, and race across campus in this thrilling adventure. Teamwork, intuition, and speed will be your keys to the treasure.",
    image: "images/8.jpg",
    formLink: "https://forms.gle/uAywoEBSUDKLL5kU9",
  },
  {
    title: "F1 Logo Design",
    tagline: "Design the symbol of speed.",
    description:
      "Showcase your creativity by crafting a dynamic Formula 1–inspired logo that captures the essence of power, motion, and precision.",
    image: "images/2.jpg",
    formLink: "https://forms.gle/yayPpaXHeXvjQPJr8",
  },
  {
    title: "IPL Auction",
    tagline: "Bid. Build. Win.",
    description:
      "Step into the role of an IPL franchise owner. Analyze players, manage your budget, and strategize your bids to form the ultimate dream team.",
    image: "images/9.jpg",
    formLink: "https://forms.gle/UBLiVgGa4QiZAFaF6",
  },
  {
    title: "BGMI Tournament",
    tagline: "Aim. Fire. Survive.",
    description:
      "Compete in high-stakes BGMI matches where strategy, reflex, and teamwork decide the champion. Only the last squad standing claims the crown.",
    image: "images/7.jpg",
    formLink: "https://forms.gle/9VQHLDqTCv1xv8iD7",
  },
  {
    title: "Free Fire Tournament",
    tagline: "One shot to glory.",
    description:
      "Jump into an intense Free Fire battle where every second counts. Outsmart and outplay your opponents to prove your dominance.",
    image: "images/6.jpg",
    formLink: "https://forms.gle/L1ognat6gAnZhReL8",
  },
  {
    title: "Box Football (Individual Event)",
    tagline: "Small space, big skills.",
    description:
      "A thrilling one-on-one football showdown where agility, speed, and control decide the winner. Every goal brings you closer to victory.",
    image: "images/5.jpg",
    formLink: "https://forms.gle/uKgP7KDQoUGK86nR7",
  },
];

const eventContainer = document.getElementById("eventContainer");

events.forEach((event) => {
  const card = document.createElement("div");
  card.classList.add("event-card");

  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}" class="event-img" />
    <div class="event-content">
      <h2>${event.title}</h2>
      <h3>${event.tagline}</h3>

      <button class="dropdown-btn">View Details ⮟</button>

      <div class="event-description">
        <p>${event.description}</p>

        <!-- Register Button -->
        <a href="${event.formLink}" 
           class="register-btn" 
           target="_blank">
           Register Now
        </a>
      </div>
    </div>
  `;

  eventContainer.appendChild(card);
});

// Toggle dropdowns
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-btn")) {
    const desc = e.target.nextElementSibling;
    desc.classList.toggle("show");
    e.target.textContent = desc.classList.contains("show")
      ? "Hide Details ⮝"
      : "View Details ⮟";
  }
});
