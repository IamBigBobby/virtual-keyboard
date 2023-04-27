const keyKeyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const codeKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


// init functions
function initKeyboardWrapper(){
  let out = '<section class="keyboard-wrapper"><textarea></textarea></section>';
  document.querySelector('.keyboard').innerHTML = out;
}

initKeyboardWrapper();

function initBoard(){
  let out = '';
  out = '<textarea id="textarea" rows="10" cols="130" placeholder="Введите данные с клавиатуры" autofocus></textarea>';
  for (let i = 0; i < codeKeyboard.length; i++){
    if (codeKeyboard[i] == 'Enter' || codeKeyboard[i] == 'Backspace' || codeKeyboard[i] == 'Tab' || codeKeyboard[i] == 'CapsLock'|| codeKeyboard[i] == 'Shift' || codeKeyboard[i] == 'Control' || codeKeyboard[i] == 'Alt'){
      out += '<div class="k-key specical-key" data="'+keyKeyboard[i]+'">'+codeKeyboard[i]+'</div>'
    }
    else if (codeKeyboard[i] == ' '){
      out += '<div class="k-key space-key" data="'+keyKeyboard[i]+'">'+codeKeyboard[i]+'</div>'
    }
    else{
      out += '<div class="k-key letter" data="'+keyKeyboard[i]+'">'+codeKeyboard[i]+'</div>';
    }
  }
  document.querySelector('.keyboard-wrapper').innerHTML = out;
}

initBoard();


// insert functions
const keys = document.querySelectorAll('.k-key');
area = document.getElementById('textarea');

document.onkeydown = function(event){
  document.querySelector('.k-key[data="'+ event.code +'"]').classList.add('active');
  let target = event.code;
  let positionKey = keyKeyboard.indexOf(target);
  let pressSymbol =codeKeyboard[positionKey];
  area.value += pressSymbol;
}

document.onkeyup = function (event){
  document.querySelector('.k-key[data="'+ event.code +'"]').classList.remove('active');
}


keys.forEach((key) => {
  key.addEventListener('mousedown', function(event){
    key.classList.add('active');

    let target = event.target;
    let pressedButton = target.getAttribute('data');
    let positionKey = keyKeyboard.indexOf(pressedButton);
    let pressSymbol = codeKeyboard[positionKey];
    area.value += pressSymbol;

  })
    key.addEventListener('mouseup', function(){
    key.classList.remove('active');
  })
})





