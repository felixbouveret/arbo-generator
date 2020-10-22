// Create SVG background

var svgNS = "http://www.w3.org/2000/svg";
let arbo = document.querySelector('ul.rootArbo')

let wrapper = document.createElement('div')
wrapper.setAttribute('class', 'arbo-wrapper')

arbo.parentNode.insertBefore(wrapper, arbo)
wrapper.appendChild(arbo)
let viewBox = '0 0 ' + arbo.getBoundingClientRect().width + ' ' + arbo.getBoundingClientRect().height
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

    let newPath = document.createElementNS(svgNS, 'path')
    newPath.setAttributeNS(null, 'd', `M ${x1} ${y1} C ${x1 - 50} ${y1} ${x2 + 50} ${y2} ${x2} ${y2}`)

    container.append(newPath)

  });
}

setSvgBg(svgBg);

window.onresize = () => {

  let windowSize = window.innerWidth;

  if (windowSize < 540) {
    svgBg.innerHTML = "";
    return;
  }

  setSvgBg(svgBg);
}

const zoomElement = document.querySelector('.ag-zoom')

if (zoomElement) {
  let scale = 1

  zoomElement.onwheel = (e) => {
    e.preventDefault();
    if (e.ctrlKey) {
      // Your zoom/scale factor
      // scale -= e.deltaY * 0.01;
      scale -= e.deltaY * 0.01
      if (scale < 0) {
        scale = 0
      }
      arbo.setAttribute('style', `transform: scale(${scale})`)
      svgBg.setAttribute('style', `transform: scale(${scale})`)
    }
  }
}