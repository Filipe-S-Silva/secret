window.addEventListener("load", ()=>{ 

    const senderParams = new URLSearchParams(window.location.search).get('sender')
    const receiverParams = new URLSearchParams(window.location.search).get('receiver')


    const titleReceiver = document.getElementById("titleReceiver")
    const txtSender = document.getElementById("txtSender")

    titleReceiver.innerText = `Querida ${receiverParams.toLocaleUpperCase()},`
    txtSender.innerText = `${senderParams.toLocaleUpperCase()}`

})