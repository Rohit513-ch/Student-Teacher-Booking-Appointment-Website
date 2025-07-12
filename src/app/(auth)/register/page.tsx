import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

const RegisterForm = dynamic(
  () => import('@/components/register-form').then(mod => mod.RegisterForm),
  { 
    ssr: false,
    loading: () => <RegisterFormSkeleton />,
  }
);

function RegisterFormSkeleton() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
       <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
       <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-10 w-full !mt-8" />
    </div>
  );
}


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
