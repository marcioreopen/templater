import logoSrc from "@/assets/logo-controlafood.png";

interface LogoProps {
  color?: string;
  size?: number;
}

const BrandLogo = ({ color = "#FFFFFF", size = 28 }: LogoProps) => {
  const height = size * 1.8;
  const width = height * 1.6;

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: color,
        WebkitMaskImage: `url(${logoSrc})`,
        maskImage: `url(${logoSrc})`,
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
