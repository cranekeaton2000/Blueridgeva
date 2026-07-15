// Blue Ridge Aviation

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(4,12,22,.92)";
    } else {
        nav.style.background = "rgba(7,19,33,.75)";
    }
});

// Fade-in animation for cards
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

document.querySelectorAll(".card,.fleet-card").forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(30px)";
    card.style.transition=".6s";
    observer.observe(card);
});
