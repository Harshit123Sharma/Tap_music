window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const tones = document.querySelectorAll(".tones div");
    const colors = [
        "#ADFF2F",
        "#F7BB57",
        "#E05A77",
        "#6757F7",
        "#53EDCF",
        "#DBF023"
    ];

    tones.forEach((tone, index) => {
        tone.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            document.body.style.backgroundColor = colors[index];
        });
    });

});