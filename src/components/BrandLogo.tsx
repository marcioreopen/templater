import { TYPOGRAPHY } from "@/config/brand";

interface LogoProps {
  color?: string;
  size?: number;
}

const BrandLogo = ({ color = "#FFFFFF", size = 28 }: LogoProps) => (
  <div style={{ display: "flex", alignItems: "center", gap: size * 0.3 }}>
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="6" fill={color} />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill={color === "#FFFFFF" ? "#1B5E20" : "#FFFFFF"}
        fontSize="18"
        fontWeight="800"
        fontFamily={TYPOGRAPHY.logo.fontFamily}
      >
        CF
      </text>
    </svg>
    <span
      style={{
        fontFamily: TYPOGRAPHY.logo.fontFamily,
        fontWeight: TYPOGRAPHY.logo.fontWeight,
        fontSize: size * 0.7,
        color,
        letterSpacing: "-0.02em",
      }}
    >
      Controla Food
    </span>
  </div>
);

export default BrandLogo;
