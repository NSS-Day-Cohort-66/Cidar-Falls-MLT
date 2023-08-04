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
  let areaHTML = `<div id="area_card">`;
  for (const area of areas) {
    areaHTML += `<h2 data-id="${area.id}"
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
    window.alert(`There are ${counter} guests in this area`);
  }
});
