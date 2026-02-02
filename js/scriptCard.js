window.addEventListener("load", ()=>{ 

    const senderParams = sessionStorage.getItem('cardSender')
    const receiverParams = sessionStorage.getItem('cardReceiver')


    const titleReceiver = document.getElementById("titleReceiver")
    const txtSender = document.getElementById("txtSender")

    titleReceiver.innerText = `Querida ${receiverParams.toLocaleUpperCase()},`
    txtSender.innerText = `${senderParams.toLocaleUpperCase()}`

})

