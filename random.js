let last = 0;
const Cooldown = 395;
const iframe = document.querySelector("iframe")

iframe.addEventListener('keydown', function(e) {
    const now = new Date().getTime();
    const time = now - last;
    
    if ((time < Cooldown) && e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log(`Spam prevented: ${time}ms / ${Cooldown}ms`);
    } else {
        last = now;
    }
});
