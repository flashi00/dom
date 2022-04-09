const nom = document.getElementById('nom')
const add=document.getElementById('add')

function nomIsValid(name) {
    return /^[A-Z][a-zA-Z]+[\s]{0,1}[a-zA-Z]{0,10}$/.test(name);
}

const inp1 = document.createElement("input");
const err = document.createElement("div");
$(err).addClass("error");

$("#add").click(function(){
const labb = document.createElement("label");
$(labb).attr("for","txt")
$(labb).addClass("form-label")
const bee = document.createElement("b");
$(bee).text("Last name :")

inp1.type="text";
$(inp1).attr("id","txt");
inp1.placeholder = "Last name"

const lab = document.createElement("label");
$(lab).attr("for","dat")
$(lab).addClass("form-label")
const be = document.createElement("b");
$(be).text("Date :")
const para = document.createElement("input");
para.type="date";
$(para).attr("id","dat")

///Adding all the elements to the div
$(labb).append(bee);
$("#cl").append(labb);
$("#cl").append(inp1);
$("#cl").append(err);
lab.append(be);
$("#cl").append(lab);
$("#cl").append(para);
$("#add").remove();
});


$("#Check").click(function(){
    ///first input
    if (nom.value == '') {
        $(error).text("First name is required");
        $(nom).removeClass("form-control is-valid");
        $(nom).addClass("form-control is-invalid");
    }
    else if(nom.value.length < 4) {
        $(error).text("First name is too short");
        $(nom).removeClass("form-control is-valid");
        $(nom).addClass("form-control is-invalid");
    }
    else if(!nomIsValid(nom.value)) {
            $(error).text("insert a valid name")
            $(nom).removeClass("form-control is-valid");
            $(nom).addClass("form-control is-invalid");
        }
    else
    {
        $(nom).removeClass("form-control is-invalid");
        $(nom).addClass("form-control is-valid");
        
        $(error).text('');
    }

    ///second input
    if (inp1.value == '') {
        $(err).text("Last name is required");
        $(inp1).removeClass("form-control is-valid");
        $(inp1).addClass("form-control is-invalid");
    }
    else if(inp1.value.length < 4) {
        $(err).text("Last name is too short");
        $(inp1).removeClass("form-control is-valid");
        $(inp1).addClass("form-control is-invalid");
    }
    else if(!nomIsValid(inp1.value)) {
            $(err).text("insert a valid name")
            $(inp1).removeClass("form-control is-valid");
            $(inp1).addClass("form-control is-invalid");
        }
    else
    {
        $(inp1).removeClass("form-control is-invalid");
        $(inp1).addClass("form-control is-valid");
        
        $(err).text('');
    }
});
