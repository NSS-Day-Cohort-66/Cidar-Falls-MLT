import { getAreas, getParkServices, getServices } from "./database.js";

const services = getServices();

export const ServicesList = () => {
  let serviceHTML = `<ul class="service_list">`;
  for (const service of services) {
    serviceHTML += `<li   class="service_item" 
                          data-id="${service.id}" 
                          data-name="${service.name}"
                          data-type="service">
                          ${service.name}</li>`;
  }
  serviceHTML += `</ul>`;
  return serviceHTML;
};

const parkServices = getParkServices();
const areas = getAreas();

document.addEventListener("click", (serviceClick) => {
  const clickedService = serviceClick.target;
  if (clickedService.dataset.type === "service") {
    let serviceName = clickedService.dataset.name
    serviceName = serviceName.charAt(0).toUpperCase() + serviceName.slice(1)
    let serviceString = `${serviceName} is available in `;
    for (const parkService of parkServices) {
      if (parseInt(clickedService.dataset.id) === parkService.serviceId) {
        for (const area of areas) {
          if (area.id === parkService.areaId) {
            serviceString += `${area.name} and `;
          }
        }
      }
    }
    serviceString = serviceString.slice(0, -5);
    window.alert(serviceString);
  }
});
