let modInfo = {
	name: "RTXT25.Github.io",
	id: "RTXT25.Github.io",
	author: "RTXT25",
	pointsName: "points cuz funny",
	modFiles: ["layers.js", "tree.js"],

	discordName: "i dont have Discord server",
	discordLink: "lol",
	initialStartPoints: new Decimal (69), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "2.3.1",
	name: "Website Revamped",
}

let changelog = `<h1>Changelog:</h1><br><br>
		<h3>Website Revamped v2.3.1</h3><br>
		- Added the Word Error to 404.<br>
		br>
		<h3>Website Revamped v2.3</h3><br>
		- New 404 Page.<br>
		<br>
		<h3>Website Revamped: Revamp Push 3 v2.2</h3><br>
		- Added Even More Stuff.<br>
		<br>
		<h3>Website Revamped: Revamp Push 2 v2.1</h3><br>
		- Added More Stuff.<br>
		<br>
		<h3>Website Revamped: Revamp Push 1 v2.0</h3><br>
		- Made The Thing.<br>
		<br>
		<h3>Old Website v1.0</h3><br>
		- The old one.<br>
		<br>
		Why Does A Website Need A Change Log`

let winText = ` `

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return false
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("0"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}