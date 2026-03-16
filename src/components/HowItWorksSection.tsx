"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: <AccessTimeIcon sx={{ fontSize: 30 }} />,
    title: "系統自動執行",
    description:
      "每天早上 9 點（台北時間），系統自動從多個國際新聞來源收集最新加密貨幣資訊，並透過 AI 進行智慧篩選與分析。",
    accent: "#F7931A",
  },
  {
    number: "02",
    icon: <MailOutlineIcon sx={{ fontSize: 30 }} />,
    title: "收到 Email 通知",
    description:
      "一封簡潔的通知信送到你的信箱，列出今天最重要的 10 則新聞標題。30 秒就能快速掌握市場脈動。",
    accent: "#627EEA",
  },
  {
    number: "03",
    icon: <DescriptionOutlinedIcon sx={{ fontSize: 30 }} />,
    title: "閱讀完整報告",
    description:
      "點擊 Email 中的連結，即可閱讀包含深度分析的完整版線上報告。市場總覽、重點解讀、分類瀏覽，一應俱全。",
    accent: "#10B981",
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Box
      id="how-it-works"
      component="section"
      ref={ref}
      className="dot-grid"
      sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 16 } }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={1.5}
          sx={{
            mb: { xs: 5, md: 8 },
            maxWidth: 520,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: "0.15em",
              fontSize: "0.8rem",
            }}
          >
            運作方式
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.75rem", md: "2.75rem" } }}
          >
            打開信箱就好
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
            你完全不需要做任何事，每天三個步驟自動完成
          </Typography>
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 3 }}>
          {steps.map((step, index) => (
            <Paper
              key={step.number}
              elevation={0}
              sx={{
                flex: 1,
                p: { xs: 3, md: 4 },
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "rgba(148, 163, 184, 0.06)",
                borderRadius: "16px",
                position: "relative",
                overflow: "hidden",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 + index * 0.12}s`,
                "&:hover": {
                  borderColor: `${step.accent}30`,
                  bgcolor: `${step.accent}04`,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: `linear-gradient(90deg, ${step.accent}, transparent)`,
                  opacity: 0.5,
                },
              }}
            >
              <Stack spacing={2.5}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography
                    className="font-mono"
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: step.accent,
                      opacity: 0.6,
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Box sx={{ color: step.accent, opacity: 0.8, display: "flex" }}>
                    {step.icon}
                  </Box>
                </Stack>

                <Typography variant="h6" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                  {step.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ lineHeight: { xs: 1.7, md: 1.85 }, fontSize: { xs: "0.875rem", md: "1rem" } }}
                >
                  {step.description}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
