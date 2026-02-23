// Controla Food - Brand Configuration
// Centralized definitions for colors, typography, and templates

export const BRAND_COLORS = [
  { name: "Verde Floresta", value: "#1B5E20" },
  { name: "Verde Esmeralda", value: "#2E7D32" },
  { name: "Verde Lima", value: "#558B2F" },
  { name: "Laranja Queimado", value: "#E65100" },
  { name: "Laranja Vibrante", value: "#F57C00" },
  { name: "Vermelho Tomate", value: "#C62828" },
  { name: "Azul Profundo", value: "#1565C0" },
  { name: "Azul Petróleo", value: "#00695C" },
  { name: "Amarelo Mostarda", value: "#F9A825" },
  { name: "Grafite", value: "#263238" },
] as const;

export const TYPOGRAPHY = {
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 800,
  },
  subtitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
  },
  logo: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
  },
} as const;

export const TEMPLATE_NAMES = [
  "01 - Imagem de Fundo + Texto Inferior",
  "02 - Imagem Topo + Cor Inferior",
  "03 - Divisão Vertical (Cor | Imagem)",
  "04 - Overlay Escuro Centralizado",
  "05 - Faixa Cor + Imagem + Texto",
  "06 - Grid Assimétrico",
  "07 - Imagem + Barra Inferior",
  "08 - Diagonal Split",
  "09 - Imagem Circular Centralizada",
  "10 - Imagem 60% + Texto Lateral",
  "11 - Cor Total + Mini Imagem",
  "12 - Imagem 70% + Faixa Texto",
  "13 - Três Faixas Horizontais",
  "14 - Card Central com Imagem",
  "15 - Gradiente Overlay + Texto Topo",
  "16 - Duas Colunas (Texto | Imagem)",
  "17 - Título Grande + Imagem Inferior",
  "18 - Quadrantes Alternados",
  "19 - Sidebar Colorida + Imagem",
  "20 - Minimalista Limpo",
] as const;

export const CANVAS_FORMATS = [
  { name: "Quadrado", label: "1080×1080", width: 1080, height: 1080 },
  { name: "Reels", label: "1080×1350", width: 1080, height: 1350 },
  { name: "Stories", label: "1080×1920", width: 1080, height: 1920 },
] as const;

export interface TemplateProps {
  color: string;
  title: string;
  text: string;
  image: string | null;
  titleSize?: number;
  textSize?: number;
  canvasWidth?: number;
  canvasHeight?: number;
  logoColor?: string;
}

// Helper to darken/lighten hex
export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function darken(hex: string, amount: number): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export function lighten(hex: string, amount: number): string {
  const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amount);
  const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amount);
  const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
