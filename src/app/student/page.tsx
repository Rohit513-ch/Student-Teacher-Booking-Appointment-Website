import { BookAppointment } from '@/components/dashboard/student/book-appointment';
import { MyAppointments } from '@/components/dashboard/student/my-appointments';
import { Messages } from '@/components/dashboard/shared/messages';

export default function StudentDashboard() {

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Welcome, Alex Johnson!</h1>
        <p className="text-muted-foreground">Here you can book and manage your appointments with teachers.</p>
      </div>
      
      <div id="book">
        <BookAppointment />
      </div>

      <div id="appointments">
        <MyAppointments />
      </div>
      
      <div id="messages">
        <Messages />
      </div>

    </div>
  );
}
