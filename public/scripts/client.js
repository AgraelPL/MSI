import { showMessage} from '/clientsServices.js'

const btn = document.getElementsByTagName('button');
const table = document.getElementById('clientsTable');

let Editvalue = 0;
let Deletevalue = 0;

for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = (event) => {
        let x = event.target;

        switch (x.type) {
            case "submit":
                Editvalue++;
                if (Editvalue == 1) {
                    let arrdata = document.getElementsByClassName(x.className);
                    for (var j = 1; j < arrdata.length; j++) {
                        arrdata[j].disabled = false;
                    }
                    x.textContent = 'OK';
                }
                if (Editvalue == 2) {
                    let arrdata = document.getElementsByClassName(x.className);
                    const body = {
                        NIP: arrdata[0].value,
                        REGON: arrdata[1].value,
                        Nazwa: arrdata[2].value,
                        VAT: arrdata[3].checked,
                        Ulica: arrdata[4].value,
                        NumerDomu: arrdata[5].value,
                        NumerMieszkania: arrdata[6].value,
                    }
                    $.ajax({
                        type: 'POST',
                        url: 'http://localhost:5000/clients/updateClient',
                        contentType: 'application/json',
                        data: JSON.stringify(body), // access in body
                    }).done(function (msg) {
                        showMessage(msg);
                    }).fail(function (msg) {
                        showMessage(msg);
                    });

                    arrdata[0].disabled = true;
                    arrdata[1].disabled = true;
                    arrdata[2].disabled = true;
                    arrdata[3].disabled = true;
                    arrdata[4].disabled = true;
                    arrdata[5].disabled = true;
                    arrdata[6].disabled = true;
                    x.textContent = 'Edytuj';
                    Editvalue = 0;
                }
                break;

            case "button":
                Deletevalue++;

                switch (Deletevalue) {
                    case 1:
                        x.textContent = 'Ok';
                        break;
                    case 2:
                        let arrdata = document.getElementsByClassName(x.className);
                        const body = { NIP: arrdata[0].value }
                        x.textContent = 'Usuń';
                        $.ajax({
                            type: 'POST',
                            url: 'http://localhost:5000/clients/deleteClient',
                            contentType: 'application/json',
                            data: JSON.stringify(body), // access in body
                        }).done(function (msg) {
                            showMessage(msg);
                        }).fail(function (msg) {
                            showMessage(msg);
                        })
                        const row = x.parentNode.parentNode;

                        table.deleteRow(row.rowIndex);

                        Deletevalue = 0;
                        break;
                }

                break;
        }
    }

}





