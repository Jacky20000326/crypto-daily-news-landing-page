"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        pt: 1,
        width: "100%",
        maxWidth: 480,
        animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.45s both",
      }}
    >
      {!submitted ? (
        <Box
          component="form"
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            handleSubscribe();
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            p: "5px",
            borderRadius: "16px",
            border: "1px solid rgba(148,163,184,0.12)",
            bgcolor: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
            transition: "all 0.3s ease",
            "&:focus-within": {
              borderColor: "rgba(247, 147, 26, 0.4)",
              boxShadow: "0 0 0 3px rgba(247,147,26,0.08)",
              bgcolor: "rgba(255,255,255,0.05)",
            },
          }}
        >
          <InputBase
            type="email"
            placeholder="輸入你的 Gmail 信箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              flex: 1,
              px: 2,
              py: 0.5,
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "text.primary",
              "& input::placeholder": {
                color: "rgba(148,163,184,0.5)",
                opacity: 1,
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              minWidth: { xs: "auto", sm: 130 },
              px: { xs: 2, sm: 3 },
              py: { xs: 1.2, md: 1.4 },
              borderRadius: "12px",
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              background:
                "linear-gradient(135deg, #F7931A 0%, #D97706 100%)",
              boxShadow: "0 4px 20px rgba(247, 147, 26, 0.3)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              whiteSpace: "nowrap",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #FBBF24 0%, #F7931A 100%)",
                boxShadow: "0 6px 28px rgba(247, 147, 26, 0.4)",
                transform: "translateY(-1px)",
              },
            }}
            endIcon={
              <ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />
            }
          >
            免費訂閱
          </Button>
        </Box>
      ) : (
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{
            py: 1.8,
            px: 3,
            borderRadius: "16px",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            bgcolor: "rgba(16, 185, 129, 0.06)",
            animation: "fadeIn 0.4s ease both",
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ color: "#10B981", fontSize: 22 }}
          />
          <Typography
            sx={{
              color: "#10B981",
              fontWeight: 500,
              fontSize: "0.95rem",
            }}
          >
            訂閱成功！明天早上見 ☀️
          </Typography>
        </Stack>
      )}

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "0.78rem",
          mt: 1.5,
          opacity: 0.6,
          letterSpacing: "0.01em",
        }}
      >
        免費使用 · 每日一封 · 隨時取消
      </Typography>
    </Box>
  );
}
