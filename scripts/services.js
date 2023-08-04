import { getServices } from "./database.js";

const services = getServices()

export const ServicesList = () => {
    let serviceHTML = `<ul>`
    for (const service of services) {
        serviceHTML += `<li>${service.name}</li>`
    }
    return serviceHTML
}