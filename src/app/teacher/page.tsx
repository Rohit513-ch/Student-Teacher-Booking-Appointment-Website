'use client';
import { useState } from 'react';
import { TeacherAppointments } from '@/components/dashboard/teacher/appointments';
import { Messages } from '@/components/dashboard/shared/messages';
import { placeholderAppointments } from '@/lib/placeholder-data';
import type { Appointment } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function TeacherDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>(
    placeholderAppointments
  );
  const { toast } = useToast();

  const handleStatusChange = (
    id: string,
    status: 'approved' | 'cancelled'
  ) => {
    setAppointments(
      appointments.map((a) => (a.id === id ? { ...a, status } : a))
    );
    toast({
      title: 'Appointment Updated',
      description: `The appointment has been ${status}.`,
    });
  };

  const teacherAppointments = appointments.filter(
    (a) => a.teacherName === 'Dr. Emily Carter'
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Welcome, Dr. Emily Carter!</h1>
        <p className="text-muted-foreground">
          Here you can manage your appointments and communicate with students.
        </p>
      </div>
      <TeacherAppointments
        appointments={teacherAppointments}
        onStatusChange={handleStatusChange}
      />
      <Messages />
    </div>
  );
}
