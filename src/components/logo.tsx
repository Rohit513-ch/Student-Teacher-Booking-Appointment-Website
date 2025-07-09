import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 font-semibold text-lg">
      <GraduationCap className="h-6 w-6 text-primary" />
      <span className="text-foreground">ConnectEd</span>
    </div>
  );
}
