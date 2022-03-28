const nom = document.getElementById('nom')
const add=document.getElementById('add')

function nomIsValid(name) {
    return /^[A-Z][a-zA-Z]+[\s]{0,1}[a-zA-Z]{0,10}$/.test(name);
}

const inp1 = document.createElement("input");
const err = document.createElement("div");
err.className="error"

function addelem()
{
const labb = document.createElement("label");
labb.setAttribute("for","txt")
labb.className="form-label"
const bee = document.createElement("b");
bee.innerText="Last name :"

inp1.type="text";
inp1.setAttribute("id","txt");
inp1.placeholder = "Last name"

const lab = document.createElement("label");
lab.setAttribute("for","dat")
lab.className="form-label"
const be = document.createElement("b");
be.innerText="Date :"
const para = document.createElement("input");
para.type="date";
para.setAttribute("id","dat")

const element = document.getElementById("cl");

labb.appendChild(bee);
element.appendChild(labb);
element.appendChild(inp1);
element.appendChild(err);
lab.appendChild(be);
element.appendChild(lab);
element.appendChild(para);
add.remove();
}


function verification() {
    ///first input
    if (nom.value == '') {
        error.innerHTML = "First name is required"
        nom.className="form-control is-invalid"
    }
    else if(nom.value.length < 4) {
        error.innerHTML = "First name is too short"
        nom.className="form-control is-invalid"
    }
    else if(!nomIsValid(nom.value)) {
            error.innerHTML = "insert a valid name"
            nom.className="form-control is-invalid"
        }
    else
    {
        nom.className="form-control is-valid"
        error.innerHTML = ''
    }

    ///second input
    if (inp1.value == '') {
        err.innerHTML = "Last name is required"
        inp1.className="form-control is-invalid"
    }
    else if(inp1.value.length < 4) {
        err.innerHTML = "Last name is too short"
        inp1.className="form-control is-invalid"
    }
    else if(!nomIsValid(inp1.value)) {
            err.innerHTML = "insert a valid name"
            inp1.className="form-control is-invalid"
        }
    else
    {
        inp1.className="form-control is-valid"
        err.innerHTML = ''
    }
}