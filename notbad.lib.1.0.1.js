const log = (x) => { this.console.log(x) };
const info = (x) => { this.console.info(x) };
const dir = (x) => { this.console.dir(x) };
const dirXml = (x) => { this.console.dirxml(x) };
const group = (x) => { this.console.group(x) };
const groupEnd = (x) => { this.console.groupEnd(x) };
const timer = (x) => { this.console.time(x) };
const timerEnd = (x) => { this.console.timeEnd(x) };
const trace = () => { this.console.trace() };
//      //         //          //         //        //         //         ---(>
const d = document;
const w = window;
const db = document.body;
//      //         //        //           //       //          //         ---(>
const anim = (x) => requestAnimationFrame(x);
const animOff = (x) => cancelAnimationFrame(x);;

// this function is adding an element to the page
const achild = (x) => { document.body.appendChild(x) };

//  this function add the event listener
const add = (x) => { w + 'addEventListener(' + x + ',' + '=>{})' };

//  this function remove the event listener
const remove = (x) => { w + 'removeEventListener(' + x + ',' + '=>{})' };

// function  to create an element , accepts 5 parameters: 
//element to create, element width, element height, element frame color and id.
function create(elem, id, borderColor, width, height) {
    let el = document.createElement(elem);
    el.style.width = width + 'px';
    el.style.height = height + 'px';
    el.style.border = '1px solid black';
    el.id = id;
    el.style.borderColor = borderColor;
    achild(el);
}

// returns the first element (Element) of the document that matches the specified selector or group of selectors. If no matches are found, returns null.
function _(x) {
    return document.querySelector(x);
}

// returns a static (non-dynamic) NodeList containing all found elements of the document that match the specified selector. 
function _all(x) {
    return document.querySelectorAll(x);
}

function setLocStor(x, y) {
    localStorage.setItem(x, y);
}

function getLocStor(x, y) {
    localStorage.getItem(x, y);
}
