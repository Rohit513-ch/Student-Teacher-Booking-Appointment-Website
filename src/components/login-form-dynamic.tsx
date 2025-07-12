'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const LoginForm = dynamic(
  () => import('@/components/login-form').then(mod => mod.LoginForm),
  { 
    ssr: false,
    loading: () => <LoginFormSkeleton />,
  }
);

function LoginFormSkeleton() {
  return (
    <div className="space-y-4 mt-8">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full bg-white/10" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full bg-white/10" />
      </div>
      <Skeleton className="h-[50px] w-full !mt-[50px]" />
    </div>
  );
}

export function LoginFormDynamic({ defaultRole }: { defaultRole?: string }) {
    return <LoginForm defaultRole={defaultRole} />;
}
