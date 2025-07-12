import { LoginForm } from '@/components/login-form';
import Link from 'next/link';
import { AppleIcon } from '@/components/register-form';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function LoginPage({ searchParams }: { searchParams?: { role?: string } }) {
  const role = searchParams?.role;
  const title = role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : 'Login Here';

  return (
    <div className="glass-form-container">
      <h3>{title}</h3>
      <LoginForm defaultRole={role} />
      <div className="social">
        <div className="go">
          <FaGoogle className="inline-block mr-2" /> Google
        </div>
        <div className="fb">
          <FaFacebook className="inline-block mr-2" /> Facebook
        </div>
      </div>
       <p className="sign-up-label mt-6">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="sign-up-link">
          Sign up
        </Link>
      </p>
    </div>
  );
}
