import { LoginForm } from '@/components/login-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function LoginPage({ searchParams }: { searchParams?: { role?: string } }) {
  const role = searchParams?.role;
  const title = role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : 'Welcome back';
  const showSignUp = !role || role === 'student';

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm defaultRole={role} />
        <div className="mt-4 text-center text-sm">
          {showSignUp ? (
             <>
              Don&apos;t have an account?{' '}
              <Link href="/(auth)/register" className="underline">
                Sign up
              </Link>
            </>
          ) : (
             <Link href="/" className="underline">
                Back to Home
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
