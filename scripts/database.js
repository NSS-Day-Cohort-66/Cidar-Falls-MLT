const database = {
  areas: [],
  guests: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      areaId: 1,
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Smith",
      areaId: 2,
    },
    {
      id: 3,
      firstName: "Mohammed",
      lastName: "Khan",
      areaId: 3,
    },
    {
      id: 4,
      firstName: "Sophie",
      lastName: "Martin",
      areaId: 4,
    },
    {
      id: 5,
      firstName: "Michael",
      lastName: "Johnson",
      areaId: 5,
    },
    {
      id: 6,
      firstName: "Elena",
      lastName: "Petrova",
      areaId: 6,
    },
    {
      id: 7,
      firstName: "Hiroshi",
      lastName: "Yamamoto",
      areaId: 1,
    },
    {
      id: 8,
      firstName: "Maria",
      lastName: "Gonzalez",
      areaId: 2,
    },
    {
      id: 9,
      firstName: "Alex",
      lastName: "Andersen",
      areaId: 3,
    },
    {
      id: 10,
      firstName: "Mia",
      lastName: "Nguyen",
      areaId: 4,
    },
    {
      id: 11,
      firstName: "Rahul",
      lastName: "Verma",
      areaId: 5,
    },
    {
      id: 12,
      firstName: "Olga",
      lastName: "Sokolova",
      areaId: 6,
    },
    {
      id: 13,
      firstName: "Samantha",
      lastName: "Johnson",
      areaId: 1,
    },
    {
      id: 14,
      firstName: "Diego",
      lastName: "Lopez",
      areaId: 2,
    },
    {
      id: 15,
      firstName: "Lara",
      lastName: "Silva",
      areaId: 3,
    },
    {
      id: 16,
      firstName: "William",
      lastName: "Brown",
      areaId: 4,
    },
    {
      id: 17,
      firstName: "Aisha",
      lastName: "Khan",
      areaId: 5,
    },
    {
      id: 18,
      firstName: "Luca",
      lastName: "Ricci",
      areaId: 6,
    },
    {
      id: 19,
      firstName: "Emily",
      lastName: "Wang",
      areaId: 1,
    },
    {
      id: 20,
      firstName: "Gabriel",
      lastName: "Fernandez",
      areaId: 2,
    },
  ],
  parkServices: [],
  services: [],
};

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

