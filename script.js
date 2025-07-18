let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let link = document.createElement('a');
let title = document.createElement('p');
let j = document.getElementById("j");
let h = document.createElement('h1')
let txt2 = document.createTextNode("You are stupid!");
let txt = document.createTextNode("Click here!");
let txt1 = document.createTextNode("You are stupid!");
let code = document.createElement('h1');
let hacker = document.createTextNode("0101010111010101010101010");
let codep = document.createElement('h1');
let hackerp = document.createTextNode("01010101110101010");
let codei = document.createElement('h1');
let hackeri = document.createTextNode("01010101110101010");
let div = document.getElementById("divaya")
code.appendChild(hacker)
codep.appendChild(hackerp)
codei.appendChild(hackeri)
h.appendChild(txt2)
title.appendChild(txt)
link.setAttribute('href', 'stupid.html');
link.appendChild(title)
link.style.color = '#333';
h.style.alignItems = 'center';
h.style.textAlign = 'center';
h.style.fontStyle = 'italic';
h.style.cursor = 'pointer';
h.setAttribute('class', 'text');
code.style.textAlign = 'center';
codep.style.textAlign = 'center';
codei.style.textAlign = 'center';


// cards

function card() {
    let cardContainer = document.createElement('div');
    let container = document.getElementById('container');
    let cardTitle = document.createElement('h1');
    let textitle = document.createTextNode('Dark web');
    let textpar = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium!');
    let cardDisc = document.createElement('p');
    cardTitle.appendChild(textitle);
    cardDisc.appendChild(textpar);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardDisc);
    container.appendChild(cardContainer);
    document.body.appendChild(container);
    cardContainer.style.background = 'rgba(255, 255, 255, 0.5)';
    cardContainer.style.backdropFilter = 'blur(19px);';
    cardContainer.style.margin = '10px';
    cardContainer.style.justifyContent = 'center';
    cardContainer.style.alignItems = 'center';
    cardContainer.style.textAlign = 'center';
    cardContainer.style.borderRadius = '15px';
    cardContainer.style.padding = '15px';
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.textAlign = 'center';
    container.style.margin = '50px';
}
for (let i = 0; i < 4; i++) {
    card();
}



// conditions
if (localStorage.length > 0) {
    inp.value = localStorage.getItem('name');
}
inp.onkeyup = function () {
    localStorage.setItem('name', inp.value);
}
btn.onclick = function () {
    if (localStorage.name == '<dark>black-hack<dark/>') {
        div.style.display = 'none';
        container.style.display = 'none';
        alert("Ooops! the website has been hacked!");
        function vul(){
            document.body.appendChild(code)
            document.body.appendChild(codep)
            document.body.appendChild(codei)
        }
        vul()
    } else if (localStorage.name == "") {
        j.removeChild(txt1);
        div.removeChild(link);
        div.removeChild(h)
    } else if (localStorage.name != "") {
        j.appendChild(txt1);
        div.appendChild(link);
        div.appendChild(h)
    }
}










