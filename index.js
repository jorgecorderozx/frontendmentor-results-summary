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
let average = document.querySelector(".result");

for (let item of summaryData) {
    list.appendChild(createCard(item))
}

function createCard(item){
    let listItem = document.createElement("li");
    let subDiv = document.createElement("div");
    listItem.appendChild(subDiv);
    let img = document.createElement("img");
    let categoryName = document.createElement("p");
    subDiv.appendChild(img);
    subDiv.appendChild(categoryName);
    img.src = item.icon
    categoryName.classList.add(`${item.category.toLowerCase()}`);
    categoryName.textContent = item.category;
    let output = document.createElement("span");
    listItem.appendChild(output)
    output.classList.add("rating")
    output.innerHTML = `<span class = "ratingOutput">${item.score}</span> / 100 `


    listItem.classList.add("flex");
    subDiv.classList.add("flex");
    
    return listItem;
}

function averageResult(){
    let totalValueCat = 0;
    for(let item of summaryData){
        totalValueCat += item.score;
    }
    return Math.round(totalValueCat / summaryData.length);
}

average.textContent = averageResult()