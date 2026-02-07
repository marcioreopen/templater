import { TemplateProps, TYPOGRAPHY, hexToRgba, darken } from "@/config/brand";
import BrandLogo from "@/components/BrandLogo";

const IMG_PLACEHOLDER = "linear-gradient(135deg, #374151 0%, #1f2937 100%)";

const baseCanvas: React.CSSProperties = {
  width: 1080,
  height: 1080,
  position: "relative",
  overflow: "hidden",
};

// Template 11 - Full color + mini image bottom-right + big title
export const Template11 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 120, left: 70, right: 350 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 72, color: "#fff", lineHeight: 1.05, marginBottom: 24 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 26, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 80, right: 60, width: 400, height: 400, borderRadius: 20, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }} />
    <div style={{ position: "absolute", bottom: 30, left: 70 }}><BrandLogo size={22} /></div>
  </div>
);

// Template 12 - Image 70% top + text bar bottom
export const Template12 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 750, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 720, left: 60, right: 60, background: color, borderRadius: 16, padding: "40px 50px", boxShadow: "0 -10px 40px rgba(0,0,0,0.2)" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 42, color: "#fff", lineHeight: 1.1, marginBottom: 12 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 22, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)" }}><BrandLogo color={color} size={20} /></div>
  </div>
);

// Template 13 - Three horizontal strips
export const Template13 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 300, background: color, display: "flex", alignItems: "center", padding: "0 70px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 52, color: "#fff", lineHeight: 1.1 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", top: 300, left: 0, right: 0, height: 480, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 300, background: darken(color, 30), display: "flex", alignItems: "center", padding: "0 70px" }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 26, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 25, right: 70 }}><BrandLogo size={20} /></div>
  </div>
);

// Template 14 - Card central with image
export const Template14 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 80, left: 0, right: 0, textAlign: "center", padding: "0 80px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 52, color: "#fff", lineHeight: 1.1 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", top: 260, left: "50%", transform: "translateX(-50%)", width: 600, height: 480, borderRadius: 24, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }} />
    <div style={{ position: "absolute", bottom: 100, left: 0, right: 0, textAlign: "center", padding: "0 100px" }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 24, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)" }}><BrandLogo size={22} /></div>
  </div>
);

// Template 15 - Gradient overlay + text top
export const Template15 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", inset: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${hexToRgba(color, 0.9)} 0%, transparent 50%, ${hexToRgba(color, 0.7)} 100%)` }} />
    <div style={{ position: "absolute", top: 80, left: 60, right: 60 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 58, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 26, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: 60 }}><BrandLogo size={22} /></div>
  </div>
);

// Template 16 - Two columns (text left | image right)
export const Template16 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: 480, height: 1080, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 50px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 48, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 22, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", top: 0, right: 0, width: 600, height: 1080, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 30, left: 50 }}><BrandLogo size={20} /></div>
  </div>
);

// Template 17 - Big title top + image bottom
export const Template17 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 60, left: 60, right: 60 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 72, color: "#fff", lineHeight: 1.0, marginBottom: 16 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 24, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 600, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 20, right: 40 }}><BrandLogo size={20} /></div>
  </div>
);

// Template 18 - Quadrants alternating
export const Template18 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: 540, height: 540, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 0, right: 0, width: 540, height: 540, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: 40 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 44, color: "#fff", lineHeight: 1.1 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", bottom: 0, left: 0, width: 540, height: 540, background: darken(color, 20), display: "flex", alignItems: "center", padding: 40 }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 24, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 0, right: 0, width: 540, height: 540, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, opacity: 0.6 }} />
    <div style={{ position: "absolute", bottom: 20, right: 30 }}><BrandLogo size={18} /></div>
  </div>
);

// Template 19 - Colored sidebar + image
export const Template19 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 60, left: 40, bottom: 60, width: 380, background: color, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 36px", boxShadow: "10px 0 40px rgba(0,0,0,0.3)" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 42, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 20, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
      <div style={{ marginTop: 30 }}><BrandLogo size={18} /></div>
    </div>
  </div>
);

// Template 20 - Minimal clean
export const Template20 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: "#fafafa" }}>
    <div style={{ position: "absolute", top: 160, left: "50%", transform: "translateX(-50%)", width: 300, height: 300, borderRadius: 16, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }} />
    <div style={{ position: "absolute", top: 520, left: 0, right: 0, textAlign: "center", padding: "0 120px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 48, color: color, lineHeight: 1.15, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 22, color: "#555", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)" }}><BrandLogo color={color} size={22} /></div>
  </div>
);
