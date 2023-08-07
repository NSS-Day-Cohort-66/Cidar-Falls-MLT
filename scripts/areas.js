import {
  getAreas,
  getServices,
  getParkServices,
  getGuests,
} from "./database.js";

const areas = getAreas();
const parkServices = getParkServices();
const services = getServices();
const guests = getGuests();

export const AreaList = () => {
  let areaHTML = `<div class="area_list">`;
  for (const area of areas) {
    areaHTML += `<div id="area_card">
                    <h2 data-id="${area.id}"
                     data-type="area">${area.name}</h2>`;
    for (const service of parkServices) {
      for (const specificService of services) {
        if (
          service.areaId === area.id &&
          service.serviceId === specificService.id
        ) {
          areaHTML += `<li>${specificService.name}</li>`;
        }
      }
    }
    areaHTML += `</div>`;
  }
  areaHTML += `</div>`;
  return areaHTML;
};

document.addEventListener("click", (areaClick) => {
  const clickedArea = areaClick.target;
  if (clickedArea.dataset.type === "area") {
    let counter = 0;
    for (const guest of guests) {
      if (guest.areaId === parseInt(clickedArea.dataset.id)) {
        counter++;
      }
    }
    if (counter == 0) {
      window.alert(`There are no guests in this area`);
    } else if (counter == 1) {
      window.alert(`There is ${counter} guest in this area`);
    } else {
      window.alert(`There are ${counter} guests in this area`);
    }
  }
});
