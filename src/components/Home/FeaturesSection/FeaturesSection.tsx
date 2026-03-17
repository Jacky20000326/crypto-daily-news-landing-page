import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import ScrollRevealWrapper from "../ScrollRevealWrapper/ScrollRevealWrapper";

const features = [
  {
    title: "重要度評分",
    value: "1-10",
    unit: "分",
    description:
      "每則新聞自動評分，一眼看出哪些最值得關注。高分新聞優先呈現，不浪費你的時間。",
    accent: "#F7931A",
  },
  {
    title: "自動分類",
    value: "8",
    unit: "大類別",
    description:
      "市場行情、監管政策、技術發展、DeFi 等，依主題自動歸類，快速找到你關心的領域。",
    accent: "#627EEA",
  },
  {
    title: "情緒判讀",
    indicators: [
      { label: "正面", symbol: "\u2191", color: "#10B981" },
      { label: "中性", symbol: "\u2194", color: "#94A3B8" },
      { label: "負面", symbol: "\u2193", color: "#EF4444" },
    ],
    description: "每則新聞標示市場情緒方向，直覺掌握當日市場氛圍走向。",
    accent: "#10B981",
  },
  {
    title: "中文摘要",
    value: "AI",
    unit: "撰寫",
    description:
      "精選新聞附上 AI 撰寫的繁體中文重點摘要，不用讀英文原文也能快速理解。",
    accent: "#8B5CF6",
  },
  {
    title: "深度分析",
    value: "400-600",
    unit: "字解讀",
    description:
      "最重要的 6 則新聞提供深入解讀，幫你理解事件的來龍去脈與潛在影響。",
    accent: "#EC4899",
  },
  {
    title: "智慧去重",
    value: "0",
    unit: "重複",
    description:
      "自動辨識不同媒體的重複報導，確保你看到的每一則都是不同的資訊。",
    accent: "#06B6D4",
  },
];

export default function FeaturesSection() {
  return (
    <ScrollRevealWrapper>
      <Box
        id="features"
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
              智慧分析
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.75rem", md: "2.75rem" } }}
            >
              AI 幫你讀新聞、抓重點
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" } }}
            >
              每天數十上百則加密貨幣新聞，哪些值得看？讓 AI 幫你判斷
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {features.map((feature, index) => (
              <Grid key={feature.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Paper
                  elevation={0}
                  className="reveal-up"
                  style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
                  sx={{
                    p: { xs: 2.5, md: 3.5 },
                    height: "100%",
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "rgba(148, 163, 184, 0.06)",
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      borderColor: `${feature.accent}25`,
                      "& .feature-value": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  <Stack spacing={2}>
                    <Box sx={{ pb: 0.5 }}>
                      {feature.indicators ? (
                        <Stack direction="row" spacing={2}>
                          {feature.indicators.map((ind) => (
                            <Stack
                              key={ind.label}
                              direction="row"
                              spacing={0.75}
                              alignItems="center"
                            >
                              <Typography
                                sx={{
                                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                                  fontWeight: 700,
                                  color: ind.color,
                                  lineHeight: 1,
                                }}
                              >
                                {ind.symbol}
                              </Typography>
                              <Typography
                                sx={{
                                  color: ind.color,
                                  opacity: 0.8,
                                  fontSize: "0.85rem",
                                }}
                              >
                                {ind.label}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      ) : (
                        <Stack
                          direction="row"
                          spacing={0.75}
                          alignItems="baseline"
                        >
                          <Typography
                            className="feature-value"
                            sx={{
                              fontSize: { xs: "1.75rem", md: "2rem" },
                              fontWeight: 700,
                              color: feature.accent,
                              lineHeight: 1,
                              transition: "transform 0.3s ease",
                              fontFamily: '"DM Mono", monospace',
                            }}
                          >
                            {feature.value}
                          </Typography>
                          <Typography
                            sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                          >
                            {feature.unit}
                          </Typography>
                        </Stack>
                      )}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: { xs: "1rem", md: "1.15rem" } }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        lineHeight: { xs: 1.7, md: 1.85 },
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                      }}
                    >
                      {feature.description}
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
