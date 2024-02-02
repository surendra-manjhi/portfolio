// STACKS

const techIconsContainer = document.querySelector("#tech-icons-container");

const techIcons = [
	"html",
	"css",
	"javascript",
	"bootstrap",
	"tailwind",
	"react",
	"mongodb",
	"node",
	"express",
	"git",
	"cpp",
	"figma",
];

techIcons.forEach((icon) => {
	let imgCtn = document.createElement("div");
	imgCtn.className = "w-12 sm:w-14";

	let img = document.createElement("img");
	img.src = `./assets/tech-icons/${icon}.png`;
	img.alt = `${icon}`;
	img.className = "rounded";

	imgCtn.append(img);
	techIconsContainer.append(imgCtn);
});

// PROJECTS

const projectCardContainer = document.querySelector("#project-card-container");

const projectData = [
	{
		img: "javascript",
		name: "Sticky Notes",
		code: "https://github.com/surendra-manjhi/StickyNotes",
		live: "https://surendra-manjhi.github.io/StickyNotes/",
		desc: `
				With Sticky Notes, you can perform CRUD operations like Create, Read, Update, Delete Notes, Search Notes and Save Notes Data in browser's local storage.
			`,
		tags: ["html", "css", "javascript", "local-storage"],
	},
	{
		img: "mongodb",
		name: "Countdown Timer",
		code: "https://github.com/surendra-manjhi/CountDown-Timer",
		live: "https://surendra-manjhi.github.io/CountDown-Timer/",
		desc: `
				CountDown Timer counts down from a certain number (minutes or seconds) to indicate the beginning or end of an event or offer.
			`,
		tags: ["html", "css", "javascript"],
	},
	{
		img: "react",
		name: "Dogpedia",
		code: "https://github.com/surendra-manjhi/Dogpedia",
		live: "https://dogpedia-bay.vercel.app/",
		desc: `
				Dogpedia is a platform where numerous varieties of dog's infomation are displayed and also can be filtered.
			`,
		tags: ["react", "APIs"],
	},
];

projectData.forEach((project, index) => {
	projectCardContainer.innerHTML += `
		<div id="p-${index}" class="border-2 border-white bg-slate-800 rounded overflow-hidden">
			<div
				class="p-img-wrapper aspect-4/3 overflow-hidden"
			>
				<img
					src="./assets/tech-icons/${project.img}.png"
					alt="${project.name}"
					class="w-full"
				/>
			</div>

			<div class="p-content p-2">
				<div class="flex justify-between">
					<div class="p-name flex flex-wrap items-end text-xl sm:text-2xl font-medium">
						${project.name}
						<span class="expand cursor-pointer material-symbols-outlined">
							expand_more
						</span>
					</div>

					<div class="p-redirects flex items-end">
						<a href="${project.code}" target="_blank" class="w-[24px] h-[24px]">
							<span class="material-symbols-outlined">
								deployed_code
							</span>
						</a>
						<a href="${project.live}" target="_blank" class="w-[24px] h-[24px]">
							<span class="material-symbols-outlined">
								open_in_new
							</span>
						</a>
					</div>
				</div>

				<p class="p-desc sm:text-lg hidden text-slate-400 font-thin">
					${project.desc}
				</p>

				<ul class="p-tags mt-1 sm:text-lg flex flex-wrap gap-2"></ul>
			</div>
		</div>
	`;

	let tagCtn = document.querySelector(
		`#project-card-container #p-${index} .p-tags`
	);

	project.tags.forEach((tag) => {
		tagCtn.innerHTML += `
			<li class="px-2 bg-white text-black rounded">
				${tag}
			</li>
		`;
	});
});

let expandMore = Array.from(document.querySelectorAll(`.expand`));

expandMore.forEach((expand) => {
	expand.addEventListener("click", function (e) {
		let pDesc =
			e.target.parentElement.parentElement.parentElement.querySelector(
				"p"
			);

		let isHidden = pDesc.classList.contains("hidden");

		if (isHidden) {
			pDesc.classList.remove("hidden");
			e.target.textContent = "expand_less";
		} else {
			pDesc.classList.add("hidden");
			e.target.textContent = "expand_more";
		}
	});
});

// TOGGLE HAMBURGER MENU

const hamburgerMenuBtn = document.querySelector(
	".hamburger-menu-wrapper #menu"
);
const navbar = document.querySelector(".hamburger-menu-wrapper .navbar");

hamburgerMenuBtn.addEventListener("click", function (e) {
	let isHidden = navbar.classList.contains("hidden");

	if (isHidden) {
		navbar.classList.remove("hidden");
		hamburgerMenuBtn.textContent = "close";
	} else {
		navbar.classList.add("hidden");
		hamburgerMenuBtn.textContent = "menu";
	}
});
