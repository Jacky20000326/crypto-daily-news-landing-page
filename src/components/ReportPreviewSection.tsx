"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reportSections = [
  {
    number: "01",
    title: "市場總覽",
    description:
      "AI 綜合當天所有重要新聞，用 250-300 字告訴你今天發生了什麼、市場情緒偏向，以及需要留意的風險與趨勢。",
  },
  {
    number: "02",
    title: "重點分析",
    description:
      "最重要的 6 則新聞，每則附上 400-600 字深度解讀，幫你理解事件背後的影響與意義。",
  },
  {
    number: "03",
    title: "全部新聞列表",
    description:
      "依重要度排序的完整新聞列表，附有 AI 摘要與情緒標示，確保資訊完整不遺漏。",
  },
  {
    number: "04",
    title: "分類瀏覽",
    description:
      "按主題分類呈現，想找特定領域的新聞更方便，快速定位你關心的資訊。",
  },
];

const importanceLevels = [
  {
    label: "極重要",
    color: "#EF4444",
    bg: "rgba(239, 68, 68, 0.06)",
    borderColor: "rgba(239, 68, 68, 0.15)",
    desc: "不可錯過的重大消息",
  },
  {
    label: "重要",
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.06)",
    borderColor: "rgba(245, 158, 11, 0.15)",
    desc: "值得關注的市場動態",
  },
  {
    label: "一般",
    color: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.06)",
    borderColor: "rgba(59, 130, 246, 0.15)",
    desc: "有空可看的補充資訊",
  },
];

export default function ReportPreviewSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Box
      id="report"
      component="section"
      ref={ref}
      className="dot-grid"
      sx={{ py: { xs: 10, md: 16 } }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={1.5}
          sx={{
            mb: { xs: 5, md: 8 },
            maxWidth: 540,
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
            報告預覽
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}
          >
            報告長什麼樣子
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "1.1rem" }}>
            深色主題設計，色彩編碼標示重要度，重點一目瞭然
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  mb: 0.5,
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.6s ease 0.2s",
                }}
              >
                重要度標示
              </Typography>

              {importanceLevels.map((level, index) => (
                <Paper
                  key={level.label}
                  elevation={0}
                  sx={{
                    p: 2.5,
                    bgcolor: level.bg,
                    border: "1px solid",
                    borderColor: level.borderColor,
                    borderRadius: 3,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.25 + index * 0.1}s`,
                    "&:hover": {
                      borderColor: level.color,
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Chip
                      label={level.label}
                      size="small"
                      sx={{
                        bgcolor: `${level.color}20`,
                        color: level.color,
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        borderRadius: "6px",
                        height: 30,
                        minWidth: 68,
                      }}
                    />
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "0.95rem" }}
                    >
                      {level.desc}
                    </Typography>
                  </Stack>
                </Paper>
              ))}

              <Paper
                elevation={0}
                sx={{
                  mt: 1,
                  p: 3,
                  bgcolor: "#0D1117",
                  border: "1px solid rgba(148, 163, 184, 0.06)",
                  borderRadius: 3,
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.8s ease 0.5s",
                }}
              >
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontFamily: '"DM Mono", monospace',
                    fontSize: "0.8rem",
                    opacity: 0.5,
                    display: "block",
                    mb: 2,
                  }}
                >
                  report-preview.html
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    { score: 9, title: "SEC 批准首檔現貨以太坊 ETF", color: "#EF4444" },
                    { score: 7, title: "比特幣突破 10 萬美元創歷史新高", color: "#F59E0B" },
                    { score: 5, title: "Uniswap V4 正式部署主網", color: "#3B82F6" },
                  ].map((item) => (
                    <Stack
                      key={item.title}
                      direction="row"
                      spacing={1.5}
                      alignItems="center"
                      sx={{
                        pb: 1.5,
                        borderBottom: "1px solid rgba(148, 163, 184, 0.04)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"DM Mono", monospace',
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: item.color,
                          minWidth: 22,
                        }}
                      >
                        {item.score}
                      </Typography>
                      <Typography sx={{ fontSize: "0.95rem", color: "text.primary" }}>
                        {item.title}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  mb: 0.5,
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.6s ease 0.2s",
                }}
              >
                報告架構
              </Typography>

              {reportSections.map((section, index) => (
                <Paper
                  key={section.number}
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "rgba(148, 163, 184, 0.06)",
                    borderRadius: 3,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.1}s`,
                    "&:hover": {
                      borderColor: "rgba(247, 147, 26, 0.15)",
                      "& .section-num": {
                        color: "primary.main",
                      },
                    },
                  }}
                >
                  <Stack direction="row" spacing={2.5}>
                    <Typography
                      className="section-num font-mono"
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "text.secondary",
                        opacity: 0.4,
                        pt: 0.3,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {section.number}
                    </Typography>
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: "1.15rem", mb: 0.75 }}>
                        {section.title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.85, fontSize: "0.95rem" }}
                      >
                        {section.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
