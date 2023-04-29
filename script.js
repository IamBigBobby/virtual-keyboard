const keyKeyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const codeKeyboardLowerEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const codeKeyboardUpperEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


// init functions
function initKeyboardWrapper(){
  let out = '<section class="keyboard-wrapper"></section>';
  document.querySelector('.keyboard').innerHTML = out;
}

initKeyboardWrapper();

function initTextArea(){
  let wrapper = document.querySelector('.keyboard-wrapper');
  wrapper.innerHTML = '';
  let out = '<textarea class="textarea" rows="10" cols="130" placeholder="Введите данные с клавиатуры" disabled></textarea>';
  wrapper.insertAdjacentHTML('afterbegin', out);
}

initTextArea();

function initBoard(){
  let textareaInit = document.querySelector('.textarea');
  textareaInit.innerHTML = '';
  let out = '';
  // out = '<textarea id="textarea" rows="10" cols="130" placeholder="Введите данные с клавиатуры" disabled></textarea>';
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
  textareaInit.insertAdjacentHTML('afterend', out)
}

initBoard();


// insert functions
const keys = document.querySelectorAll('.k-key');
area = document.querySelector('.textarea');
currentArrSymbols = codeKeyboardLowerEng;

document.onkeydown = function(event){
  document.querySelector('.k-key[data="'+ event.code +'"]').classList.add('active');
  event.preventDefault();
  let target = event.code;
  let positionKey = keyKeyboard.indexOf(target);
  let pressSymbol = currentArrSymbols[positionKey];

  if (pressSymbol == 'Backspace'){
    let backspaceArr = area.value.split('');
    backspaceArr.pop();
    area.value = backspaceArr.join('');
  }
  else if (pressSymbol == 'Tab'){
    area.value += '  ';
  }
  else if (pressSymbol == 'Enter'){
    area.value += '\n';
  }
  else if (pressSymbol == 'Shift'){

  }
  else{
    area.value += pressSymbol;
  }
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






