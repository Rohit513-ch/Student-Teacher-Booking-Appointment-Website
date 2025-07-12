import { RegisterForm } from '@/components/register-form';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="glass-form-container register-form">
      <h3>Create an account</h3>
      <p className="text-center text-white/80 -mt-4 mb-6">Enter your details to register</p>
      <RegisterForm />
      <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline font-semibold">
            Login
          </Link>
        </div>
    </div>
  );
}
