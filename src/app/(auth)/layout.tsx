import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-background">
       <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
