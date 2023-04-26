const keyKeyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const codeKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

// document.onkeydown = function(event){
//   // console.log(event)
//   // keyKeyboard.push(event.code);
//   // console.log(keyKeyboard);
//   // codeKeyboard.push(event.key);
//   // console.log(codeKeyboard);
// }

function initWrapper(){
  let out = '<section class="keyboard-wrapper"></section>';
  document.querySelector('.keyboard').innerHTML = out;
}

initWrapper();


function initBoard(){
  let out = '';
  for (let i = 0; i < codeKeyboard.length; i++){
    if (codeKeyboard[i] == 'Enter' || codeKeyboard[i] == 'Backspace' || codeKeyboard[i] == 'Tab' || codeKeyboard[i] == 'CapsLock'|| codeKeyboard[i] == 'Shift' || codeKeyboard[i] == 'Control' || codeKeyboard[i] == 'Alt'){
      out += '<div class="k-key specical-key">'+codeKeyboard[i]+'</div>'
    }
    else if (codeKeyboard[i] == ' '){
      out += '<div class="k-key space-key">'+codeKeyboard[i]+'</div>'
    }
    else{
      out += '<div class="k-key">'+codeKeyboard[i]+'</div>';
    }
  }
  document.querySelector('.keyboard-wrapper').innerHTML = out;
}

initBoard();