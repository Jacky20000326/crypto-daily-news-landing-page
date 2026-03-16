"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function FooterSection() {
  return (
    <Box component="footer" sx={{ py: { xs: 5, md: 12 } }}>
      <Container maxWidth="md">
        <Divider sx={{ mb: { xs: 4, md: 6 }, borderColor: "rgba(148, 163, 184, 0.06)" }} />

        <Stack spacing={1.5} sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              fontSize: { xs: "0.875rem", md: "0.95rem" },
              letterSpacing: "0.03em",
            }}
          >
            新聞來源
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ lineHeight: { xs: 1.7, md: 1.85 }, opacity: 0.7, fontSize: { xs: "0.8rem", md: "0.9rem" } }}
          >
            系統每天從多個國際知名新聞來源同步收集，涵蓋全球新聞聚合平台與加密貨幣專業媒體，確保資訊來源多元、覆蓋面廣。即使某個來源暫時無法取得，其他來源仍會正常運作。
          </Typography>
        </Stack>

        <Box
          sx={{
            p: { xs: 2.5, md: 3 },
            borderRadius: "16px",
            border: "1px solid rgba(245, 158, 11, 0.1)",
            bgcolor: "rgba(245, 158, 11, 0.02)",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            color="text.secondary"
            sx={{ lineHeight: { xs: 1.7, md: 1.85 }, fontSize: { xs: "0.8rem", md: "0.875rem" } }}
          >
            本系統產出的新聞分析報告僅供資訊參考，不構成任何投資建議。加密貨幣市場具有高度波動性與風險，請讀者自行評估並承擔投資決策之責任。
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={{ xs: 1.5, sm: 0 }}
          sx={{ opacity: 0.4 }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: "6px",
                background: "linear-gradient(135deg, #F7931A, #D97706)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.5rem",
                fontWeight: 800,
                color: "#0A0E17",
              }}
            >
              CD
            </Box>
            <Typography
              color="text.secondary"
              sx={{ fontSize: "0.8rem" }}
            >
              Crypto Daily News
            </Typography>
          </Stack>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "0.8rem" }}
          >
            {new Date().getFullYear()}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
