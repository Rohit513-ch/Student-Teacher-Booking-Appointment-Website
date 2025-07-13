'use client';
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
import type { Appointment } from '@/lib/types';

interface TeacherAppointmentsProps {
    appointments: Appointment[];
    onStatusChange: (id: string, status: 'approved' | 'cancelled') => void;
}


export function TeacherAppointments({ appointments, onStatusChange }: TeacherAppointmentsProps) {
    const pendingAppointments = appointments.filter(a => a.status === 'pending');
    const otherAppointments = appointments.filter(a => a.status !== 'pending');

    return (
    <Card>
      <CardHeader>
        <CardTitle>Appointment Requests</CardTitle>
        <CardDescription>
          Review and manage your scheduled appointments with students.
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
            {pendingAppointments.length > 0 ? (
                pendingAppointments.map((appointment) => (
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
                          <DropdownMenuItem onClick={() => onStatusChange(appointment.id, 'approved')}>Approve</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => onStatusChange(appointment.id, 'cancelled')}>Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                   )}
                </TableCell>
              </TableRow>
            ))
            ) : (
                 <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                        No pending appointment requests.
                    </TableCell>
                </TableRow>
            )}
            {otherAppointments.map((appointment) => (
              <TableRow key={appointment.id} className="text-muted-foreground/80">
                <TableCell className="font-medium">{appointment.studentName}</TableCell>
                <TableCell>{appointment.dateTime}</TableCell>
                <TableCell className="max-w-[200px] truncate">{appointment.topic}</TableCell>
                <TableCell>
                  <Badge variant={appointment.status === 'approved' ? 'default' : appointment.status === 'pending' ? 'secondary' : 'destructive'}>
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell></TableCell>
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
