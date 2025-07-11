'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  role: z.enum(['student', 'teacher', 'admin'], { required_error: 'Please select a role.' }),
});

type Role = z.infer<typeof formSchema>['role'];

export function LoginForm({ defaultRole }: { defaultRole?: string }) {
  const router = useRouter();

  const isValidRole = (role: any): role is Role => {
    return ['student', 'teacher', 'admin'].includes(role);
  }

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      role: isValidRole(defaultRole) ? defaultRole : 'student',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Login submitted', values);
    // Here you would call your Firebase auth function
    // e.g., await login(values.email, values.password);

    // On successful login, redirect to the appropriate dashboard
    router.push(`/${values.role}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input type="email" {...register("email")} className="input" placeholder="Email" />
      {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
      
      <input type="password" {...register("password")} className="input" placeholder="Password" />
      {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

      <p className="page-link">
        <Link href="#" className="page-link-label">Forgot Password?</Link>
      </p>
      <button className="form-btn">Log in</button>
    </form>
  );
}