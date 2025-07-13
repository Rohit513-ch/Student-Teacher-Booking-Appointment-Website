import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenCheck, Calendar, MessagesSquare, School, Users } from 'lucide-react';
import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="bg-white text-gray-800 shadow-md container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-sm font-medium text-gray-500 decoration-gray-500 hover:text-gray-900 hover:no-underline">Login</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/login?role=admin">Admin</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login?role=teacher">Teacher</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login?role=student">Student</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Seamless Scheduling for Modern Education
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    ConnectEd bridges the gap between students and teachers with an intuitive appointment booking and communication platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Connect</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From booking appointments to real-time messaging, ConnectEd has you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
              <FeatureCard
                icon={<Calendar className="h-8 w-8" />}
                title="Easy Appointment Booking"
                description="Students can easily find available slots and book appointments with teachers in just a few clicks."
              />
              <FeatureCard
                icon={<MessagesSquare className="h-8 w-8" />}
                title="Real-Time Messaging"
                description="Built-in messaging allows for seamless communication between students and teachers."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Role-Based Dashboards"
                description="Customized dashboards for Admins, Teachers, and Students provide the right tools for everyone."
              />
              <FeatureCard
                icon={<BookOpenCheck className="h-8 w-8" />}
                title="Admin Oversight"
                description="Admins can manage teacher profiles and approve new student registrations."
              />
               <FeatureCard
                icon={<School className="h-8 w-8" />}
                title="Teacher Management"
                description="Teachers can manage their appointments, view their schedule, and communicate with students."
               />
               <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Student-Centric"
                description="Students have a simple interface to manage their academic interactions and schedule."
               />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">&copy; 2024 ConnectEd. All rights reserved.</p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-left bg-card h-full">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/20 p-3 text-primary">{icon}</div>
          <CardTitle className="text-xl font-bold mt-2">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
