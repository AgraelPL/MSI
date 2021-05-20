function switchColor() {
    var sel = document.getElementById('selectColor');
    var i = sel.selectedIndex;

    switch (sel.options[i].value) {
        case 'zielony':
            sel.style.backgroundColor = 'green';
            sel.style.color = 'white';
            break;

        case 'niebieski':
            sel.style.backgroundColor = 'blue';
            sel.style.color = 'white';
            break;

        case 'szary':
            sel.style.backgroundColor = '#585858';
            sel.style.color = 'white';
            break;

        case 'turkusowy':
            sel.style.backgroundColor = '#30d5c8';
            sel.style.color = 'white';
            break;

        case 'granatowy':
            sel.style.backgroundColor = '#2121a3';
            sel.style.color = 'white';
            break;

        case 'czerwony':
            sel.style.backgroundColor = '#c62e28';
            break;

        case 'bialy':
            sel.style.backgroundColor = '#FFFFFF';
            sel.style.color = 'black';
            break;

        default:
            sel.style.backgroundColor = '#FFFFFF';
            sel.style.color = 'black';
            break;

    }

}