import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FlipText from "../FlipText/FlipText";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 0 },
        pb: { xs: 6, md: 0 },
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
          background:
            "radial-gradient(circle, rgba(247,147,26,0.06) 0%, transparent 70%)",
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
          background:
            "radial-gradient(circle, rgba(98,126,234,0.04) 0%, transparent 70%)",
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
          maskImage:
            "linear-gradient(to bottom, white 0%, white 50%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, white 0%, white 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={{ xs: 2.5, md: 3.5 }}
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
              borderRadius: "16px",
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
              fontSize: { xs: "2.25rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: 1.15,
              maxWidth: 700,
              color: "text.primary",
              animation:
                "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both",
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
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
              lineHeight: { xs: 1.7, md: 1.85 },
              animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both",
            }}
          >
            每天早上打開信箱，就能收到一份由 AI
            整理好的加密貨幣新聞日報。不用自己逛十幾個網站，不用擔心錯過重要消息。
          </Typography>

          <SubscribeForm />

          {/* Secondary links */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both",
            }}
          >
            <Button
              href="#how-it-works"
              sx={{
                px: 2,
                py: 0.5,
                fontSize: "0.875rem",
                color: "text.secondary",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "transparent",
                },
              }}
            >
              了解運作方式 →
            </Button>
            <Button
              href="#report"
              sx={{
                px: 2,
                py: 0.5,
                fontSize: "0.875rem",
                color: "text.secondary",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "transparent",
                },
              }}
            >
              查看報告範例 →
            </Button>
          </Stack>

          <Box
            sx={{
              pt: { xs: 2, md: 4 },
              display: { xs: "none", md: "block" },
              animation:
                "fadeIn 1s ease 1.2s both, float-gentle 3s ease-in-out infinite 1.2s",
            }}
          >
            <KeyboardArrowDownIcon
              sx={{ fontSize: 24, color: "text.secondary", opacity: 0.4 }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
