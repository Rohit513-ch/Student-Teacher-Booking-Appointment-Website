'use client';
import { useState } from 'react';
import { BookAppointment } from '@/components/dashboard/student/book-appointment';
import { MyAppointments } from '@/components/dashboard/student/my-appointments';
import { Messages } from '@/components/dashboard/shared/messages';
import type { Appointment } from '@/lib/types';
import { placeholderAppointments } from '@/lib/placeholder-data';

export default function StudentDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>(
    placeholderAppointments
  );

  const handleAppointmentBooked = (newAppointment: Appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  const studentAppointments = appointments.filter(a => a.studentName === 'Alex Johnson');


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Welcome, Alex Johnson!</h1>
        <p className="text-muted-foreground">Here you can book and manage your appointments with teachers.</p>
      </div>
      
      <div id="book">
        <BookAppointment onAppointmentBooked={handleAppointmentBooked}/>
      </div>

      <div id="appointments">
        <MyAppointments appointments={studentAppointments}/>
      </div>
      
      <div id="messages">
        <Messages />
      </div>

    </div>
  );
}
