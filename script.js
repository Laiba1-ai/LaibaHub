const search = document.getElementById("searchTools");

if (search) {
    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });

    });
}