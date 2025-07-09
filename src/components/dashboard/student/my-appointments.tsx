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
import { Badge } from '@/components/ui/badge';
import { placeholderAppointments } from '@/lib/placeholder-data';

export function MyAppointments() {
    const myAppointments = placeholderAppointments.filter(a => a.studentName === 'Alex Johnson');
    return (
    <Card>
      <CardHeader>
        <CardTitle>My Scheduled Appointments</CardTitle>
        <CardDescription>
          Here are the appointments you have scheduled.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Teacher</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
             {myAppointments.length > 0 ? (
                myAppointments.map((appointment) => (
                <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.teacherName}</TableCell>
                    <TableCell>{appointment.dateTime}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{appointment.topic}</TableCell>
                    <TableCell>
                    <Badge variant={appointment.status === 'approved' ? 'default' : appointment.status === 'pending' ? 'secondary' : 'destructive'}>
                        {appointment.status}
                    </Badge>
                    </TableCell>
                </TableRow>
                ))
            ) : (
                 <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                        You have no appointments scheduled.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{myAppointments.length}</strong> of <strong>{myAppointments.length}</strong> appointments
        </div>
      </CardFooter>
    </Card>
  );
}
