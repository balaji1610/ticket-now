"use client";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import GridViewIcon from "@mui/icons-material/GridView";
import EqualizerIcon from "@mui/icons-material/Equalizer";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleOnRouting = (currentRoute: string) => {
    const routering: {
      [x: string]: string;
    } = {
      Dashboard: "",
      Analytics: "",
    };
    router.push(routering[currentRoute as string]);
  };

  const Sidebar = (
    <Box sx={{ width: 250 }}>
      <div
        onClick={closeSidebar}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: "17px",
          height: "4rem",
          cursor: "pointer",
          pointerEvents: "auto",
        }}
      >
        <CloseIcon fontSize="medium" sx={{ color: "#808080ba" }} />
      </div>
      <Divider />
      <div>
        {" "}
        <List>
          {["Dashboard", "Analytics"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton
                sx={{ height: "3rem" }}
                onClick={() => handleOnRouting(text)}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <GridViewIcon /> : <EqualizerIcon />}
                </ListItemIcon>
                <p style={{ fontWeight: "600" }}>{text}</p>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      <Box
        sx={{
          display: "flex",
          height: "50vh",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Box>
          {" "}
          <List>
            <ListItem>
              <ListItemButton
                sx={{ height: "2rem" }}
                onClick={() => router.push("/admin")}
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <p style={{ fontWeight: "600" }}>Logout</p>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
  return (
    <div>
      {" "}
      <MenuRoundedIcon
        fontSize="large"
        sx={{ cursor: "pointer", pointerEvents: "auto" }}
        onClick={openSidebar}
      />
      <Drawer open={isOpen} onClose={closeSidebar}>
        {Sidebar}
      </Drawer>
    </div>
  );
}
