import { getAreas, getServices, getParkServices } from "./database.js";

const areas = getAreas()
const parkServices = getParkServices()
const services = getServices()

export const AreaList = () => {
  let areaHTML = `<div id="area_card">`
  for (const area of areas) {
    areaHTML += `<h2>${area.name}</h2>`
    for (const service of parkServices) {
        for (const specificService of services) {
            if (service.areaId === area.id && service.serviceId === specificService.id) {
                areaHTML += `<li>${specificService.name}</li>`
                }
            }
        }
    areaHTML += `</div>`
    }
return areaHTML
}
