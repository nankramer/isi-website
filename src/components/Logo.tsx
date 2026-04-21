import Image from "next/image";

export function Logo({
  className = "",
  size = 48,
  variant = "light",
}: {
  className?: string;
  size?: number;
  variant?: "light" | "dark";
}) {
  return (
    <Image
      src={variant === "dark" ? "/logo-dark.png" : "/logo.png"}
      alt="Isintu Samakhosi Institute"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={72} variant="light" />
    </div>
  );
}
