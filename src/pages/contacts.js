function contacts() {
    const holder = document.createElement("div")
    const phone = document.createElement("div");
    const phoneNm = document.createElement("p");
    const email = document.createElement("div");
    const emAddress = document.createElement("p")
    const address = document.createElement("a")

    holder.setAttribute("class", "infoPage");
    phone.setAttribute("class", "phone");
    phoneNm.setAttribute("class", "phoNum");
    email.setAttribute("class", "email");
    emAddress.setAttribute("class", "emailAddress")
    address.setAttribute("class", "address");
    address.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    address.innerHTML = "Our 🏠<em>location</em> with google maps"
    phone.innerHTML = "Call Us At";
    phoneNm.innerHTML = "📞666-66-6666"
    email.innerHTML = "Our Email";
    emAddress.innerHTML = "📧meatHouse@pepe.com"

    phone.appendChild(phoneNm)
    email.appendChild(emAddress)
    holder.append(phone, email, address)
    return holder
}

export {contacts}