// document.getElementById("read-more").addEventListener("click", function () {
//   var cardDescription = document.getElementById("card-description");
//   if (cardDescription.classList.contains("expanded")) {
//     cardDescription.classList.remove("expanded");
//     this.textContent = "Read More";
//   } else {
//     cardDescription.classList.add("expanded");
//     this.textContent = "Read Less";
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const cardDescription = this.previousElementSibling; // Select the previous sibling which is the description

            if (cardDescription.classList.contains("expanded")) {
                cardDescription.classList.remove("expanded");
                this.textContent = "Read More";
            } else {
                cardDescription.classList.add("expanded");
                this.textContent = "Read Less";
            }
        });
    });
});
// Close Popup Functionality
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});