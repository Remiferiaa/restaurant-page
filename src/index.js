import { home } from "./pages/home.js"
import { mainMenu } from "./pages/menu.js"
import { contacts } from "./pages/contacts.js"

function elDetail(el, attr) {
    for (let key in attr) {
        el.setAttribute(key, attr[key])
    }
}

function skeleton() {
    const container = document.createElement("div")
    const headline = document.createElement("div");
    const main = document.createElement("div");
    const bottom = document.createElement("div");
    const logoLink = document.createElement("a")
    const logo = document.createElement("img")
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");

    elDetail(container, { "id": "container", "class": "holder" })
    elDetail(headline, { "class": "header" });
    elDetail(btn1, { "class": "pageChange", "type": "button", "id": "home" });
    elDetail(btn2, { "class": "pageChange", "type": "button", "id": "menu" });
    elDetail(btn3, { "class": "pageChange", "type": "button", "id": "contact" });
    elDetail(main, { "id": "content", "class": "focus" });
    elDetail(bottom, { "class": "footer" })
    elDetail(logoLink, { "href": "https://www.github.com/remiferiaa" })
    elDetail(logo, { "src": "./images/Git.png", "class": "logo" })

    btn1.innerHTML = "Home";
    btn2.innerHTML = "Menu";
    btn3.innerHTML = "Contact";
    bottom.innerHTML = "Created By Remiferiaa "
    logoLink.append(logo)
    bottom.append(logoLink)
    headline.append(btn1, btn2, btn3)
    container.append(headline, main, bottom)
    document.body.appendChild(container)
    main.append(home())
}


function tab() {
    document.querySelectorAll(".pageChange").forEach(function (abc) {
        abc.addEventListener("click", function (e) {
            const curPage = document.getElementById("content");
            curPage.firstChild.remove();
            e.target.classList.add("active")
            if (e.target.id == "home") {
                document.getElementById("content").append(home())
                document.getElementById("menu").classList.remove("active")
                document.getElementById("contact").classList.remove("active")
            }
            else if (e.target.id == "menu") {
                document.getElementById("content").append(mainMenu())
                document.getElementById("home").classList.remove("active")
                document.getElementById("contact").classList.remove("active")
            }
            else if (e.target.id == "contact") {
                document.getElementById("content").append(contacts())
                document.getElementById("home").classList.remove("active")
                document.getElementById("menu").classList.remove("active")
            }
        })
    })
}

skeleton();
tab()



