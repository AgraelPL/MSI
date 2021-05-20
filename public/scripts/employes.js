import {colorPicker, colors} from '/clientsServices.js';

const btn1 = document.getElementById('btn_1')
const btn2 = document.getElementById('btn_2')
const tr = document.getElementsByTagName('tr');
const btns = document.getElementsByClassName('picker');

colors(btn1,btn2,tr)
colorPicker(btns,tr,btn1,btn2)








