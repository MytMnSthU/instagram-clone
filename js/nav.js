function addActiveClass(target) {
    target.classList.add("active");
}

function removeActiveClass(target) {
    target.forEach((item) => {
        item.classList.remove("active");
    });
}

function addFilledClass(target, className) {
    let newClassName = className + "-fill";
    target.classList.replace(className, newClassName);
}

function removeFilledClass(target, className) {
    let newClassNames = className.split("-");
    newClassNames.pop();
    let newClassName = newClassNames.join("-");
    target.classList.replace(className, newClassName);
}

function removeAllFilledClass(target) {
    target.forEach((item) => {
        let className = getLastClassName(item);
        if (className.endsWith("fill")) removeFilledClass(item, className);
    });
}

function getLastClassName(target) {
    // let lastClassName = target.className.split(" ").at(-1);
    let className = target.className;
    let classNames = className.split(" ");
    let lastClassName = classNames.at(-1);
    return lastClassName;
}

function isNotEffectIcon(target) {
    const notEffectIcons = ["bi-search", "bi-list"];
    for (const ico of notEffectIcons) {
        if (target.classList.contains(ico)) return true;
    }
}

function toggleIconActive(target) {
    const icon = target.querySelector(".nav-link-icon");
    if (!icon) return;

    let lastClassName = getLastClassName(icon);

    if (isNotEffectIcon(icon)) return;

    if (lastClassName.endsWith("fill")) {
        return removeFilledClass(icon, lastClassName);
    }

    return addFilledClass(icon, lastClassName);
}

function showBox(box, event) {
    box.classList.add("show");

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    document.body.appendChild(wrapper);
    event.target.classList.add("outlined-active");

    wrapper.addEventListener("click", () => {
        box.classList.remove("show");
        event.target.classList.remove("outlined-active");
        maximizeNav();

        wrapper.remove();
    });
}
function hideBox(box, target) {
    box.classList.remove("show");
    target.classList.remove("outlined-active");
}

function minimizeNav() {
    sidenav.classList.add("minimized");
}

function maximizeNav() {
    sidenav.classList.remove("minimized");
}

// Switching outlined icons and filled icons
const navlinks = document.querySelectorAll(".nav-link");
const navicons = document.querySelectorAll(".nav-link-icon");
navlinks.forEach((link) => {
    link.addEventListener("click", () => {
        removeActiveClass(navlinks);
        removeAllFilledClass(navicons);
        toggleIconActive(link);
        addActiveClass(link);
    });
});

// Toggling boxes
const searchbtn = document.getElementById("searchbtn");
const notibtn = document.getElementById("notibtn");
const searchbox = document.getElementById("searchbox");
const notibox = document.getElementById("notibox");
const sidenav = document.getElementById("sidenav");

searchbtn.addEventListener("click", (e) => {
    minimizeNav();
    hideBox(notibox, notibtn);
    showBox(searchbox, e);
});
notibtn.addEventListener("click", (e) => {
    minimizeNav();
    hideBox(searchbox, searchbtn);
    showBox(notibox, e);
});

console.log(document.querySelector(".wrapper"));
