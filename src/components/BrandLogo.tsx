import logoSrc from "@/assets/logo-controlafood.png";

interface LogoProps {
  color?: string;
  size?: number;
  customImage?: string | null;
}

const BrandLogo = ({ color = "#FFFFFF", size = 28, customImage }: LogoProps) => {
  const height = size * 2 * 1.8;
  const width = height * 1.6;

  const src = customImage || logoSrc;

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
};

export default BrandLogo;
