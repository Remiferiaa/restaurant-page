function mainMenu() {
    let menu = []
    let foodName = []
    let foodDescrip = []
    const holder = document.createElement("div")
    holder.setAttribute("class", "foodPage")
    for (let i = 0; i < 8; i++) {
        menu[i] = document.createElement("div");
        foodName[i] = document.createElement("h1");
        foodDescrip[i] = document.createElement("p")
        menu[i].setAttribute("class", "food")
        foodName[i].setAttribute("class", "menuName")
        foodDescrip[i].setAttribute("class", "menuDetails")
        menu[i].append(foodName[i], foodDescrip[i])
    }
    foodName[0].innerHTML = "test recipe 1";
    foodDescrip[0].innerHTML = "deets for recipe 1";
    foodName[1].innerHTML = "test recipe 2";
    foodDescrip[1].innerHTML = "deets for recipe 2";
    foodName[2].innerHTML = "test recipe 3";
    foodDescrip[2].innerHTML = "deets for recipe 3";
    foodName[3].innerHTML = "test recipe 4";
    foodDescrip[3].innerHTML = "deets for recipe 4";
    foodName[4].innerHTML = "test recipe 5";
    foodDescrip[4].innerHTML = "deets for recipe 5";
    foodName[5].innerHTML = "test recipe 6";
    foodDescrip[5].innerHTML = "deets for recipe 6";
    foodName[6].innerHTML = "test recipe 7";
    foodDescrip[6].innerHTML = "deets for recipe 7";
    foodName[7].innerHTML = "test recipe 8";
    foodDescrip[7].innerHTML = "deets for recipe 8";
    holder.append(...menu)
    return holder;
}

export { mainMenu }