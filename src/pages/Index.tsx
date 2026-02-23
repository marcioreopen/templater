import { useState, useRef, useMemo } from "react";
import { BRAND_COLORS, TEMPLATE_NAMES, CANVAS_FORMATS } from "@/config/brand";
import { TEMPLATES } from "@/components/templates";
import { toPng } from "html-to-image";
import { Download, Image as ImageIcon, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const Index = () => {
  const [title, setTitle] = useState("Seu título aqui");
  const [text, setText] = useState("Texto secundário com informações complementares da sua peça.");
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>(BRAND_COLORS[0].value);
  const [image, setImage] = useState<string | null>(null);
  const [logoColor, setLogoColor] = useState<string>("#FFFFFF");
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [titleSize, setTitleSize] = useState(100);
  const [textSize, setTextSize] = useState(100);
  const [selectedFormat, setSelectedFormat] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  const format = CANVAS_FORMATS[selectedFormat];

  const previewScale = useMemo(() => {
    const maxW = 600;
    const maxH = 700;
    return Math.min(maxW / format.width, maxH / format.height);
  }, [format]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogoImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    const el = canvasRef.current;
    if (!el) return;
    setGenerating(true);
    const originalTransform = el.style.transform;
    const originalTransformOrigin = el.style.transformOrigin;
    el.style.transform = "none";
    el.style.transformOrigin = "unset";
    try {
      const dataUrl = await toPng(el, {
        width: format.width,
        height: format.height,
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `controla-food-${format.name.toLowerCase()}-${selectedTemplate}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Erro ao gerar imagem:", err);
    }
    el.style.transform = originalTransform;
    el.style.transformOrigin = originalTransformOrigin;
    setGenerating(false);
  };

  const TemplateComponent = TEMPLATES[selectedTemplate];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Form */}
      <aside className="w-[380px] min-h-screen bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Controla Food
              </h1>
              <p className="text-xs text-muted-foreground">Gerador de Peças</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Format */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Formato</label>
            <div className="grid grid-cols-3 gap-2">
              {CANVAS_FORMATS.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedFormat(i)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-lg border-2 transition-all text-xs font-medium ${
                    selectedFormat === i
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-secondary text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  <div
                    className="border border-current rounded-sm"
                    style={{
                      width: f.width / 60,
                      height: f.height / 60,
                    }}
                  />
                  <span>{f.name}</span>
                  <span className="text-[10px] opacity-60">{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Template */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Template</label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(Number(e.target.value))}
              className="w-full h-10 px-3 rounded-md bg-secondary text-secondary-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {TEMPLATE_NAMES.map((name, i) => (
                <option key={i} value={i + 1} className="bg-popover text-popover-foreground">
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Cor da marca</label>
            <div className="grid grid-cols-5 gap-2">
              {BRAND_COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setSelectedColor(c.value)}
                  className="w-full aspect-square rounded-lg transition-all duration-150 border-2"
                  style={{
                    background: c.value,
                    borderColor: selectedColor === c.value ? "#fff" : "transparent",
                    transform: selectedColor === c.value ? "scale(1.1)" : "scale(1)",
                    boxShadow: selectedColor === c.value ? `0 0 12px ${c.value}` : "none",
                  }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Logo Color */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Cor da logo</label>
            <div className="grid grid-cols-5 gap-2">
              <button
                onClick={() => setLogoColor("#FFFFFF")}
                className="w-full aspect-square rounded-lg transition-all duration-150 border-2"
                style={{
                  background: "#FFFFFF",
                  borderColor: logoColor === "#FFFFFF" ? "#333" : "transparent",
                  transform: logoColor === "#FFFFFF" ? "scale(1.1)" : "scale(1)",
                  boxShadow: logoColor === "#FFFFFF" ? "0 0 12px rgba(255,255,255,0.5)" : "none",
                }}
                title="Branco"
              />
              {BRAND_COLORS.map((c) => (
                <button
                  key={`logo-${c.value}`}
                  onClick={() => setLogoColor(c.value)}
                  className="w-full aspect-square rounded-lg transition-all duration-150 border-2"
                  style={{
                    background: c.value,
                    borderColor: logoColor === c.value ? "#fff" : "transparent",
                    transform: logoColor === c.value ? "scale(1.1)" : "scale(1)",
                    boxShadow: logoColor === c.value ? `0 0 12px ${c.value}` : "none",
                  }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={60}
              className="w-full h-10 px-3 rounded-md bg-secondary text-secondary-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Título da peça"
            />
            <span className="text-xs text-muted-foreground mt-1 block">{title.length}/60</span>
          </div>

          {/* Text */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Texto secundário</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={200}
              rows={3}
              className="w-full px-3 py-2 rounded-md bg-secondary text-secondary-foreground border border-border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Texto complementar"
            />
            <span className="text-xs text-muted-foreground mt-1 block">{text.length}/200</span>
          </div>

          {/* Font Sizes */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Tamanho da fonte do título ({titleSize}%)</label>
            <Slider
              value={[titleSize]}
              onValueChange={(v) => setTitleSize(v[0])}
              min={50}
              max={150}
              step={5}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Tamanho da fonte do subtítulo ({textSize}%)</label>
            <Slider
              value={[textSize]}
              onValueChange={(v) => setTextSize(v[0])}
              min={50}
              max={150}
              step={5}
              className="w-full"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Imagem principal</label>
            <label className="flex items-center justify-center gap-2 w-full h-24 rounded-lg border-2 border-dashed border-border bg-secondary cursor-pointer hover:border-primary/50 transition-colors">
              {image ? (
                <img src={image} alt="Preview" className="h-full w-full object-cover rounded-lg" />
              ) : (
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                  <ImageIcon className="w-6 h-6" />
                  <span className="text-xs">Clique para enviar</span>
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
            {image && (
              <button onClick={() => setImage(null)} className="text-xs text-destructive mt-1 hover:underline">
                Remover imagem
              </button>
            )}
          </div>

          {/* Logo Upload */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Logo</label>
            <label className="flex items-center justify-center gap-2 w-full h-24 rounded-lg border-2 border-dashed border-border bg-secondary cursor-pointer hover:border-primary/50 transition-colors">
              {logoImage ? (
                <img src={logoImage} alt="Logo" className="h-full object-contain rounded-lg p-2" />
              ) : (
                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                  <ImageIcon className="w-6 h-6" />
                  <span className="text-xs">Logo padrão (clique para alterar)</span>
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
            </label>
            {logoImage && (
              <button onClick={() => setLogoImage(null)} className="text-xs text-destructive mt-1 hover:underline">
                Usar logo padrão
              </button>
            )}
          </div>
        </div>

        {/* Action */}
        <div className="p-6 border-t border-border">
          <button
            onClick={handleDownload}
            disabled={generating}
            className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {generating ? "Gerando..." : "Gerar peça e baixar PNG"}
          </button>
        </div>
      </aside>

      {/* Canvas Preview */}
      <main className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="relative">
          <div
            ref={canvasRef}
            style={{
              width: format.width,
              height: format.height,
              transform: `scale(${previewScale})`,
              transformOrigin: "center center",
            }}
          >
            {TemplateComponent && (
              <TemplateComponent
                color={selectedColor}
                title={title}
                text={text}
                image={image}
                titleSize={titleSize}
                textSize={textSize}
                canvasWidth={format.width}
                canvasHeight={format.height}
                logoColor={logoColor}
                logoImage={logoImage}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
