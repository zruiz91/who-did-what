function moreLess() {
    const elipses = document.getElementById("elipses");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("btn");

    if (elipses.style.display === "none") {
        elipses.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        elipses.style.display = "none";
        btnText.innerHTML = "Read Less"
        moreText.style.display = "inline"
    }
}