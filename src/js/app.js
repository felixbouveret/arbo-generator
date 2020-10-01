<<<<<<< HEAD
// Create SVG background

var svgNS = "http://www.w3.org/2000/svg";
let arbo = document.querySelector('ul.rootArbo')
console.log(arbo.getBoundingClientRect())

let wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'arbo-wrapper')

    arbo.parentNode.insertBefore(wrapper, arbo)
    wrapper.appendChild(arbo)
let viewBox = '0 0 ' + arbo.getBoundingClientRect().width + ' ' +arbo.getBoundingClientRect().height
let svgBg = document.createElementNS(svgNS, 'svg')
    svgBg.setAttribute('class', 'svg-bg')
    svgBg.setAttribute('viewBox', viewBox)
    svgBg.setAttribute('height', arbo.getBoundingClientRect().height)
    svgBg.setAttribute('width', arbo.getBoundingClientRect().width)

arbo.parentNode.insertBefore(svgBg, arbo)

setSvgBg = (container) => {
    
    container.innerHTML = "";

    let elem = document.querySelectorAll(':not(.rootArbo) > li > *:not(ul)')
    
    elem.forEach((item, i) => {

        let x1 = parseInt((item.getBoundingClientRect().x + window.scrollX - wrapper.offsetLeft));
        let y1 = (item.getBoundingClientRect().y + window.scrollY - wrapper.offsetTop) + item.getBoundingClientRect().height / 2;
    
        let parent = item.parentElement.parentElement.parentElement.firstElementChild

        let x2 = parseInt((parent.getBoundingClientRect().x + window.scrollX - wrapper.offsetLeft) + parent.getBoundingClientRect().width);
        let y2 = (parent.getBoundingClientRect().y + window.scrollY - wrapper.offsetTop) + parent.getBoundingClientRect().height / 2;

    //console.log(x1, y1, ' et ', x2, y2)

    let newLine = document.createElementNS(svgNS, 'line')
        newLine.setAttributeNS(null, 'x1', x1)
        newLine.setAttributeNS(null, 'y1', y1)
        newLine.setAttributeNS(null, 'x2', x2)
        newLine.setAttributeNS(null, 'y2', y2)

    container.append(newLine)

    });
}

setSvgBg(svgBg);

window.onresize = () => {

    let windowSize = window.innerWidth;

    if(windowSize < 540) {
        svgBg.innerHTML = "";
        return;
    }
    
    setSvgBg(svgBg);
}

=======
//Write code here
let hello = "hey";

const blocks = document.querySelectorAll(".rootArbo li");
const lists = document.querySelectorAll(".rootArbo ul");
let listItems = [];
console.log(lists);

lists.forEach((list) => {
  let item = list.children;
  listItems.push(item);
  // let line = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // line.setAttribute("width", "100");
  // line.setAttribute("height", "100");
  // block.appendChild(line);
});
console.log(lists);
console.log(listItems);
>>>>>>> Js app first draft
