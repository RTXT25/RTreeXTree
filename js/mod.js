let modInfo = {
	name: "RTXT25's Trees",
	id: "whybutok",
	author: "RTXT25",
	pointsName: "there are no points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "meta",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- the tree exists now<br>
		- added nothing lol<br>
		`

let winText = `youre done pog`

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
	if (!canGenPoints()) {return new Decimal(0)}
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
	return false
}


// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(1) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

function addAlignments() {
	player.l.law = new Decimal(1)
    player.l.chaos = new Decimal(1)
    player.l.good = new Decimal(1)
    player.l.evil = new Decimal(1)
	player.l.unlocked = true
}
