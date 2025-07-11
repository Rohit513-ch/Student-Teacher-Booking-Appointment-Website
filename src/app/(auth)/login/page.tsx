import { LoginForm } from '@/components/login-form';
import Link from 'next/link';
import { AppleIcon, GoogleIcon } from '@/components/register-form';

export default function LoginPage({ searchParams }: { searchParams?: { role?: string } }) {
  const role = searchParams?.role;
  const title = role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : 'Welcome back';
  const showSignUp = !role || role === 'student';

  return (
    <div className="form-container">
      <p className="title">{title}</p>
      <LoginForm defaultRole={role} />
      <p className="sign-up-label">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="sign-up-link">
          Sign up
        </Link>
      </p>
      <div className="buttons-container">
        <div className="apple-login-button">
          <AppleIcon />
          <span>Log in with Apple</span>
        </div>
        <div className="google-login-button">
          <GoogleIcon />
          <span>Log in with Google</span>
        </div>
      </div>
    </div>
  );
}