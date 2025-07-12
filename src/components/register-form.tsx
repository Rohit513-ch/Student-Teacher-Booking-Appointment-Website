
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { FaGoogle, FaApple } from 'react-icons/fa';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


const formSchema = z.object({
    name: z.string().min(2, {message: 'Name must be at least 2 characters.'}),
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
    role: z.enum(['student', 'teacher', 'admin'], {
        required_error: 'Please select a role.',
    }),
});

export function RegisterForm() {
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Registration submitted', values);
        // Here you would call your Firebase auth function to create a user
        // and add them to a 'pendingStudents' or appropriate collection based on role.

        toast({
            title: "Registration Submitted",
            description: "Your registration is pending admin approval. Please check back later.",
        });

        // Redirect to login page after showing the toast
        router.push('/login');
    }

    return (
        <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-400"/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="name@example.com" {...field} />
                            </FormControl>
                             <FormMessage className="text-red-400"/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                             <FormMessage className="text-red-400"/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Role</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="student">Student</SelectItem>
                                    <SelectItem value="teacher">Teacher</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400"/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full !mt-8">
                    Create Account
                </Button>
            </form>
        </Form>
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
        <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="!bg-white/10 hover:!bg-white/20 !border-white/20">
                <FaGoogle className="mr-2"/>
                Google
            </Button>
            <Button variant="outline" className="!bg-white/10 hover:!bg-white/20 !border-white/20">
                <FaApple className="mr-2" />
                Apple
            </Button>
        </div>
      </>
    );
}

// Keep the apple icon for the old login page design if needed elsewhere.
export const AppleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <title>Apple</title>
        <path
            d="M12.152 6.896c-.922 0-1.748-.484-2.74-1.205-.742-.544-1.485-1.088-2.485-1.088-1.288 0-2.445.83-3.172 1.944-.728 1.113-1.42 2.8-1.21 4.545.165 1.398.85 2.59 1.624 3.447.773.857 1.623 1.744 2.872 1.744 1.113 0 1.84-.544 2.804-1.205.828-.56 1.624-1.127 2.484-1.127.99 0 1.805.53 2.68 1.154.91.65 1.84.975 2.647.975.38 0 1.14-.15 1.84-.91.56-.605.813-1.397.843-2.19.03-.793-.424-1.68-.96-2.288-.439-.498-1.055-.813-1.744-.813-.498 0-1.154.212-1.84.62-.685.408-1.42.798-2.288.798-.99 0-1.933-.53-2.833-1.233-.767-.59-1.563-1.248-2.424-1.248zM9.648 24c2.398 0 3.864-1.563 5.137-1.563s2.584 1.563 4.936 1.563c2.445 0 3.88-1.547 5.18-1.547s2.613 1.547 5.093 1.547c-2.398 0-3.864-1.563-5.137-1.563s-2.584 1.563-4.936-1.563c-2.445 0-3.88 1.547-5.18-1.547s-2.613-1.547-5.093-1.547zm-5.18-20.413c.63-.8 1.548-1.31 2.533-1.31.857 0 1.563.454 2.235.989.67.534 1.484 1.14 2.47 1.14 1.112 0 1.92-.62 2.727-1.233.79-.613 1.652-1.015 2.648-1.015 1.205 0 2.22.76 2.872 1.73.65.974.27 2.634-.91 4.195-.765.96-1.623 1.745-2.92 1.745-.96 0-1.73-.502-2.584-1.08-.854-.578-1.714-1.22-2.678-1.22s-1.68.618-2.52 1.248c-.84.63-1.653 1.113-2.714 1.113-1.383 0-2.445-.94-3.097-2.03-.65-1.09-.38-2.92.827-4.51z"
            fill="currentColor"
        />
    </svg>
);

    