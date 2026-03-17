"use client";

import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";

const items = [
  { text: "加密貨幣", gradient: "linear-gradient(135deg, #F7931A 0%, #FBBF24 50%, #F7931A 100%)" },
  { text: "區塊鏈", gradient: "linear-gradient(135deg, #627EEA 0%, #A78BFA 50%, #627EEA 100%)" },
  { text: "Web3", gradient: "linear-gradient(135deg, #10B981 0%, #34D399 50%, #10B981 100%)" },
  { text: "DeFi", gradient: "linear-gradient(135deg, #E879F9 0%, #F472B6 50%, #E879F9 100%)" },
];

export default function FlipText() {
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
