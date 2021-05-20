import { wyliczWartosc, wyliczKwoteBrutto, walidacja, color1000 } from '/clientsServices.js'


const inputs = document.getElementsByTagName('input');
const selects = document.getElementsByTagName('select');
const button = document.getElementById('color1000');

wyliczKwoteBrutto(inputs);
wyliczWartosc(selects);
walidacja(inputs);
color1000(button, inputs)











