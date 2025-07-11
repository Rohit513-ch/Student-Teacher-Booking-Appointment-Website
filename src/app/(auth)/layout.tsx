import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-center">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
