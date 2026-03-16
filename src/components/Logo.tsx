"use client";

interface LogoProps {
  /** 僅顯示圖示，不顯示文字 */
  iconOnly?: boolean;
  /** 圖示尺寸（像素） */
  size?: number;
  /** 自訂 className */
  className?: string;
}

export default function Logo({ iconOnly = false, size = 36, className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconOnly ? "0 0 120 120" : "0 0 120 148"}
      width={iconOnly ? size : size * 1.0}
      height={iconOnly ? size : size * 1.23}
      className={className}
      role="img"
      aria-label="Crypto Daily News AI Logo"
    >
      <defs>
        {/* 主漸層：科技藍 → 加密綠 */}
        <linearGradient id="logo-grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        {/* 輔助漸層：深藍 → 青色 */}
        <linearGradient id="logo-grad-accent" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>

        {/* 流動線條漸層 */}
        <linearGradient id="logo-grad-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0" />
          <stop offset="40%" stopColor="#06B6D4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>

        {/* 發光效果 */}
        <radialGradient id="logo-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </radialGradient>

        {/* 六角形裁切 */}
        <clipPath id="hex-clip">
          <polygon points="60,8 104,30 104,90 60,112 16,90 16,30" />
        </clipPath>
      </defs>

      {/* 背景發光 */}
      <circle cx="60" cy="60" r="56" fill="url(#logo-glow)" />

      {/* ===== 外層六角形輪廓 ===== */}
      <polygon
        points="60,8 104,30 104,90 60,112 16,90 16,30"
        fill="none"
        stroke="url(#logo-grad-main)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* ===== 區塊鏈網格（小立方體/區塊） ===== */}
      <g clipPath="url(#hex-clip)" opacity="0.15">
        {/* 水平線 */}
        {[28, 42, 56, 70, 84].map((y) => (
          <line key={`h-${y}`} x1="16" y1={y} x2="104" y2={y} stroke="#0EA5E9" strokeWidth="0.5" />
        ))}
        {/* 垂直線 */}
        {[30, 44, 58, 72, 86].map((x) => (
          <line key={`v-${x}`} x1={x} y1="8" x2={x} y2="112" stroke="#0EA5E9" strokeWidth="0.5" />
        ))}
        {/* 對角線（區塊鏈節點連線） */}
        <line x1="30" y1="28" x2="86" y2="84" stroke="#10B981" strokeWidth="0.4" />
        <line x1="86" y1="28" x2="30" y2="84" stroke="#10B981" strokeWidth="0.4" />
      </g>

      {/* ===== 區塊鏈節點圓點 ===== */}
      <g opacity="0.35">
        {[
          [60, 28], [44, 42], [76, 42], [30, 56], [60, 56], [90, 56],
          [44, 70], [76, 70], [60, 84],
        ].map(([cx, cy], i) => (
          <circle key={`node-${i}`} cx={cx} cy={cy} r="1.5" fill="url(#logo-grad-main)" />
        ))}
      </g>

      {/* ===== 內層六角形 ===== */}
      <polygon
        points="60,24 88,40 88,80 60,96 32,80 32,40"
        fill="none"
        stroke="url(#logo-grad-main)"
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.5"
      />

      {/* ===== AI 晶片電路線條 ===== */}
      <g stroke="url(#logo-grad-accent)" strokeWidth="1" fill="none" opacity="0.4">
        {/* 上方電路 */}
        <path d="M60,24 L60,16 M60,16 L52,16 M60,16 L68,16" />
        {/* 左上電路 */}
        <path d="M32,40 L24,36 M24,36 L24,30" />
        {/* 右上電路 */}
        <path d="M88,40 L96,36 M96,36 L96,30" />
        {/* 左下電路 */}
        <path d="M32,80 L24,84 M24,84 L24,90" />
        {/* 右下電路 */}
        <path d="M88,80 L96,84 M96,84 L96,90" />
        {/* 下方電路 */}
        <path d="M60,96 L60,104 M60,104 L52,104 M60,104 L68,104" />
      </g>

      {/* 電路端點 */}
      <g fill="#22D3EE" opacity="0.6">
        <circle cx="52" cy="16" r="1.2" />
        <circle cx="68" cy="16" r="1.2" />
        <circle cx="24" cy="30" r="1.2" />
        <circle cx="96" cy="30" r="1.2" />
        <circle cx="24" cy="90" r="1.2" />
        <circle cx="96" cy="90" r="1.2" />
        <circle cx="52" cy="104" r="1.2" />
        <circle cx="68" cy="104" r="1.2" />
      </g>

      {/* ===== 中心「C」字融合 AI 晶片 ===== */}
      <g transform="translate(60, 60)">
        {/* 中心發光圈 */}
        <circle r="22" fill="none" stroke="url(#logo-grad-main)" strokeWidth="0.8" opacity="0.3" />

        {/* 風格化 C 字 */}
        <path
          d="M8,-14 C-2,-16 -14,-10 -14,0 C-14,10 -2,16 8,14"
          fill="none"
          stroke="url(#logo-grad-main)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* C 字內的 AI 電路紋路 */}
        <g stroke="#22D3EE" strokeWidth="0.6" opacity="0.5">
          <line x1="-6" y1="-6" x2="-6" y2="6" />
          <line x1="-10" y1="0" x2="-2" y2="0" />
          <circle cx="-6" cy="-6" r="1" fill="#22D3EE" />
          <circle cx="-6" cy="6" r="1" fill="#22D3EE" />
          <circle cx="-10" cy="0" r="1" fill="#22D3EE" />
          <circle cx="-2" cy="0" r="1" fill="#22D3EE" />
        </g>
      </g>

      {/* ===== 新聞流動線條 & 箭頭 ===== */}
      <g opacity="0.5">
        {/* 右上流動 */}
        <path
          d="M82,35 Q95,28 108,30"
          fill="none"
          stroke="url(#logo-grad-flow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <polygon points="108,30 103,26 104,32" fill="#10B981" opacity="0.7" />

        {/* 右下流動 */}
        <path
          d="M85,78 Q98,85 110,82"
          fill="none"
          stroke="url(#logo-grad-flow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <polygon points="110,82 105,78 106,84" fill="#0EA5E9" opacity="0.7" />

        {/* 左上流動 */}
        <path
          d="M38,35 Q25,28 12,30"
          fill="none"
          stroke="url(#logo-grad-flow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <polygon points="12,30 17,26 16,32" fill="#06B6D4" opacity="0.7" />

        {/* 左下流動 */}
        <path
          d="M35,78 Q22,85 10,82"
          fill="none"
          stroke="url(#logo-grad-flow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <polygon points="10,82 15,78 14,84" fill="#10B981" opacity="0.7" />
      </g>

      {/* ===== 品牌文字 ===== */}
      {!iconOnly && (
        <g>
          <text
            x="60"
            y="132"
            textAnchor="middle"
            fontFamily="'Sora', 'DM Sans', sans-serif"
            fontWeight="700"
            fontSize="8.5"
            fill="#0C4A6E"
            letterSpacing="2.5"
          >
            CRYPTO DAILY
          </text>
          <text
            x="60"
            y="143"
            textAnchor="middle"
            fontFamily="'DM Mono', 'Sora', monospace"
            fontWeight="500"
            fontSize="5.5"
            fill="#0369A1"
            letterSpacing="4"
            opacity="0.75"
          >
            NEWS AI
          </text>
        </g>
      )}
    </svg>
  );
}
