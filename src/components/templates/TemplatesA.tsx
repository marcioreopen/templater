import { TemplateProps, TYPOGRAPHY, hexToRgba } from "@/config/brand";
import BrandLogo from "@/components/BrandLogo";

const IMG_PLACEHOLDER = "linear-gradient(135deg, #374151 0%, #1f2937 100%)";

const baseCanvas: React.CSSProperties = {
  width: 1080,
  height: 1080,
  position: "relative",
  overflow: "hidden",
};

// Template 01 - Full background image + text bottom left
export const Template01 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", inset: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${hexToRgba(color, 0.95)} 0%, transparent 60%)` }} />
    <div style={{ position: "absolute", bottom: 100, left: 60, right: 60 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 64, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 28, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: 60 }}><BrandLogo size={24} /></div>
  </div>
);

// Template 02 - Image top + color bottom
export const Template02 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 540, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 540, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 70px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 56, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 26, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: 70 }}><BrandLogo size={22} /></div>
  </div>
);

// Template 03 - Vertical split (color left | image right)
export const Template03 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 0, right: 0, width: 540, height: 1080, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 0, left: 0, width: 540, height: 1080, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 50px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 52, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 24, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: 50 }}><BrandLogo size={22} /></div>
  </div>
);

// Template 04 - Dark overlay centered
export const Template04 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", inset: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 80, textAlign: "center" }}>
      <div style={{ width: 80, height: 6, background: color, marginBottom: 40, borderRadius: 3 }} />
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 60, color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 26, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)" }}><BrandLogo size={22} /></div>
  </div>
);

// Template 05 - Color strip top + image middle + text bottom
export const Template05 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 200, background: color, display: "flex", alignItems: "center", padding: "0 60px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 48, color: "#fff", lineHeight: 1.1 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", top: 200, left: 0, right: 0, height: 580, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 300, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 60px" }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 26, color: "#333", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, right: 60 }}><BrandLogo color={color} size={22} /></div>
  </div>
);

// Template 06 - Asymmetric grid
export const Template06 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: "#f5f5f5" }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: 640, height: 640, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 0, right: 0, width: 440, height: 640, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: 40 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 44, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 440, background: "#fff", display: "flex", alignItems: "center", padding: "0 60px" }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 26, color: "#333", lineHeight: 1.5, maxWidth: 700 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, right: 60 }}><BrandLogo color={color} size={22} /></div>
  </div>
);

// Template 07 - Full image + color bar bottom
export const Template07 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 810, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 270, background: color, display: "flex", alignItems: "center", padding: "0 60px", gap: 40 }}>
      <div>
        <h1 style={{ ...TYPOGRAPHY.title, fontSize: 42, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>{title}</h1>
        <p style={{ ...TYPOGRAPHY.body, fontSize: 22, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{text}</p>
      </div>
    </div>
    <div style={{ position: "absolute", bottom: 20, right: 60 }}><BrandLogo size={20} /></div>
  </div>
);

// Template 08 - Diagonal split
export const Template08 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", inset: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }} />
    <div style={{ position: "absolute", bottom: 80, left: 60, right: 60 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 56, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 24, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 25, right: 60 }}><BrandLogo size={22} /></div>
  </div>
);

// Template 09 - Circle image center
export const Template09 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 120, left: "50%", transform: "translateX(-50%)", width: 450, height: 450, borderRadius: "50%", background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, border: `8px solid rgba(255,255,255,0.3)` }} />
    <div style={{ position: "absolute", bottom: 120, left: 0, right: 0, textAlign: "center", padding: "0 80px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 52, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 24, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)" }}><BrandLogo size={22} /></div>
  </div>
);

// Template 10 - Image 60% left + text right
export const Template10 = ({ color, title, text, image }: TemplateProps) => (
  <div style={{ ...baseCanvas, background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: 650, height: 1080, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 0, right: 0, width: 430, height: 1080, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: 46, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: 22, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
      <div style={{ marginTop: 40 }}><BrandLogo size={20} /></div>
    </div>
  </div>
);
