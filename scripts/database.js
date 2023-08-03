const database = {
    areas: [],
    guests: [],
    parkServices: [],
    services: [],
}

export const getAreas = () => {
    return structuredClone(database.areas)
}
export const getGuests = () => {
    return structuredClone(database.guests)
}
export const getParkServices = () => {
    return structuredClone(database.parkServices)
}
export const getServices = () => {
    return structuredClone(database.services)
}