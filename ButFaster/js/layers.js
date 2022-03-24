addLayer("menu", {
    name: "menu",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    row: "side",
    symbol: "🏠",
    position: 0,
    branches: ["p"],
    tooltip: "Open The Menu",
    clickables: {
        11: {
            title: "Go Home",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
            },
            tooltip: "Go To the Home Page"
        },
        12: {
            title: "Go To Downloads",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io/Downloads"
            },
            tooltip: "Go To Downloads"
        },
    },
    infoboxes:{
        Main: {
            title: "Menu",
            body() { return "<h1>MENU</h1>" },
        },
    },
    tabFormat: [
        "blank",
        ["row", [["infobox", "Main"],],],
        "blank",
        ["row", [["clickable", 11],["clickable", 12],],],
    ]
})
addLayer("ptbf", {
    name: "Prestige Tree But Faster",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#31aeb0",
    nodeStyle: { "width" : "150px", "height" : "150px"},
    row: 0,
    symbol: "<h1>P</h1>",
    position: 0,
    branches: ["p"],
    tooltip: "The Prestige Tree But Faster",
    clickables: {
        11: {
            title: "Play",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/The-Prestige-Tree-But-Faster/"
            },
            tooltip: "Click Here To PLay The Game"
        },
        12: {
            title: "Code",
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/RTXT25/The-Prestige-Tree-But-Faster/"
            },
            tooltip: "Click Here To See My Bad Code"
        }
    },
    infoboxes: {
        PTBF: {
            title: "<h1>The Prestige Tree But Faster</h1>",
            body() { return "note this might break" },
        },
	    PPlay: {
            title: "<h3>Play Here</h3>",
            body() { return "None for now" },
        },
	    PCode: {
            title: "<h3>Code is here</h3>",
            body() { return "For some reason you wanted it it's here" },
        },
    },
    tabFormat: [
        "blank",
        ["infobox", "PTBF"],
        "blank",
        "blank",
        ["row", [["clickable", 11],["infobox","PPlay"]],],
	    ["row", [["clickable", 12],["infobox","PCode"]],],
    ] 
})

addLayer("gdtbf", {
    name: "The Game Dev Tree But Faster",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#4a4a57",
    nodeStyle: { "width" : "150px", "height" : "150px"},
    row: 0,
    symbol: "<h1>G</h1>",
    position: 0,
    branches: ["p"],
    tooltip: "The Game Dev Tree But Faster",
    clickables: {
        11: {
            title: "Play",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/The-Game-Dev-Tree-But-Faster/"
            },
            tooltip: "Click Here To PLay The Game"
        },
        12: {
            title: "Code",
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/RTXT25/The-Game-Dev-Tree-But-Faster"
            },
            tooltip: "Click Here To See My Bad Code"
        }
    },
    infoboxes: {
        main: {
            title: "<h1>The Game Dev Tree But Faster</h1>",
            body() { return "Very Bad BUT GFUEL" },
        },
	    Play: {
            title: "<h3>Play Here</h3>",
            body() { return "None for now" },
        },
	    Code: {
            title: "<h3>Code is here</h3>",
            body() { return "For some reason you wanted it it's here" },
        },
    },
    tabFormat: [
        "blank",
        ["infobox", "main"],
        "blank",
        "blank",
        ["row", [["clickable", 11],["infobox","Play"]],],
	    ["row", [["clickable", 12],["infobox","Code"]],],
    ] 
})

addLayer("ttbf", {
    name: "Tuba's Tree But Faster",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#FFFF00",
    nodeStyle: { "width" : "150px", "height" : "150px"},
    row: 0,
    symbol: "<h1>T</h1>",
    position: 0,
    branches: ["p"],
    tooltip: "Tuba's Tree But Faster",
    clickables: {
        11: {
            title: "Play",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/Tubas-Tree-But-Faster/"
            },
            tooltip: "Click Here To PLay The Game"
        },
        12: {
            title: "Code",
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/RTXT25/Tubas-Tree-But-Faster"
            },
            tooltip: "Click Here To See My Bad Code"
        }
    },
    infoboxes: {
        main: {
            title: "<h1>Tuba's Tree But Faster</h1>",
            body() { return "Very Bad soo bad" },
        },
	    Play: {
            title: "<h3>Play Here</h3>",
            body() { return "None for now" },
        },
	    Code: {
            title: "<h3>Code is here</h3>",
            body() { return "For some reason you wanted it it's here" },
        },
    },
    tabFormat: [
        "blank",
        ["infobox", "main"],
        "blank",
        "blank",
        ["row", [["clickable", 11],["infobox","Play"]],],
	    ["row", [["clickable", 12],["infobox","Code"]],],
    ] 
})

addLayer("tpfbf", {
    name: "the Prestige Forest But Faster",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#17E6F0",
    nodeStyle: { "width" : "150px", "height" : "150px"},
    row: 0,
    symbol: "<h1>F</h1>",
    position: 0,
    branches: ["p"],
    tooltip: "The Prestige Forest But Faster",
    clickables: {
        11: {
            title: "Play",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/The-Prestige-Forest-But-Faster/"
            },
            tooltip: "Click Here To PLay The Game"
        },
        12: {
            title: "Code",
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/RTXT25/The-Prestige-Forest-But-Faster"
            },
            tooltip: "Click Here To See My Bad Code"
        }
    },
    infoboxes: {
        main: {
            title: "<h1>The Prestige Forest But Faster</h1>",
            body() { return "Very Bad soo bad" },
        },
	    Play: {
            title: "<h3>Play Here</h3>",
            body() { return "None for now" },
        },
	    Code: {
            title: "<h3>Code is here</h3>",
            body() { return "For some reason you wanted it it's here" },
        },
    },
    tabFormat: [
        "blank",
        ["infobox", "main"],
        "blank",
        "blank",
        ["row", [["clickable", 11],["infobox","Play"]],],
	    ["row", [["clickable", 12],["infobox","Code"]],],
    ] 
})
