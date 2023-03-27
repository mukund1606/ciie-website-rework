export default function ImageFrame({ imageSrc, imageAlt, className = "" }) {
  return <img src={imageSrc} alt={imageAlt} className={className} />;
}
