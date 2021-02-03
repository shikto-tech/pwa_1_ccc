//console.log("hello");

var QUI = {
    button: (dt) => {
        var ele = Element("BUTTON", dt.id, ["button"]);
        if (dt.text) { ele.innerHTML = dt.text }
        return ele;
    },
    card: (dt, child) => {
        var ele = Element("DIV", dt.id, ["card"]);
        child.forEach(v => ele.appendChild(v));
        return ele;
    },
    space: (h, w) => {
        return Element("DIV", null, [], { height: (h ? h : "10px"), width: (w ? w : "10px")});
    }
};

function Element(type, id, classNames, style) {
    var ele = document.createElement(type);
    if (id) { ele.id = id }
    if (classNames) { classNames.forEach(v => ele.className += " " + v) }
    //console.log(style);
    if (style) { Object.keys(style).forEach(s => { ele.style[s] = style[s] }) }
    return ele;
}

function AddElements(elements, parent) {
    var p = parent || document.body;
    elements.forEach(v => { p.appendChild(v) });
};
