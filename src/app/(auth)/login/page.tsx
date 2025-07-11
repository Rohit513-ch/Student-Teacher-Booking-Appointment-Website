import { LoginForm } from '@/components/login-form';
import Link from 'next/link';
import { AppleIcon } from '@/components/register-form';

export default function LoginPage({ searchParams }: { searchParams?: { role?: string } }) {
  const role = searchParams?.role;
  const title = role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : 'Welcome back';

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
      <div className="separator">
        <hr className="line"/>
        <span>or</span>
        <hr className="line"/>
      </div>
      <div className="buttons-container">
        <div className="apple-login-button">
          <AppleIcon />
          <span>Log in with Apple</span>
        </div>
        <div className="google-login-button">
          <img src="https://banner2.cleanpng.com/20240216/sb/transparent-google-logo-google-logo-with-multicolored-g-and-1710875781697.webp" alt="Google icon" className="google-icon-img" />
          <span>Log in with Google</span>
        </div>
      </div>
    </div>
  );
}
