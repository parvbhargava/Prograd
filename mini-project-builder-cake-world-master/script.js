/*Fill your code */
var flavours = {
    Chocolate: 300,
    Strawberry: 100,
    Butterscotch: 200,
    Vanilla: 250,
    Redvelvet: 350,
};
var state = {
    Chocolate: true,
    Strawberry: true,
    Butterscotch: true,
    Vanilla: true,
    Redvelvet: true,
};

var a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    count = 0,
    total = 0;

function renderChocolate() {
    let chocobtn = document.querySelector(".btn-chocolate");
    if (state.Chocolate) {
        count += 1;
        a = count;
        document.querySelector(`#layer${count}`).style.display = "block";
        document.querySelector(`#layer${count}`).style.backgroundColor =
            "brown";
        chocobtn.style.padding = "20px";
        document.getElementById("item1").style.display = "block";
        total += flavours.Chocolate;
    } else {
        document.querySelector(`#layer${a}`).style.display = "none";
        chocobtn.style.padding = "5px";
        document.getElementById("item1").style.display = "none";
        count -= 1;
        total -= flavours.Chocolate;
    }
}
function renderStrawberry() {
    let strbtn = document.querySelector(".btn-strawberry");
    if (state.Strawberry) {
        count += 1;
        b = count;
        document.querySelector(`#layer${count}`).style.display = "block";
        document.querySelector(`#layer${count}`).style.backgroundColor = "pink";
        strbtn.style.padding = "20px";
        document.getElementById("item2").style.display = "block";
        total += flavours.Strawberry;
    } else {
        document.querySelector(`#layer${b}`).style.display = "none";
        strbtn.style.padding = "5px";
        document.getElementById("item2").style.display = "none";
        count -= 1;
        total -= flavours.Strawberry;
    }
}
function renderButterscotch() {
    let btsbtn = document.querySelector(".btn-butterscotch");
    if (state.Butterscotch) {
        count += 1;
        c = count;
        document.querySelector(`#layer${count}`).style.display = "block";
        document.querySelector(`#layer${count}`).style.backgroundColor =
            "yellow";
        btsbtn.style.padding = "20px";
        document.getElementById("item3").style.display = "block";
        total += flavours.Butterscotch;
    } else {
        document.querySelector(`#layer${c}`).style.display = "none";
        btsbtn.style.padding = "5px";
        document.getElementById("item3").style.display = "none";
        count -= 1;
        total -= flavours.Butterscotch;
    }
}
function renderVanilla() {
    let vanbtn = document.querySelector(".btn-vanilla");
    if (state.Vanilla) {
        count += 1;
        d = count;
        document.querySelector(`#layer${count}`).style.display = "block";
        document.querySelector(`#layer${count}`).style.backgroundColor =
            "white";
        vanbtn.style.padding = "20px";
        document.getElementById("item4").style.display = "block";
        total += flavours.Vanilla;
    } else {
        document.querySelector(`#layer${d}`).style.display = "none";
        vanbtn.style.padding = "5px";
        document.getElementById("item4").style.display = "none";
        count -= 1;
        total -= flavours.Vanilla;
    }
}
function renderRedvelvet() {
    let revbtn = document.querySelector(".btn-redvelvet");
    if (state.Redvelvet) {
        count += 1;
        e = count;
        document.querySelector(`#layer${count}`).style.display = "block";
        document.querySelector(`#layer${count}`).style.backgroundColor = "red";
        revbtn.style.padding = "20px";
        document.getElementById("item5").style.display = "block";
        total += flavours.Redvelvet;
    } else {
        document.querySelector(`#layer${e}`).style.display = "none";
        revbtn.style.padding = "5px";
        document.getElementById("item5").style.display = "none";
        count -= 1;
        total -= flavours.Redvelvet;
    }
}
document.querySelector(".btn-chocolate").onclick = function () {
    renderChocolate();
    state.Chocolate = !state.Chocolate;
};
document.querySelector(".btn-strawberry").onclick = function () {
    renderStrawberry();
    state.Strawberry = !state.Strawberry;
};
document.querySelector(".btn-butterscotch").onclick = function () {
    renderButterscotch();
    state.Butterscotch = !state.Butterscotch;
};
document.querySelector(".btn-vanilla").onclick = function () {
    renderVanilla();
    state.Vanilla = !state.Vanilla;
};
document.querySelector(".btn-redvelvet").onclick = function () {
    renderRedvelvet();
    state.Redvelvet = !state.Redvelvet;
};
document.querySelector(".btn-buy").onclick = function () {
    document.getElementById("item6").innerHTML =
        "Total -------------------------- " + total;
    document.getElementById("candle").style.display = "block";
};