const keyValueId =document.getElementById("keyValue")
const KeyCodeId =document.getElementById("clap")
const CharacterCodeId =document.getElementById("charCode")


window.addEventListener('keypress', (event) => {
    console.log(event)

    keyValueId.innerHTML = event.key;
    KeyCodeId.innerHTML = event.code;
    CharacterCodeId.innerHTML = event.keyCode;
})

// document.querySelector('.wrap').classList.toggle('hide');
// document.querySelector('.keycode-display').classList.toggle('hide');
// table.classList.toggle('hide');
