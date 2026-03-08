interface DualBackgroundProps {
  image1: string;
  image2: string;
  alt1?: string;
  alt2?: string;
  overlayClass?: string;
}

const DualBackground = ({
  image1,
  image2,
  alt1 = "",
  alt2 = "",
  overlayClass = "bg-primary/60",
}: DualBackgroundProps) => {
  return (
    <div className="absolute inset-0 flex">
      <div className="w-1/2 h-full relative overflow-hidden">
        <img src={image1} alt={alt1} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full relative overflow-hidden">
        <img src={image2} alt={alt2} className="w-full h-full object-cover" />
      </div>
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>
  );
};

export default DualBackground;
