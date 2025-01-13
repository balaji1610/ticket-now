import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Skeleton,
} from "@mui/material";
import { useUserContext } from "@/app/context/userContext";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MoodIcon from "@mui/icons-material/Mood";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const createSeatNumber: any = () => {
  const initialSeats = [
    ...Array.from({ length: 10 }, (_, i) => ({
      seatNumber: `A${i + 1}`,
      isBooked: false,
      bookedById: null,
      bookedByUser: null,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
      seatNumber: `B${i + 1}`,
      isBooked: false,
      bookedById: null,
      bookedByUser: null,
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
    label: "comedy",
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

export const EventCategoryIcon = (category: string) => {
  let icon;
  switch (category) {
    case "music":
      icon = <MusicNoteIcon sx={{ color: "#577BC1" }} />;
      break;
    case "comedy":
      icon = <MoodIcon sx={{ color: "#577BC1" }} />;
      break;
    case "workshop":
      icon = <LocalLibraryIcon sx={{ color: "#577BC1" }} />;
      break;
  }
  return icon;
};
