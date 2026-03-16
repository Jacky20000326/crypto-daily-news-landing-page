import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

const audiences = [
  {
    icon: <ShowChartIcon sx={{ fontSize: 26 }} />,
    title: "加密貨幣投資者",
    description:
      "每天快速掌握市場脈動，不錯過影響投資決策的重要資訊。用最少時間掌握最關鍵的市場變化。",
    accent: "#F7931A",
  },
  {
    icon: <WorkOutlineIcon sx={{ fontSize: 26 }} />,
    title: "區塊鏈從業者",
    description:
      "追蹤產業動態、監管趨勢與技術發展。保持對行業全局的掌握，為工作決策提供依據。",
    accent: "#627EEA",
  },
  {
    icon: <AnalyticsOutlinedIcon sx={{ fontSize: 26 }} />,
    title: "研究人員與分析師",
    description:
      "獲取結構化的每日新聞彙整，節省大量資料蒐集時間。系統化的分類與評分讓研究更有效率。",
    accent: "#10B981",
  },
  {
    icon: <ExploreOutlinedIcon sx={{ fontSize: 26 }} />,
    title: "加密貨幣愛好者",
    description:
      "用最少的時間了解這個快速變動的領域。中文摘要降低閱讀門檻，輕鬆跟上市場節奏。",
    accent: "#8B5CF6",
  },
];

export default function AudienceSection() {
  return (
    <ScrollRevealWrapper>
      <Box
        id="audience"
        component="section"
        className="dot-grid"
        sx={{ py: { xs: 6, md: 16 } }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={1.5}
            className="reveal-up"
            sx={{ mb: { xs: 3, md: 8 }, maxWidth: 540 }}
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
              適合對象
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.75rem", md: "2.75rem" } }}
            >
              誰適合使用
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
              無論你的角色是什麼，只要關注加密貨幣，都能從中受益
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {audiences.map((audience, index) => (
              <Grid key={audience.title} size={{ xs: 12, sm: 6 }}>
                <Paper
                  elevation={0}
                  className="reveal-up"
                  style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
                  sx={{
                    p: { xs: 2.5, md: 4 },
                    height: "100%",
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "rgba(148, 163, 184, 0.06)",
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      borderColor: `${audience.accent}20`,
                      "& .audience-icon-bg": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Stack spacing={{ xs: 2, md: 2.5 }}>
                    <Box
                      className="audience-icon-bg"
                      sx={{
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        borderRadius: { xs: "12px", md: "14px" },
                        bgcolor: `${audience.accent}0A`,
                        border: "1px solid",
                        borderColor: `${audience.accent}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: audience.accent,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {audience.icon}
                    </Box>

                    <Typography variant="h6" sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" } }}>
                      {audience.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{ lineHeight: { xs: 1.7, md: 1.85 }, fontSize: { xs: "0.875rem", md: "1rem" } }}
                    >
                      {audience.description}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ScrollRevealWrapper>
  );
}
