import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Skeleton,
} from "@mui/material";

export const createSeatNumber: any = () => {
  const initialSeats = [
    ...Array.from({ length: 10 }, (_, i) => ({
      seatNumber: `A${i + 1}`,
      isBooked: false,
      bookedById: null,
      bookedByUser: null,
    })),
    // ...Array.from({ length: 10 }, (_, i) => ({
    //   seatNumber: `B${i + 1}`,
    //   isBooked: false,
    //   bookedById: null,
    //   bookedByUser: null,
    // })),
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

export const SkeletonTable = () => {
  const rows = 5;
  const columns = 4;
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Table>
        <TableHead>
          <TableRow>
            {Array.from({ length: columns }).map((_, index) => (
              <TableCell key={`header-${index}`}>
                <Skeleton variant="text" width="60%" height={20} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={`row-${rowIndex}`}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={`cell-${rowIndex}-${colIndex}`}>
                  <Skeleton variant="rectangular" height={20} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
