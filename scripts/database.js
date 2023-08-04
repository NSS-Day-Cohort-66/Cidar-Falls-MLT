const database = {
  areas: [
    {
      id: 1,
      name: "Chamfort River",
    },
    {
      id: 2,
      name: "Lost Wolf Hiking Trail",
    },
    {
      id: 3,
      name: "Lodge",
    },
    {
      id: 4,
      name: "Gander River",
    },
    {
      id: 5,
      name: "Campgrounds",
    },
    {
      id: 6,
      name: "Pine Bluffs Trails",
    },
  ],
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
  parkServices: [
    {
      id: 1,
      areaId: 1,
      serviceId: 1,
    },
    {
      id: 1,
      areaId: 1,
      serviceId: 2,
    },
    {
      id: 1,
      areaId: 1,
      serviceId: 3,
    },
    {
      id: 1,
      areaId: 2,
      serviceId: 4,
    },
    {
      id: 1,
      areaId: 2,
      serviceId: 5,
    },
    {
      id: 1,
      areaId: 2,
      serviceId: 6,
    },
    {
      id: 1,
      areaId: 3,
      serviceId: 7,
    },
    {
      id: 1,
      areaId: 3,
      serviceId: 8,
    },
    {
      id: 1,
      areaId: 3,
      serviceId: 9,
    },
    {
      id: 1,
      areaId: 3,
      serviceId: 5,
    },
    {
      id: 1,
      areaId: 4,
      serviceId: 1,
    },
    {
      id: 1,
      areaId: 4,
      serviceId: 3,
    },
    {
      id: 1,
      areaId: 1,
      serviceId: 4,
    },
    {
      id: 1,
      areaId: 5,
      serviceId: 9,
    },
    {
      id: 1,
      areaId: 5,
      serviceId: 7,
    },
    {
      id: 1,
      areaId: 5,
      serviceId: 8,
    },
    {
      id: 1,
      areaId: 6,
      serviceId: 4,
    },
    {
      id: 1,
      areaId: 6,
      serviceId: 5,
    },
    {
      id: 1,
      areaId: 6,
      serviceId: 10,
    },
  ],
  services: [
    {
      id: 1,
      name: "rafting",
    },
    {
      id: 2,
      name: "canoeing",
    },
    {
      id: 3,
      name: "fishing",
    },
    {
      id: 4,
      name: "hiking",
    },
    {
      id: 5,
      name: "picnicking",
    },
    {
      id: 6,
      name: "rock climbing",
    },
    {
      id: 7,
      name: "lodging",
    },
    {
      id: 8,
      name: "parking",
    },
    {
      id: 9,
      name: "information",
    },
    {
      id: 10,
      name: "zip lining",
    },
  ],
};

export const getAreas = () => {
  return structuredClone(database.areas);
};
export const getGuests = () => {
  return structuredClone(database.guests);
};
export const getParkServices = () => {
  return structuredClone(database.parkServices);
};
export const getServices = () => {
  return structuredClone(database.services);
};
