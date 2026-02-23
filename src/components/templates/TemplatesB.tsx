import { TemplateProps, TYPOGRAPHY, hexToRgba, darken } from "@/config/brand";
import BrandLogo from "@/components/BrandLogo";

const IMG_PLACEHOLDER = "linear-gradient(135deg, #374151 0%, #1f2937 100%)";

const canvas = (w: number, h: number): React.CSSProperties => ({
  width: w,
  height: h,
  position: "relative",
  overflow: "hidden",
});

const s = (base: number, pct: number = 100) => base * pct / 100;

export const Template11 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: H * 0.11, left: 70, right: W * 0.32 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(72, titleSize), color: "#fff", lineHeight: 1.05, marginBottom: 24 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(26, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: H * 0.07, right: 60, width: W * 0.37, height: W * 0.37, borderRadius: 20, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }} />
    <div style={{ position: "absolute", bottom: 30, left: 70 }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template12 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: H * 0.7, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: H * 0.67, left: 60, right: 60, background: color, borderRadius: 16, padding: "40px 50px", boxShadow: "0 -10px 40px rgba(0,0,0,0.2)" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(42, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 12 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(22, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)" }}><BrandLogo color={logoColor} size={20} customImage={logoImage} /></div>
  </div>
);

export const Template13 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: H * 0.28, background: color, display: "flex", alignItems: "center", padding: "0 70px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(52, titleSize), color: "#fff", lineHeight: 1.1 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", top: H * 0.28, left: 0, right: 0, height: H * 0.44, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: H * 0.28, background: darken(color, 30), display: "flex", alignItems: "center", padding: "0 70px" }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(26, textSize), color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 25, right: 70 }}><BrandLogo color={logoColor} size={20} customImage={logoImage} /></div>
  </div>
);

export const Template14 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: H * 0.07, left: 0, right: 0, textAlign: "center", padding: "0 80px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(52, titleSize), color: "#fff", lineHeight: 1.1 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", top: H * 0.24, left: "50%", transform: "translateX(-50%)", width: W * 0.56, height: H * 0.44, borderRadius: 24, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }} />
    <div style={{ position: "absolute", bottom: H * 0.09, left: 0, right: 0, textAlign: "center", padding: "0 100px" }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(24, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)" }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template15 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", inset: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${hexToRgba(color, 0.9)} 0%, transparent 50%, ${hexToRgba(color, 0.7)} 100%)` }} />
    <div style={{ position: "absolute", top: 80, left: 60, right: 60 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(58, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(26, textSize), color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: 60 }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template16 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: W * 0.44, height: H, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 50px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(48, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(22, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", top: 0, right: 0, width: W * 0.56, height: H, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 30, left: 50 }}><BrandLogo color={logoColor} size={20} customImage={logoImage} /></div>
  </div>
);

export const Template17 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: 60, left: 60, right: 60 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(72, titleSize), color: "#fff", lineHeight: 1.0, marginBottom: 16 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(24, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: H * 0.55, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 20, right: 40 }}><BrandLogo color={logoColor} size={20} customImage={logoImage} /></div>
  </div>
);

export const Template18 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: W * 0.5, height: H * 0.5, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 0, right: 0, width: W * 0.5, height: H * 0.5, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: 40 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(44, titleSize), color: "#fff", lineHeight: 1.1 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", bottom: 0, left: 0, width: W * 0.5, height: H * 0.5, background: darken(color, 20), display: "flex", alignItems: "center", padding: 40 }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(24, textSize), color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 0, right: 0, width: W * 0.5, height: H * 0.5, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, opacity: 0.6 }} />
    <div style={{ position: "absolute", bottom: 20, right: 30 }}><BrandLogo color={logoColor} size={18} customImage={logoImage} /></div>
  </div>
);

export const Template19 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 60, left: 40, bottom: 60, width: W * 0.35, background: color, borderRadius: 20, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 36px", boxShadow: "10px 0 40px rgba(0,0,0,0.3)" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(42, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(20, textSize), color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
      <div style={{ marginTop: 30 }}><BrandLogo color={logoColor} size={18} customImage={logoImage} /></div>
    </div>
  </div>
);

export const Template20 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: "#fafafa" }}>
    <div style={{ position: "absolute", top: H * 0.15, left: "50%", transform: "translateX(-50%)", width: W * 0.28, height: W * 0.28, borderRadius: 16, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }} />
    <div style={{ position: "absolute", top: H * 0.48, left: 0, right: 0, textAlign: "center", padding: "0 120px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(48, titleSize), color: color, lineHeight: 1.15, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(22, textSize), color: "#555", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)" }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);
