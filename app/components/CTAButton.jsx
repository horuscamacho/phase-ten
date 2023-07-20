export default function CTAButton({ onClick, color, children, type }) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-full rounded-lg bg-${color} text-white text-lg font-semibold`}
      type={type}
    >
      {children}
    </button>
  );
}
