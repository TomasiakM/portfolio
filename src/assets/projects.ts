export interface IProject {
	name: string;
	stack: string;
	description: string;
	live: string;
	gitHub: string;
	gitHub2?: string;
	image: string;
}

const projects: IProject[] = [
	{
		name: "WoT-MoE",
		stack: "Vue + Express + MongoDB",
		description:
			"Strona pozwal sprawdzić odznaki biegłości danego gracza lub klanu.",
		live: "https://wot-moe.herokuapp.com/",
		gitHub: "https://github.com/TomasiakM/wot-moe",
		gitHub2: "https://github.com/TomasiakM/wot-moe-backend",
		image: "wot-moe.jpg",
	},
	{
		name: "Forza shop",
		stack: "Vue + Express + MongoDB",
		description:
			"Pokazowa strona z samochodami z gry Forza horizon 4 oraz panelem adminem do zarządzania.",
		live: "https://forza-shop.herokuapp.com/",
		gitHub: "https://github.com/TomasiakM/forza",
		image: "forza.jpg",
	},
	{
		name: "Klon Jbzd",
		stack: "Vue + Express + MongoDB",
		description: "Portal do publikowania memów stylizowany na jbzd.pl",
		live: "https://jbzd.herokuapp.com/",
		gitHub: "https://github.com/TomasiakM/jbzd-clone-MEVN",
		image: "jbzd.jpg",
	},
	{
		name: "myWallet",
		stack: "React",
		description:
			"Aplikacja finansowa pozwalająca w łatwy sposób zarządzać swoimi pieniędzmi.",
		live: "https://tomasiakm.github.io/myWallet/",
		gitHub: "https://github.com/TomasiakM/myWallet",
		image: "myWallet.jpg",
	},
	{
		name: "Sklep online",
		stack: "React",
		description: "Sklep komputerowy online z funkcjonującym koszykiem.",
		live: "https://tomasiakm.github.io/Shop/",
		gitHub: "https://github.com/TomasiakM/Shop",
		image: "shop.jpg",
	},
	{
		name: "Aplikacja pogodowa",
		stack: "React",
		description:
			"Aplikacja pozwalająca sprawdzić pogodę aktualną oraz na najbliższe 3 dni.",
		live: "https://tomasiakm.github.io/Weather-App/",
		gitHub: "https://github.com/TomasiakM/Weather-App",
		image: "weatherApp.jpg",
	},
	{
		name: "Kalkulator Walutowy",
		stack: "React",
		description:
			"Aplikacja pozwalająca zamienić złotówki z lub na 35 walut pobieranych z API NBP.",
		live: "https://tomasiakm.github.io/Currency-Calculator/",
		gitHub: "https://github.com/TomasiakM/Currency-Calculator",
		image: "currencyCalculator.jpg",
	},
];

export default projects;
