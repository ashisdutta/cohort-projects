const btn = document.querySelector(".field-label");
const addBtn = btn.querySelector("button");


const previewDiv = document.querySelector(".preview-div");

addBtn.addEventListener("click", ()=>{
    addingPreview();
})

function addingPreview(){

    const selectEl = document.querySelector("#field-type-options");
    const type = selectEl.value;
    const fieldLabel = document.querySelector(".field-label input")

    const newlabel = document.createElement("label");
    const newDiv = document.createElement("div");


    if(type == "textInput"){
        const newInput = document.createElement("input");
        newlabel.innerText = fieldLabel.value;
        newInput.placeholder = "Enter input";

        newDiv.appendChild(newlabel);
        newDiv.appendChild(newInput);
        previewDiv.appendChild(newDiv);
    }

    else if(type == "checkBox"){
        newlabel.innerText = fieldLabel.value;

        const newCheckBox = document.createElement("input");
        newCheckBox.type = "checkbox";

        newDiv.appendChild(newlabel);
        newDiv.appendChild(newCheckBox);
        previewDiv.appendChild(newDiv);

    }

    else if(type == "radioButton"){
        newlabel.innerText = fieldLabel.value;

        const newRadioBtn = document.createElement("input");
        newRadioBtn.type = "radio";

        newDiv.appendChild(newlabel);
        newDiv.appendChild(newRadioBtn);
        previewDiv.appendChild(newDiv);
    }

}

