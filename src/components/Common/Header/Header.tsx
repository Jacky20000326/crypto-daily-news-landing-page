"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Logo from "../Icon/Logo/Logo";

const navItems = [
  { label: "運作方式", href: "#how-it-works" },
  { label: "智慧分析", href: "#features" },
  { label: "報告預覽", href: "#report" },
  { label: "新聞分類", href: "#categories" },
  { label: "適合對象", href: "#audience" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "rgba(10, 14, 23, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(148, 163, 184, 0.06)"
            : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ gap: 1.5, minHeight: { xs: 56, md: 64 } }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Logo iconOnly size={32} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "text.primary",
                  letterSpacing: "-0.01em",
                }}
              >
                Crypto Daily
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  size="small"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    px: 1.5,
                    borderRadius: "8px",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <IconButton
              sx={{ display: { md: "none" }, color: "text.secondary" }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "#111827",
              width: { xs: "75vw", sm: 260 },
              maxWidth: 260,
              borderLeft: "1px solid rgba(148, 163, 184, 0.06)",
            },
          },
        }}
      >
        <List sx={{ pt: 5 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.label}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              sx={{
                py: 1.5,
                "&:hover": { bgcolor: "rgba(247, 147, 26, 0.05)" },
              }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: { fontWeight: 500, fontSize: "0.95rem" },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
