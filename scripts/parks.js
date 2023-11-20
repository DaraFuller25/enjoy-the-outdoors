"use strict"
window.onload = function (_event) {
    const locationDropDown = document.getElementById("dropDownLocation")
    locationDropDown.onchange = renderDDL
    populateLocationDropDownCat(locationsArray, locationDropDown)
     

    const catPark = document.getElementById("dropDownParkCat")
    catPark.onchange = renderDDL
    parkCat(parkTypesArray, catPark)  
    

    const allParks = document.getElementById("dropDownAllParks")
    allParks.onchange = renderDDL
    allParksDropDown(nationalParksArray, allParks)  
    
}

function populateLocationDropDownCat(locationsArray, locationDropDown) {
    let html = "<options>Pick A Park </options>"
    for (let index = 0; index < locationsArray.length; index += 1) {
        const parkLocation = locationsArray[index];
        html += `<option value="${parkLocation}">${parkLocation}</option>`
        
    }
    locationDropDown.innerHTML = html
}

function parkCat(parkTypesArray, dropDownParkCat) {
    let html = "<options>Pick A Park </options>"
    for (let index = 0; index < parkTypesArray.length; index += 1) {
        const parkLocations = parkTypesArray[index];
        html += `<option value="${parkLocations}">${parkLocations}</option>`
        
    }
    dropDownParkCat.innerHTML = html
}


function allParksDropDown(nationalParksArray, dropDownAllParks) {
    let html = "<options>Pick A Park </options>"
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const parkLocationss = nationalParksArray[index];
        html += `<option value="${parkLocationss.LocationName}">${parkLocationss.LocationName}</option>`
        
    }

    dropDownAllParks.innerHTML = html
}


function renderDDL(event) {
    const renderMount = event.target.value
    let html = ""
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const parks = nationalParksArray[index]
        if (parks.State === renderMount) {
            html += `<div class="card" styles "width: 18rem;">
            <img src="/data/images/${parks.img}" class="card-img-top" alt="">
        <div class="card-body">
            <p class="card-text">
          <p><strong> LocationName: </strong> ${parks.LocationName}</p>
            <p><strong> Address: </strong> ${parks.Address}</p>
            <p><strong> CITY:</strong>${parks.City}</p>
            <p><strong> State: </strong> ${parks.State}</p>
            <p><strong> Zipcode: </strong> ${parks.ZipCode}</p>
            <p><strong> Phone:</strong>${parks.Phone}</p>
            <p><strong> Fax: </strong> ${parks.Fax}</p>
            <p><strong> Latitude: </strong> ${parks.Latitude}</p>
            <p><strong> Longitude:</strong>${parks.Longitude}</p>
            </div>
            </div>
            `
            

        } if(parks.LocationName.includes(renderMount) === true){
            html += `<div class="card" styles "width: 18rem;">
            <img src="/data/images/${parks.img}" class="card-img-top" alt="">
        <div class="card-body">
            <p class="card-text">
          <p><strong> LocationName: </strong> ${parks.LocationName}</p>
            <p><strong> Address: </strong> ${parks.Address}</p>
            <p><strong> CITY:</strong>${parks.City}</p>
            <p><strong> State: </strong> ${parks.State}</p>
            <p><strong> Zipcode: </strong> ${parks.ZipCode}</p>
            <p><strong> Phone:</strong>${parks.Phone}</p>
            <p><strong> Fax: </strong> ${parks.Fax}</p>
            <p><strong> Latitude: </strong> ${parks.Latitude}</p>
            <p><strong> Longitude:</strong>${parks.Longitude}</p>
            </div>
            </div>
            `
            
        }
            const parksPage = document.getElementById("parkType")
        parksPage.innerHTML = html

        
    }
    }
