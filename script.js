const keyKeyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const codeKeyboardLowerEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const codeKeyboardUpperEng = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const codeKeyboardLowerRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const codeKeyboardUpperRu = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

let currentArrBoard = codeKeyboardLowerEng;

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
  for (let i = 0; i < currentArrBoard.length; i++){
    if (currentArrBoard[i] == 'Alt'){
      out += '<div class="k-key specical-key alt-key" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>';
    }
    else if (currentArrBoard[i] == 'Enter'){
      out += '<div class="k-key specical-key enter-key" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>';
    }
    else if (currentArrBoard[i] == 'Backspace' ){
      out += '<div class="k-key specical-key backspace-key" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>';
    }
    else if (currentArrBoard[i] == 'Tab'){
      out += '<div class="k-key specical-key tab-key" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>';
    }
    else if (currentArrBoard[i] == 'CapsLock'){
      out += '<div class="k-key specical-key capslk-key" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>';
    }
    else if (currentArrBoard[i] == 'Shift'){
      out += '<div class="k-key specical-key shift-key" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>';
    }
    else if (currentArrBoard[i] == 'Control'){
      out += '<div class="k-key specical-key cntrl-key" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>';
    }

    else if (currentArrBoard[i] == ' '){
      out += '<div class="k-key space-key" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>'
    }
    else{
      out += '<div class="k-key letter" data="'+keyKeyboard[i]+'">'+currentArrBoard[i]+'</div>';
    }
  }
  textareaInit.insertAdjacentHTML('afterend', out)
}

initBoard();

// insert functions
const keys = document.querySelectorAll('.k-key');
let area = document.querySelector('.textarea');
let flagChangeLanguage = false;

document.onkeydown = function(event){

  event.preventDefault();
  document.querySelector('.k-key[data="'+ event.code +'"]').classList.add('active');
  let target = event.code;
  let positionKey = keyKeyboard.indexOf(target);
  let pressSymbol = currentArrBoard[positionKey];

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
  else if (pressSymbol == 'CapsLock'){
    switch (currentArrBoard){
      case currentArrBoard = codeKeyboardLowerEng:
        document.querySelectorAll('.k-key').forEach((element) => {
          element.remove();
        });
        currentArrBoard = codeKeyboardUpperEng;
        initBoard();
        document.querySelectorAll('.letter').forEach((element) => {
          element.classList.add('letter-upper');
        })
        document.querySelector('.capslk-key').classList.add('active');
        break;
      case currentArrBoard = codeKeyboardLowerRu:
        document.querySelectorAll('.k-key').forEach((element) => {
          element.remove();
        });
        currentArrBoard = codeKeyboardUpperRu;
        initBoard();
        document.querySelectorAll('.letter').forEach((element) => {
          element.classList.add('letter-upper');
        })
        document.querySelector('.capslk-key').classList.add('active');
        break;
      
      case currentArrBoard = codeKeyboardUpperEng:
        document.querySelectorAll('.k-key').forEach((element) => {
          element.remove();
        });
        currentArrBoard = codeKeyboardLowerEng;
        initBoard();
        document.querySelectorAll('.letter').forEach((element) => {
          element.classList.remove('letter-upper');
        })
        document.querySelector('.capslk-key').classList.add('active');
        break;

      case currentArrBoard = codeKeyboardUpperRu:
        document.querySelectorAll('.k-key').forEach((element) => {
          element.remove();
        });
        currentArrBoard = codeKeyboardLowerRu;
        initBoard();
        document.querySelectorAll('.letter').forEach((element) => {
          element.classList.remove('letter-upper');
        })
        document.querySelector('.capslk-key').classList.add('active');
    }
  }
  else if (pressSymbol == 'Shift'){
    switch (currentArrBoard){

      case currentArrBoard = codeKeyboardLowerEng:

        document.querySelectorAll('.k-key').forEach((element) => {
          element.remove();
        });

        currentArrBoard = codeKeyboardUpperEng;

        initBoard();

        document.querySelectorAll('.letter').forEach((element) => {
          element.classList.add('letter-upper');
        })

        if (target == 'ShiftLeft'){
          document.querySelectorAll('.shift-key')[0].classList.add('active')
        }

        else if (target == 'ShiftRight'){
          document.querySelectorAll('.shift-key')[1].classList.add('active');
        }
        break;

        case currentArrBoard = codeKeyboardLowerRu:
          document.querySelectorAll('.k-key').forEach((element) => {
            element.remove();
          });
    
          currentArrBoard = codeKeyboardUpperRu;
    
          initBoard();
    
          document.querySelectorAll('.letter').forEach((element) => {
            element.classList.add('letter-upper');
          })
    
          if (target == 'ShiftLeft'){
            document.querySelectorAll('.shift-key')[0].classList.add('active')
          }
          else if (target == 'ShiftRight'){
            document.querySelectorAll('.shift-key')[1].classList.add('active');
          }
          break;
    }
  }
  else if (pressSymbol == 'Control'){
    area.value += '';
    flagChangeLanguage = true;
  }
  else if (pressSymbol == 'Alt'){
    area.value += '';
    if ((event.code == 'AltLeft' || event.code == 'AltRight') && flagChangeLanguage == true){
      switch (currentArrBoard){

        case currentArrBoard = codeKeyboardLowerEng:
          document.querySelectorAll('.k-key').forEach((element) => {
            element.remove();
          });
          currentArrBoard = codeKeyboardLowerRu;
          initBoard();
          if (target == 'AltLeft'){
            document.querySelectorAll('.alt-key')[0].classList.add('active')
          }
          else if (target == 'AltRight'){
            document.querySelectorAll('.alt-key')[1].classList.add('active');
          }
          break;

        case currentArrBoard = codeKeyboardLowerRu:
          document.querySelectorAll('.k-key').forEach((element) => {
            element.remove();
          });
          currentArrBoard = codeKeyboardLowerEng;
          initBoard();

          if (target == 'AltLeft'){
            document.querySelectorAll('.alt-key')[0].classList.add('active')
          }
          else if (target == 'AltRight'){
            document.querySelectorAll('.alt-key')[1].classList.add('active');
          }
          break;

        case currentArrBoard = codeKeyboardUpperEng:
          document.querySelectorAll('.k-key').forEach((element) => {
            element.remove();
          });
          currentArrBoard = codeKeyboardUpperRu;
          initBoard();

          document.querySelectorAll('.letter').forEach((element) => {
            element.classList.add('letter-upper');
          })

          if (target == 'AltLeft'){
            document.querySelectorAll('.alt-key')[0].classList.add('active')
          }
          else if (target == 'AltRight'){
            document.querySelectorAll('.alt-key')[1].classList.add('active');
          }
          break;

        case currentArrBoard = codeKeyboardUpperRu:
          document.querySelectorAll('.k-key').forEach((element) => {
            element.remove();
          });
          currentArrBoard = codeKeyboardUpperEng;
          initBoard();

          document.querySelectorAll('.letter').forEach((element) => {
            element.classList.add('letter-upper');
          })
          
          if (target == 'AltLeft'){
            document.querySelectorAll('.alt-key')[0].classList.add('active')
          }
          else if (target == 'AltRight'){
            document.querySelectorAll('.alt-key')[1].classList.add('active');
          }
          break;
      }
    }
  }
  else{
    area.value += pressSymbol;
  }
}

document.onkeyup = function (event){
  event.preventDefault();
  document.querySelector('.k-key[data="'+ event.code +'"]').classList.remove('active');
  let target = event.code;
  let positionKey = keyKeyboard.indexOf(target);
  let pressSymbol = currentArrBoard[positionKey];

  if (pressSymbol == 'Shift'){
    switch(currentArrBoard){

      case currentArrBoard = codeKeyboardUpperEng:
        document.querySelectorAll('.k-key').forEach((element) => {
          element.remove();
        });
        currentArrBoard = codeKeyboardLowerEng;
        initBoard();
        document.querySelectorAll('.letter').forEach((element) => {
          element.classList.remove('letter-upper');
        })
        break;

      case currentArrBoard = codeKeyboardUpperRu:
        document.querySelectorAll('.k-key').forEach((element) => {
          element.remove();
        });
        currentArrBoard = codeKeyboardLowerRu;
        initBoard();
        document.querySelectorAll('.letter').forEach((element) => {
          element.classList.remove('letter-upper');
        })
        break;
    }
  }
  else if (pressSymbol == 'Control'){
    area.value += '';
    flagChangeLanguage = false;
  }
}


keys.forEach((key) => {
  key.addEventListener('mousedown', function(event){
    key.classList.add('active');

    let target = event.target;
    let pressedButton = target.getAttribute('data');
    let positionKey = keyKeyboard.indexOf(pressedButton);
    let pressSymbol = currentArrBoard[positionKey];
    area.value += pressSymbol;

  })
    key.addEventListener('mouseup', function(){
    key.classList.remove('active');
  })
})






