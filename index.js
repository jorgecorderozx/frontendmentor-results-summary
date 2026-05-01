let summaryData = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
]

let list = document.querySelector(".summary-list");

for (let item of summaryData) {
    let listItem = document.createElement("li");
    let subDiv = document.createElement("div");
    listItem.appendChild(subDiv);
    let img = document.createElement("img");
    let spanCategory = document.createElement("span");
    let spanScore = document.createElement("span");

    img.src = item.icon;
    spanCategory.textContent = item.category;
    spanScore.textContent = item.score;

    subDiv.appendChild(spanCategory);
    subDiv.appendChild(spanScore);

    list.appendChild(listItem)
}


