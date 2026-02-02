const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const wrapper = document.querySelector(".wrapper");

envelope.addEventListener("click", () => {
    const receiverParams = new URLSearchParams(window.location.search).get('receiver')
    const receiverElement = document.getElementById('receiver')
    
    receiverElement.textContent = `❤️ ${receiverParams.toLocaleUpperCase()} ❤️`
    
    wrapper.classList.add("open");
});

letter.addEventListener("click", () => {
    const params = window.location.search;    
    window.location.href= `../html/card.html${params}`

});
