'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { placeholderAppointments } from '@/lib/placeholder-data';
import type { Appointment } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export function TeacherAppointments() {
    const [appointments, setAppointments] = useState<Appointment[]>(placeholderAppointments);
    const { toast } = useToast();

    const handleStatusChange = (id: string, status: 'approved' | 'cancelled') => {
        setAppointments(appointments.map(a => a.id === id ? {...a, status} : a));
        console.log(`Appointment ${id} status changed to ${status}`);
        toast({
            title: "Appointment Updated",
            description: `The appointment has been ${status}.`
        })
    }

    return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>
          View and manage your scheduled appointments.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">{appointment.studentName}</TableCell>
                <TableCell>{appointment.dateTime}</TableCell>
                <TableCell className="max-w-[200px] truncate">{appointment.topic}</TableCell>
                <TableCell>
                  <Badge variant={appointment.status === 'approved' ? 'default' : appointment.status === 'pending' ? 'secondary' : 'destructive'}>
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell>
                   {appointment.status === 'pending' && (
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleStatusChange(appointment.id, 'approved')}>Approve</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(appointment.id, 'cancelled')}>Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                   )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{appointments.length}</strong> of <strong>{appointments.length}</strong> appointments
        </div>
      </CardFooter>
    </Card>
  );
}
