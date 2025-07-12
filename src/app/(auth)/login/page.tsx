import { LoginForm } from '@/components/login-form';
import Link from 'next/link';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { RegisterFormDynamic } from '@/components/register-form-dynamic';
import { LoginFormDynamic } from '@/components/login-form-dynamic';

export default function LoginPage({ searchParams }: { searchParams?: { role?: string } }) {
  const role = searchParams?.role;
  const title = role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : 'Login Here';

  return (
    <div className="glass-form-container">
      <h3>{title}</h3>
      <LoginFormDynamic defaultRole={role} />

      <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-white/80">
              Or continue with
              </span>
          </div>
      </div>

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
