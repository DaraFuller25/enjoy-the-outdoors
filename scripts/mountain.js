"use strict"
window.onload = function (_event) {
    const mtCaterogy = document.getElementById("mtSelect")
    mtCaterogy.onchange = renderMtCard
    populateMtCaterogy(mountainsArray, mtCaterogy)
    
}

function populateMtCaterogy(mountainsArray, mtSelect) {
    let html = "<options>Pick A Moutain </options>"
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mount = mountainsArray[index];
        html += `<option value="${mount.name}">${mount.name}</option>`
        
    }
    mtSelect.innerHTML = html
}

function renderMtCard(event) {
    const renderMount = event.target.value
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mounts = mountainsArray[index]
        if (mounts.name === renderMount) {
            html += `<div class="card" styles "width: 18rem;">
        <img src="/data/images/${mounts.img}" class="card-img-top" alt="">
    <div class="card-body">
        <p class="card-text">
      <p><strong> Effort: </strong> ${mounts.effort}</p>
        <p><strong> Name: </strong> ${mounts.name}</p>
        <p><strong> Description:</strong>${mounts.desc}</p>
        </div>
        </div>
        `
        
        }
        const moutainPage = document.getElementById("mtDiv")
        moutainPage.innerHTML = html

        
    }
}
