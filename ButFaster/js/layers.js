addLayer("h", {
    name: "homepage",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    row: "side",
    symbol: "🏠",
    position: 0,
    branches: ["p"],
    tooltip: "Go Back To The Home Page",
    clickables: {
        11: {
            title: "Go Home",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
            },
            tooltip: "Go To the Home Page"
        }
    },
    tabFormat: [
        "blank",
        ["clickable", 11]
    ]
})
addLayer("po", {
    name: "Project Orion",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#6d00b0",
    nodeStyle: { "width" : "150px", "height" : "150px"},
    row: 0,
    symbol: "<h1>O</h1>",
    position: 0,
    branches: ["p"],
    tooltip: "Project Orion",
    clickables: {
        11: {
            title: "Play",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/Project-Orion/"
            },
            tooltip: "Click Here To PLay The Game"
        },
        12: {
            title: "Code",
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/RTXT25/Project-Orion"
            },
            tooltip: "Click Here To See My Bad Code"
        }
    },
    infoboxes: {
        Orion: {
            title: "<h1>Project Orion</h1>",
            body() { return "None for now" },
        },
	OPlay: {
            title: "<h3>Play Project Orion Here</h3>",
            body() { return "None for now" },
        },
	OCode: {
            title: "<h3>See Project Orion Code Here</h3>",
            body() { return "None for now" },
        },
    },
    tabFormat: [
        "blank",
        ["infobox", "Orion"],
        "blank",
        "blank",
        ["row", [["clickable", 11],["infobox","OPlay"]],],
	    ["row", [["clickable", 12],["infobox","OCode"]],],
    ] 
})
