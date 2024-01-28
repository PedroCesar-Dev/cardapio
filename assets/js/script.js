function changeArray() {
    const selectedValue = document.getElementById("dropdown").value;
    const fieldset = document.getElementById("dynamicContentFieldset");
  
    fieldset.innerHTML = "";
  
    let selectedArrayList;
    if (selectedValue === "1") 
    {
      selectedArrayList = arrayList1;
    } 
    else if (selectedValue === "2") 
    {
      selectedArrayList = arrayList2;
    } 
    else if (selectedValue === "3") 
    {
      selectedArrayList = arrayList3;
    }
    else if (selectedValue === "4") 
    {
        selectedArrayList = arrayList4;
    }
    createElementsInFieldset(selectedArrayList);
}

function createElementsInFieldset(arrayList) {

    const fieldset = document.getElementById("dynamicContentFieldset");
  
    arrayList.forEach((item) => {
    
      const itemDiv = document.createElement("div");
  
      const nameSpan = document.createElement("span");
      nameSpan.textContent = item.name;
  
      nameSpan.addEventListener("mouseover", () => {
        showTooltip(item.img);
      });
  
      nameSpan.addEventListener("mouseout", () => {
        removeTooltip();
      });
  
      itemDiv.appendChild(nameSpan);
  
      const priceSpan = document.createElement("span");
      priceSpan.textContent = item.price;
  
      itemDiv.appendChild(priceSpan);
  
      fieldset.appendChild(itemDiv);
    });
}
  
function showTooltip(imageUrl) {

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");

    const image = document.createElement("img");
    image.src = imageUrl;

    tooltip.appendChild(image);

    document.body.appendChild(tooltip);
}

function removeTooltip() {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
}
  