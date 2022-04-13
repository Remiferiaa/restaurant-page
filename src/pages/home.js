function home() {
    const holder = document.createElement("div")
    const title = document.createElement("h1");
    const info = document.createElement("h1");
    const time = document.createElement("h1");
    holder.setAttribute("class", "homePage")
    title.setAttribute("class", "storeName")
    info.setAttribute("class", "description")
    time.setAttribute("class", "openTime")
    title.innerHTML = "<br>Welcome to <u>The Meat House</u>"
    info.innerHTML = "<br>Various typpes of meat from all around the world served to you by renowed chefs"
    time.innerHTML = "<br>We are Opened from <u>9am to 6pm</u> on Weekdays <br><br> <u>10am to 3pm</u> on Weekends."
    holder.append(title,info,time)
    return holder
}


export {home}

