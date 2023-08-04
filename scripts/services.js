import { getServices } from "./database.js";

const services = getServices()

export const ServicesList = () => {
    let servicesArray = []
    for (const service of services) {
        servicesArray.push(service.name)
    }
    const commaArray = servicesArray.join(", ")
    const serviceHTML = `<ul>${commaArray}!</ul>`
    return serviceHTML
}