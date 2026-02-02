const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const wrapper = document.querySelector(".wrapper");

window.addEventListener('load', () => {
    // Captura os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const sender = urlParams.get('sender');
    const receiver = urlParams.get('receiver');

    // Se existirem na URL, salva no localStorage e limpa a URL
    if (sender && receiver) {
        sessionStorage.setItem('cardSender', sender);
        sessionStorage.setItem('cardReceiver', receiver);

        // Remove os parâmetros da barra de endereço
        const newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }

   
});

envelope.addEventListener("click", () => {
    const receiverParams = sessionStorage.getItem('cardReceiver')
    const receiverElement = document.getElementById('receiver')
    
    receiverElement.textContent = `❤️ ${receiverParams.toLocaleUpperCase()} ❤️`
    
    wrapper.classList.add("open");
});

letter.addEventListener("click", () => {
    window.location.href= `../html/card.html`
});

