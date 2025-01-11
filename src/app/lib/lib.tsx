export const createSeatNumber: any = () => {
  const initialSeats = [
    ...Array.from({ length: 10 }, (_, i) => ({
      seatNumber: `A${i + 1}`,
      isBooked: false,
      bookedById: null,
      bookedByUser: null,
      _id: null,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
      seatNumber: `B${i + 1}`,
      isBooked: false,
      bookedById: null,
      bookedByUser: null,
      _id: null,
    })),
  ];

  return initialSeats;
};

export const CategoryOptions = [
  {
    label: "music",
    value: "music",
  },
  {
    label: "comdey",
    value: "comedy",
  },
  {
    label: "workshop",
    value: "workshop",
  },
];

export const PriceOptions = [
  {
    label: 100,
    value: 100,
  },
  {
    label: 200,
    value: 200,
  },
];
