
// uzyte w public/scripts/invoices.js
export function wyliczWartosc(obj) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].addEventListener('change', (event) => {
      let x = event.target;
      const result = document.getElementsByClassName(x.className);
      let kwotaNetto = result[0].value;
      let ilosc = result[1].value;
      let stawkaVat = x.value;
      result[3].textContent = returnValue(kwotaNetto, 1, stawkaVat) + " PLN";
      result[4].textContent = returnValue(kwotaNetto, ilosc, 1) + " PLN";
      result[5].textContent = returnValue(kwotaNetto, ilosc, stawkaVat) + " PLN";
    })
  }
}
// uzyte w public/scripts/invoices.js
export function color1000(obj, inputs) {
  obj.addEventListener('click', () => {
    for (var i = 0; i < inputs.length; i++) {
      if (i % 2 == 0) {
        if (inputs[i].value > 1000) {
          const row = inputs[i].parentNode.parentNode;
          row.style.backgroundColor = "green";
        }
      }
    }
  })
}
// uzyte w public/scripts/invoices.js
export function wyliczKwoteBrutto(obj) {
  for (var i = 0; i < obj.length; i++) {
    obj[i].onkeyup = (event) => {
      let x = event.target;
      let result = document.getElementsByClassName(x.className);
      let kwotaNetto = result[0].value;
      let ilosc = result[1].value;
      let stawkaVat = result[2].options[result[2].selectedIndex].value;

      result[3].textContent = returnValue(kwotaNetto, 1, stawkaVat) + " PLN";
      result[4].textContent = returnValue(kwotaNetto, ilosc, 1) + " PLN";
      result[5].textContent = returnValue(kwotaNetto, ilosc, stawkaVat) + " PLN";
    }
  }
}
// uzyte w public/scripts/invoices.js
export function walidacja(obj) {
  for (var i = 0; i < obj.length; i++) {
    setInputFilter(obj[i], function (value) {
      return /^-?\d*[.,]?\d{0,2}$/.test(value);
    });
  }
}
// uzyte w public/scripts/client.js
export function showMessage(message) {
  let cbMessage = document.getElementById('calbackMessage')
  var text = document.createTextNode(`${message.msg}`);
  //text.classList.add('cbMessageText')
  cbMessage.appendChild(text);
  setTimeout(() => { cbMessage.innerHTML = '' }, 3000);
}


// uzyte w public/scripts/employes.js
export function colors(btn1,btn2, tr) {
  for (var i = 1; i < tr.length; i++) {
    if (i % 2 != 0) {
      tr[i].style.backgroundColor = btn1.value;
    }
    else {
      tr[i].style.backgroundColor = btn2.value;
    }
  }
}

// uzyte w public/scripts/employes.js
export function colorPicker(btns, tr, btn1, btn2) {
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('change', (event) => {
      let x = event.target;
      if (x.id == "btn_1") {
        for (var j = 1; j < tr.length; j++) {
          if (j % 2 != 0) {
            tr[j].style.backgroundColor = btn1.value;
          }
          else {
            tr[j].style.backgroundColor = btn2.value;
          }
        }
      }
      else {
        for (var j = 1; j < tr.length; j++) {
          if (j % 2 == 0) {
            tr[j].style.backgroundColor = btn2.value;
          }
          else {
            tr[j].style.backgroundColor = btn1.value;
          }
        }
      }
    })
  }
}


export function returnValue(Knetto, Ilosc, Vat) {
  let val = Knetto * Ilosc * Vat;
  let valRounded = Math.round((val + Number.EPSILON) * 100) / 100;

  return valRounded;
}

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup",].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}



