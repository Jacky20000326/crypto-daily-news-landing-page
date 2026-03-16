"use client";

import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const items = [
  { text: "加密貨幣", gradient: "linear-gradient(135deg, #F7931A 0%, #FBBF24 50%, #F7931A 100%)" },
  { text: "區塊鏈", gradient: "linear-gradient(135deg, #627EEA 0%, #A78BFA 50%, #627EEA 100%)" },
  { text: "Web3", gradient: "linear-gradient(135deg, #10B981 0%, #34D399 50%, #10B981 100%)" },
  { text: "DeFi", gradient: "linear-gradient(135deg, #E879F9 0%, #F472B6 50%, #E879F9 100%)" },
];

function FlipText() {
  const [index, setIndex] = useState(0);
  const [flipKey, setFlipKey] = useState(0);

  const doFlip = useCallback(() => {
    setFlipKey((prev) => prev + 1);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 350);
  }, []);

  useEffect(() => {
    const timer = setInterval(doFlip, 3000);
    return () => clearInterval(timer);
  }, [doFlip]);

  return (
    <Box
      key={flipKey}
      component="span"
      sx={{
        display: "inline-block",
        background: items[index].gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        transformStyle: "preserve-3d",
        perspective: 800,
        ...(flipKey > 0 && {
          animation: "spin-1x 0.8s ease-in-out",
        }),
        "@keyframes spin-1x": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
      }}
    >
      {items[index].text}
    </Box>
  );
}

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 0 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(247,147,26,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "pulse-ring 8s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(98,126,234,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "pulse-ring 10s ease-in-out infinite 2s",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, white 0%, white 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, white 0%, white 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={3.5}
          alignItems="center"
          textAlign="center"
          sx={{ animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both" }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              px: 2,
              py: 0.75,
              borderRadius: "20px",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              bgcolor: "rgba(16, 185, 129, 0.05)",
              animation: "fadeIn 0.6s ease 0.3s both",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#10B981",
                animation: "pulse-ring 2s ease-in-out infinite",
              }}
            />
            <Typography
              sx={{
                color: "#10B981",
                fontWeight: 500,
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
              }}
            >
              每日 09:00 自動更新
            </Typography>
          </Stack>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.75rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: 1.15,
              maxWidth: 700,
              color: "text.primary",
              animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both",
            }}
          >
            你的
            <FlipText />
            <br />
            新聞助理
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 560,
              fontWeight: 400,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              lineHeight: 1.85,
              animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both",
            }}
          >
            每天早上打開信箱，就能收到一份由 AI
            整理好的加密貨幣新聞日報。不用自己逛十幾個網站，不用擔心錯過重要消息。
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              pt: 1,
              animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.45s both",
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="#how-it-works"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.05rem",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #F7931A 0%, #D97706 100%)",
                boxShadow: "0 4px 24px rgba(247, 147, 26, 0.25)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  background: "linear-gradient(135deg, #FBBF24 0%, #F7931A 100%)",
                  boxShadow: "0 8px 32px rgba(247, 147, 26, 0.35)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              了解運作方式
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#report"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.05rem",
                borderRadius: "12px",
                borderColor: "rgba(148,163,184,0.2)",
                color: "text.secondary",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "rgba(247, 147, 26, 0.4)",
                  color: "primary.main",
                  bgcolor: "rgba(247, 147, 26, 0.03)",
                },
              }}
            >
              查看報告範例
            </Button>
          </Stack>

          <Box
            sx={{
              pt: 6,
              animation: "fadeIn 1s ease 1.2s both, float-gentle 3s ease-in-out infinite 1.2s",
            }}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 24, color: "text.secondary", opacity: 0.4 }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
