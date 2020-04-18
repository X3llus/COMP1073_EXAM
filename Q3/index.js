var button = document.querySelector("button");

button.addEventListener("click", async () => {
    var res = await fetch("https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json", {
        method: "GET"
    });
    

    var data = await res.json();
    data = data.cats;

    for (let i = 0; i < data.length; i++) {

        thisData = data[i];

        var div = document.createElement("div");
        var h1 = document.createElement("h1");
        var h2 = document.createElement("h2");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");

        h1.textContent = `Name: ${thisData.name}`;
        h2.textContent = `Species: ${thisData.species}`;
        
        for (let j = 0; j < thisData.favFoods.length; j++) {
            p1.innerHTML += thisData.favFoods[j];
            if (j < thisData.favFoods.length) {
                p1.innerHTML += ", ";
            }
        }
        
        p2.textContent = `age: ${thisData.age}`;

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);

        document.querySelector("main").appendChild(div);
    }
});