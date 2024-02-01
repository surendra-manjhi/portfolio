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
	imgCtn.className = "w-12";

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
		name: "JavaScript",
		code: "https://facebook.com",
		live: "https://facebook.com",
		desc: `
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eaque odio temporibus veritatis repudiandae rem sit omnis, explicabo officiis est?
			`,
		tags: ["html", "css"],
	},
	{
		img: "mongodb",
		name: "MongoDB",
		code: "https://facebook.com",
		live: "https://google.com",
		desc: `
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eaque odio temporibus veritatis repudiandae rem sit omnis, explicabo officiis est?
			`,
		tags: ["mongodb", "node"],
	},
	{
		img: "react",
		name: "React",
		code: "https://facebook.com",
		live: "https://instagram.com",
		desc: `
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eaque odio temporibus veritatis repudiandae rem sit omnis, explicabo officiis est?
			`,
		tags: ["react", "tailwind"],
	},
];

projectData.forEach((project, index) => {
	projectCardContainer.innerHTML += `
		<div id="p-${index}" class="border-2 bg-slate-800 rounded overflow-hidden">
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
					<div class="p-name flex items-end text-xl font-medium">
						${project.name}
						<span class="expand cursor-pointer material-symbols-outlined">
							expand_more
						</span>
					</div>

					<div class="p-redirects">
						<a href="${project.code}" target="_blank">
							<span class="material-symbols-outlined">
								deployed_code
							</span>
						</a>
						<a href="${project.live}" target="_blank">
							<span class="material-symbols-outlined">
								open_in_new
							</span>
						</a>
					</div>
				</div>

				<p class="p-desc hidden text-gray-400 font-thin">
					${project.desc}
				</p>

				<ul class="p-tags mt-1 flex gap-1"></ul>
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
