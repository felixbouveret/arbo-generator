//Write code here
const blocks = document.querySelectorAll(".rootArbo li");
const lists = document.querySelectorAll(".rootArbo ul");
let listItems = [];

lists.forEach((list) => {
  let items = list.children;
  listItems.push({body:list, children: items });
});

listItems.forEach(list => {
  const listBodyPosition = list.body.getBoundingClientRect()
  // console.log(listBodyPosition)

  for (let itemIndex = 1; itemIndex <= list.children.length; itemIndex++) {
    const item = list.children[itemIndex -1]

    const listItemPosition = item.getBoundingClientRect()

    const svgBoxWidth = listBodyPosition.width - listItemPosition.width + 8
    const svgBoxHeigth = listBodyPosition.height /2 - listItemPosition.height /2
    // const svgBoxTop = listBodyPosition.top + (listItemPosition.height /2)  + listItemPosition.height * (itemIndex - 1)
    const svgBoxLeft = listBodyPosition.left
    let svgBoxTop
    
    if(itemIndex < list.children.length/2) {
       svgBoxTop = listBodyPosition.top + (listItemPosition.height /2) + listItemPosition.top - listBodyPosition.top
    } else {
       svgBoxTop = listBodyPosition.top - (listItemPosition.height /2) + listItemPosition.top - listBodyPosition.top
    }

    console.log(listItemPosition.top)

    let svgBox = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    svgBox.setAttribute("position", "absolute");
    svgBox.setAttribute("width", svgBoxWidth);
    svgBox.setAttribute("height", svgBoxHeigth);
    svgBox.setAttribute("style", `top: ${svgBoxTop}px; left: ${svgBoxLeft}px`);
    
    item.appendChild(svgBox);

    let viewBox = '0 0 ' + svgBox.getBoundingClientRect().width + ' ' + svgBox.getBoundingClientRect().height
    svgBox.setAttribute('viewBox', viewBox)

    let newLine = document.createElementNS(svgBox, 'line')
      newLine.setAttributeNS(null, 'x1', svgBoxWidth)
      newLine.setAttributeNS(null, 'y1', svgBoxHeigth)
      newLine.setAttributeNS(null, 'x2', 0)
      newLine.setAttributeNS(null, 'y2', 0)
      newLine.setAttributeNS(null, 'style', 'stroke: #FFFFFF; stroke-width: 2')
      svgBox.append(newLine)

    console.log(item)
    console.log(listItemPosition)
  }
});

