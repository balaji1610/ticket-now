"use client";
import { useUserContext } from "@/app/context/userContext";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Logout() {
  const { currentUser } = useUserContext();
  const pathname = usePathname();
  const router = useRouter();

  const avatarName = currentUser.username.split("@")[0];
  const avater = currentUser.username.at(0)?.toUpperCase();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    router.push("./");
  };

  return (
    <div>
      {" "}
      <Box
        sx={{
          borderBottom: "1px solid gray",
          width: "100%",
          height: "3rem",
          backgroundColor: "#444444",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <Grid container spacing={1}>
          <Grid size={2}></Grid>
          <Grid size={6}></Grid>
          <Grid size={4}>
            <Stack
              direction="row"
              sx={{
                justifyContent: "flex-end",
              }}
              spacing={2}
            >
              <Avatar>{avater}</Avatar>

              <Box sx={{ marginTop: "8px !important" }}>
                {" "}
                {avatarName.toUpperCase()}
              </Box>
              <Box sx={{ marginLeft: "10px" }}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <KeyboardArrowUpIcon sx={{ color: "gray" }} />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
