import { TemplateProps, TYPOGRAPHY, hexToRgba } from "@/config/brand";
import BrandLogo from "@/components/BrandLogo";

const IMG_PLACEHOLDER = "linear-gradient(135deg, #374151 0%, #1f2937 100%)";

const canvas = (w: number, h: number): React.CSSProperties => ({
  width: w,
  height: h,
  position: "relative",
  overflow: "hidden",
});

const s = (base: number, pct: number = 100) => base * pct / 100;

export const Template01 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", inset: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${hexToRgba(color, 0.95)} 0%, transparent 60%)` }} />
    <div style={{ position: "absolute", bottom: H * 0.09, left: 60, right: 60 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(64, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(28, textSize), color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: 60 }}><BrandLogo color={logoColor} size={24} customImage={logoImage} /></div>
  </div>
);

export const Template02 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: H * 0.5, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: H * 0.5, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 70px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(56, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(26, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: 70 }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template03 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: 0, right: 0, width: W * 0.5, height: H, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 0, left: 0, width: W * 0.5, height: H, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 50px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(52, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(24, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: 50 }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template04 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", inset: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 80, textAlign: "center" }}>
      <div style={{ width: 80, height: 6, background: color, marginBottom: 40, borderRadius: 3 }} />
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(60, titleSize), color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(26, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)" }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template05 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: "#fff" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: H * 0.185, background: color, display: "flex", alignItems: "center", padding: "0 60px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(48, titleSize), color: "#fff", lineHeight: 1.1 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", top: H * 0.185, left: 0, right: 0, height: H * 0.54, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: H * 0.275, background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 60px" }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(26, textSize), color: "#333", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, right: 60 }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template06 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: "#f5f5f5" }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: W * 0.59, height: H * 0.59, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 0, right: 0, width: W * 0.41, height: H * 0.59, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: 40 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(44, titleSize), color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>{title}</h1>
    </div>
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: H * 0.41, background: "#fff", display: "flex", alignItems: "center", padding: "0 60px" }}>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(26, textSize), color: "#333", lineHeight: 1.5, maxWidth: 700 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 30, right: 60 }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template07 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: H * 0.75, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: H * 0.25, background: color, display: "flex", alignItems: "center", padding: "0 60px", gap: 40 }}>
      <div>
        <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(42, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>{title}</h1>
        <p style={{ ...TYPOGRAPHY.body, fontSize: s(22, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{text}</p>
      </div>
    </div>
    <div style={{ position: "absolute", bottom: 20, right: 60 }}><BrandLogo color={logoColor} size={20} customImage={logoImage} /></div>
  </div>
);

export const Template08 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", inset: 0, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }} />
    <div style={{ position: "absolute", bottom: H * 0.07, left: 60, right: 60 }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(56, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(24, textSize), color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{text}</p>
    </div>
    <div style={{ position: "absolute", bottom: 25, right: 60 }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
  </div>
);

export const Template09 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => {
  const circleSize = Math.min(W, H) * 0.42;
  return (
    <div style={{ ...canvas(W, H), background: color }}>
      <div style={{ position: "absolute", top: H * 0.11, left: "50%", transform: "translateX(-50%)", width: circleSize, height: circleSize, borderRadius: "50%", background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER, border: `8px solid rgba(255,255,255,0.3)` }} />
      <div style={{ position: "absolute", bottom: H * 0.11, left: 0, right: 0, textAlign: "center", padding: "0 80px" }}>
        <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(52, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>{title}</h1>
        <p style={{ ...TYPOGRAPHY.body, fontSize: s(24, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>{text}</p>
      </div>
      <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)" }}><BrandLogo color={logoColor} size={22} customImage={logoImage} /></div>
    </div>
  );
};

export const Template10 = ({ color, title, text, image, titleSize = 100, textSize = 100, canvasWidth: W = 1080, canvasHeight: H = 1080, logoColor = "#FFFFFF", logoImage }: TemplateProps) => (
  <div style={{ ...canvas(W, H), background: color }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: W * 0.6, height: H, background: image ? `url(${image}) center/cover` : IMG_PLACEHOLDER }} />
    <div style={{ position: "absolute", top: 0, right: 0, width: W * 0.4, height: H, background: color, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 40px" }}>
      <h1 style={{ ...TYPOGRAPHY.title, fontSize: s(46, titleSize), color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
      <p style={{ ...TYPOGRAPHY.body, fontSize: s(22, textSize), color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{text}</p>
      <div style={{ marginTop: 40 }}><BrandLogo color={logoColor} size={20} customImage={logoImage} /></div>
    </div>
  </div>
);
