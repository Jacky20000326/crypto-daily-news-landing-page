import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ScrollRevealWrapper from "../ScrollRevealWrapper/ScrollRevealWrapper";

export default function VideoSection() {
  return (
    <ScrollRevealWrapper threshold={0.1}>
      <Box
        component="section"
        className="reveal-up-lg"
        sx={{
          py: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.75rem" },
              mb: { xs: 1, md: 2 },
            }}
          >
            看看它如何
            <Box component="span" className="gradient-text">
              運作
            </Box>
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1.15rem" },
              maxWidth: 520,
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            從新聞收集到報告生成，全程自動化的完整流程
          </Typography>

          <Box
            sx={{
              position: "relative",
              borderRadius: { xs: "12px", md: "16px" },
              overflow: "hidden",
              border: "1px solid rgba(148,163,184,0.1)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: -1,
                borderRadius: "16px",
                padding: "1px",
                background:
                  "linear-gradient(135deg, rgba(247,147,26,0.3), transparent 60%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
              },
            }}
          >
            <Box
              component="video"
              src="/video/videoplayback.mp4"
              controls
              playsInline
              preload="metadata"
              sx={{
                display: "block",
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                bgcolor: "#000",
              }}
            />
          </Box>
        </Container>
      </Box>
    </ScrollRevealWrapper>
  );
}
