let last = 0;
const Cooldown = 395;
const iframe = document.querySelector("iframe");

iframe.onload = function () {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const lastC = iframeDoc.body.innerHTML;
    const newC = `
        <h3 class="lol caleb">Caleb</h3>
        <h3 class="lol alex">Alex</h3>
    `;
    const newS = `
            :root {
                --clr-red:  #e55c5c;
                --clr-blue: #67a5ff;
                --pos-dist: 56vw;
                --pos-hght: 1.6vw;
            }

            h3.lol {
                position: fixed;
                top: 0px;
                margin-top: var(--pos-hght);
            }

            h3.lol.alex {
                color: var(--clr-blue);
                right: var(--pos-dist);
                text-shadow: 0px 0px 2px var(--clr-blue);
            }

            h3.lol.caleb {
                color: var(--clr-red);
                left: var(--pos-dist);
                text-shadow: 0px 0px 2px var(--clr-red);
            }
    `

    iframeDoc.body.innerHTML = `${lastC}\n${newC}\n<style>${newS}</style>`;

    // Add the keydown event listener to the iframe's document
    iframeDoc.addEventListener('keydown', function (e) {
        const now = new Date().getTime();
        const time = Number(now - last);

        if ((time < Cooldown) && e.key === 'ArrowUp') {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log(`Spam prevented: ${time}ms / ${Cooldown}ms`);
        } else {
            last = now;
        }
    });
};