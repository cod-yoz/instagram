// ===============================
// MAIN FOLLOW BUTTON
// ===============================

const followBtn = document.getElementById("followBtn");

followBtn.addEventListener("click", () => {

    if (followBtn.innerText === "Follow back") {

        followBtn.innerText = "Following";
        followBtn.style.background = "#363636";
        followBtn.style.color = "#fff";

    } else {

        followBtn.innerText = "Follow back";
        followBtn.style.background = "#0095f6";
        followBtn.style.color = "#fff";

    }

});

// ===============================
// CLOSE SUGGESTED CARD
// ===============================

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(close => {

    close.addEventListener("click", () => {

        close.parentElement.style.display = "none";

    });

});