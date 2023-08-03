const database = {
    areas: [],
    guests: [],
    parkServices: [],
    services: [],
}

export const areas = () => {
    return structuredClone(database.areas)
}
export const guests = () => {
    return structuredClone(database.guests)
}
export const parkServices = () => {
    return structuredClone(database.parkServices)
}
export const services = () => {
    return structuredClone(database.services)
}