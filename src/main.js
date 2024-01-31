// TECH STACKS

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
	imgCtn.className = "w-12 rounded overflow-hidden";

	let img = document.createElement("img");
	img.src = `./assets/tech-icons/${icon}.png`;

	imgCtn.append(img);
	techIconsContainer.append(imgCtn);
});

// PROJECTS

const projectsContainer = document.querySelector("#projects-container");

const projectsData = [
	{
		img: "javascript",
		name: "JavaScript",
		live: "https://facebook.com",
		desc: "",
		tags: ["html", "css"],
	},
	{
		img: "mongodb",
		name: "MongoDB",
		live: "https://google.com",
		desc: "",
		tags: ["mongodb", "node"],
	},
	{
		img: "react",
		name: "React",
		live: "https://instagram.com",
		desc: "",
		tags: ["react", "tailwind"],
	},
];

projectsData.forEach((project, index) => {
	projectsContainer.innerHTML += `
		<div id="p-${index}" class="border-2 rounded overflow-hidden">
			<div
				class="p-img-wrapper aspect-4/3 overflow-hidden"
			>
				<img
					src="./assets/tech-icons/${project.img}.png"
					alt="p-img"
					class="w-full"
				/>
			</div>

			<div class="p-content p-2">
				<div class="flex justify-between">
					<div class="p-name text-xl font-medium">
						${project.name}
					</div>

					<div class="p-redirects">
						<a href="${project.live}" target="_blank">
							<span class="material-symbols-outlined">
								open_in_new
							</span>
						</a>
					</div>
				</div>

				<!-- <p class="p-desc text-gray-400 font-thin">
					${project.desc}
				</p> -->

				<ul class="p-tags mt-1 flex gap-2"></ul>
			</div>
		</div>	
	`;

	let tagsCtn = document.querySelector(
		`#projects-container #p-${index} .p-tags`
	);

	project.tags.forEach((tag) => {
		tagsCtn.innerHTML += `
			<li class="px-2 bg-white text-black rounded">
				${tag}
			</li>
		`;
	});
});
