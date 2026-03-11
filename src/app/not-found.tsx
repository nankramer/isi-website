import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-earth-900 grain-overlay flex items-center justify-center">
      <div className="text-center section-padding">
        <div className="opacity-10 mb-8 flex justify-center">
          <Logo size={138} variant="dark" />
        </div>
        <p className="label-text mb-4">Page Not Found</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          404
        </h1>
        <p className="text-earth-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-gold">
          Return Home
        </Link>
      </div>
    </div>
  );
}
