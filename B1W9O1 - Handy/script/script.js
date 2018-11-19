console.log("Checking all classes");

let all = document.getElementsByTagName("*");
for (let i=0; i < all.length; i++) {
    let element = all[i];

    let classList = element.classList;
    for (let j = 0; j < classList.length; j++) {
        let classElement = classList[j];

        if (classElement.startsWith("redirect-")) {
            let link = classElement.split("-")[1];

            element.addEventListener("click", function () {
                redirect(link);
            });

            console.log("Set redirect for element \'" + element.id + "\' to \'" + link + "\'");
        }
    }
}

function redirect(link) {
    console.log("Redirecting to \'" + link + "\'");
    let toClick = document.createElement("a");
    toClick.id="clickableLink";
    toClick.href = link;
    document.body.appendChild(toClick);
    toClick.click();
    document.body.removeChild(toClick);
}