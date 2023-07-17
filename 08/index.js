const usuarios = [
	{
		nome: "João",
		pets: [],
	},
	{
		nome: "Ana",
		pets: ["Pingo", "Lulu"],
	},
	{
		nome: "Beatriz",
		pets: ["Lessie"],
	},
	{
		nome: "Carlos",
		pets: ["Farofa", "Salsicha", "Batata"],
	},
	{
		nome: "Antonio",
		pets: ["Naninha"],
	},
];

for (let i = 0; i < usuarios.length; i++) {
	usuarios[i].pets.length > 0
		? console.log(`Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pets`)
		: console.log(`Sou ${usuarios[i].nome} e não tenho pets`);
}
