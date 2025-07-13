import Link from 'next/link';
import { RegisterFormDynamic } from '@/components/register-form-dynamic';


export default function RegisterPage() {
  return (
    <div className="glass-form-container register-form">
      <h3>Create an account</h3>
      <p className="text-center text-white/80 -mt-4 mb-6">Enter your details to register</p>
      <RegisterFormDynamic />
      <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline font-semibold hover:text-white/80 transition-colors">
            Login
          </Link>
        </div>
    </div>
  );
}
