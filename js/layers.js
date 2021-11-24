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
        },
        13: {
            title: "Play",
            canClick() {return true},
            onClick() {
                window.location.href = "https://raw.githack.com/RTXT25/Project-Orion/master/index.html"
            },
            tooltip: "Click Here To PLay The Dev Build"
        },
        14: {
            title: "Play",
            canClick() {return true},
            onClick() {
                window.location.href = "https://raw.githack.com/RTXT25/Project-Orion/Exterminate/index.html"
            },
            tooltip: "Click Here To PLay The Exterminate Build"
        },
    },
    infoboxes: {
    Orion: {
            title: "<h1>Project Orion</h1>",
            body() { return "None for now" },
        },
    VOrion: {
            title: "<h1>Project Orion Versions</h1>",
            body() { return "These are the differnt builds of Project Orion" },
        },
	OPlay: {
            title: "<h3>Play Project Orion Here</h3>",
            body() { return "None for now" },
        },
    DPlay: {
        title: "<h3>Play The Dev Build</h3>",
        body() { return "The latest stuff" },
        },
    EPlay: {
        title: "<h3>Play The Exterimate Bulid</h3>",
        body() { return "Exterminates experiments" },
        },
	OCode: {
            title: "<h3>See Project Orion Code Here</h3>",
            body() { return "None for now" },
        },
    },
    tabFormat: {
        "Main": {
            content: [
                "blank",
                ["infobox", "Orion"],
                "blank",
                "blank",
                ["row", [["clickable", 11],["infobox","OPlay"]],],
    	        ["row", [["clickable", 12],["infobox","OCode"]],],
            ],
        },
        "Versions": {
            content: [
                "blank",
                ["infobox", "VOrion"],
                "blank",
                "blank",
                ["row", [["clickable", 13],["infobox","DPlay"]],],
    	        ["row", [["clickable", 14],["infobox","EPlay"]],],
            ],
        },
    },
})
addLayer("p1t", {
    name: "Plus1Tree",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#4BDC13",
    nodeStyle: { "width" : "150px", "height" : "150px"},
    row: 0,
    symbol: "<h1>+</h1>",
    position: 1,
    branches: ["p"],
    tooltip: "Plus 1 Tree",
    clickables: {
        11: {
            title: "Play",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/Plus1Tree/"
            },
            tooltip: "Click Here To PLay The Game"
        },
        12: {
            title: "Code",
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/RTXT25/Plus1Tree"
            },
            tooltip: "Click Here To See My Bad Code"
        }
    },
    infoboxes: {
        P1t: {
            title: "<h1>Plus 1 Tree</h1>",
            body() { return "None for now" },
        },
	    PPlay: {
            title: "<h3>Play Plus 1 Tree Here</h3>",
            body() { return "None for now" },
        },
	    PCode: {
            title: "<h3>See Plus 1 Tree Code Here</h3>",
            body() { return "None for now" },
        },
    },
    tabFormat: [
        "blank",
        ["infobox", "P1t"],
        "blank",
        "blank",
        ["row", [["clickable", 11],["infobox","PPlay"]],],
	    ["row", [["clickable", 12],["infobox","PCode"]],],
    ] 
})
addLayer("bf", {
    name: "But Faster",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#31aeb0",
    nodeStyle: { "width" : "150px", "height" : "150px"},
    row: 1,
    symbol: "<h1>TBF</h1>",
    position: 1,
    branches: ["p"],
    tooltip: "Tree's But Faster",
    clickables: {
        11: {
            title: "Main But Faster Page",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/RTreeXTree/ButFaster"
            },
            tooltip: "Click Here To Go To The The But Faster Page"
        },
        12: {
            title: "Code",
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/RTXT25/Plus1Tree"
            },
            tooltip: "Click Here To See My Bad Code"
        }
    },
    infoboxes: {
        main: {
            title: "<h1>Tree's But Faster</h1>",
            body() { return "None for now" },
        },
        Tmain: {
            title: "<h1>Tree's But Faster</h1>",
            body() { return "<h3>Here Are Direct Links To The Trees</h3>" },
        },
	    MainLink: {
            title: "<h3>Main Page Here</h3>",
            body() { return "Go To The TBF Main Page" },
        },
	    willaddlater: {
            title: "<h3>See Plus 1 Tree Code Here</h3>",
            body() { return "None for now" },
        },
    },
    tabFormat: {
        "Main": {
            content: [
                "blank",
                ["infobox", "main"],
                "blank",
                "blank",
                ["row", [["clickable", 11],["infobox","MainLink"]],],
            ],
        },
        "Trees": {
            content: [
                "blank",
                ["infobox", "Tmain"],
                "blank",
                "blank",
                ["row", [["clickable", 13],["infobox","DPlay"]],],
    	        ["row", [["clickable", 14],["infobox","EPlay"]],],
            ],
        },
    },
})