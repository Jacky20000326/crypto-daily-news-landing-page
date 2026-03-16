import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GavelIcon from "@mui/icons-material/Gavel";
import MemoryIcon from "@mui/icons-material/Memory";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BrushIcon from "@mui/icons-material/Brush";
import ShieldIcon from "@mui/icons-material/Shield";
import PublicIcon from "@mui/icons-material/Public";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

const categories = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 26 }} />,
    name: "市場行情",
    desc: "幣價走勢、交易量、市值變化",
    color: "#10B981",
  },
  {
    icon: <GavelIcon sx={{ fontSize: 26 }} />,
    name: "監管政策",
    desc: "各國法規、監管動態與態度",
    color: "#EF4444",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 26 }} />,
    name: "技術發展",
    desc: "區塊鏈技術突破、協議升級",
    color: "#3B82F6",
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 26 }} />,
    name: "DeFi",
    desc: "去中心化金融最新動態",
    color: "#8B5CF6",
  },
  {
    icon: <BrushIcon sx={{ fontSize: 26 }} />,
    name: "NFT",
    desc: "NFT 市場趨勢與項目消息",
    color: "#EC4899",
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 26 }} />,
    name: "安全事件",
    desc: "駭客攻擊、漏洞、詐騙警示",
    color: "#F59E0B",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 26 }} />,
    name: "總體經濟",
    desc: "聯準會決策、通膨等宏觀因素",
    color: "#06B6D4",
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 26 }} />,
    name: "交易所動態",
    desc: "營運變動、新幣上架、政策調整",
    color: "#627EEA",
  },
];

export default function CategoriesSection() {
  return (
    <ScrollRevealWrapper>
      <Box
        id="categories"
        component="section"
        sx={{
          py: { xs: 6, md: 16 },
          background:
            "linear-gradient(180deg, rgba(17,24,39,0) 0%, rgba(17,24,39,0.4) 50%, rgba(17,24,39,0) 100%)",
        }}
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
              涵蓋面向
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.75rem", md: "2.75rem" } }}
            >
              8 大新聞分類
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}>
              從市場行情到總體經濟，全面涵蓋加密貨幣世界的各個面向
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 1.5, md: 3 }}>
            {categories.map((cat, index) => (
              <Grid key={cat.name} size={{ xs: 6, sm: 4, md: 3 }}>
                <Paper
                  elevation={0}
                  className="reveal-up"
                  style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
                  sx={{
                    p: { xs: 2, md: 3 },
                    height: "100%",
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "rgba(148, 163, 184, 0.06)",
                    borderRadius: "16px",
                    cursor: "default",
                    "&:hover": {
                      borderColor: `${cat.color}30`,
                      bgcolor: `${cat.color}05`,
                      "& .cat-icon": {
                        transform: "scale(1.1)",
                        color: cat.color,
                      },
                    },
                  }}
                >
                  <Stack spacing={{ xs: 1, md: 1.5 }}>
                    <Box
                      className="cat-icon"
                      sx={{
                        color: `${cat.color}99`,
                        display: "flex",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {cat.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.95rem", md: "1.05rem" } }}>
                      {cat.name}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ lineHeight: { xs: 1.6, md: 1.75 }, fontSize: { xs: "0.8rem", md: "0.9rem" } }}
                    >
                      {cat.desc}
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
