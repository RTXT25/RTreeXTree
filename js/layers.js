addLayer("c", {
    name: "chemistree 2",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#234567",
    row: 0,
    symbol: "C",
    position: 0,
    branches: ["p"],
    tooltip: "The Chemistree 2",
    clickables: {
        11: {
            title: "The Chemistree 2",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
		    
		   
		  "
            }
        }
    },
    tabFormat: [
        ["clickable", 11]
    ]
})
addLayer("w", {
    name: "the prestige tree: wilted",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#31aeb0",
    row: 0,
    symbol: "W",
    position: 2,
    branches: ["c"],
    tooltip: "The Prestige Tree: Wilted",
    clickables: {
        11: {
            title: "The Prestige Tree: Wilted",
            display() {
                return "Come back later; I'm busy right now."
            },
            canClick() {return true},
            onClick() {
                window.location.href = "https://raw.githack.com/microwaved-pizza/The-Modding-Tree/wilt/index.html"
            }
        }
    },
    tabFormat: [
        ["clickable", 11]
    ]
})
addLayer("bruh1", {
    row: 0,
    position: 1,
    layerShown: "ghost"
})
