import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookAppointment } from '@/components/dashboard/student/book-appointment';
import { MyAppointments } from '@/components/dashboard/student/my-appointments';
import { Messages } from '@/components/dashboard/shared/messages';
import { Badge } from '@/components/ui/badge';
import { placeholderAppointments } from '@/lib/placeholder-data';

export default function StudentDashboard() {
  const myAppointmentsCount = placeholderAppointments.filter(a => a.studentName === "Alex Johnson").length;

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Student Dashboard</h1>
      </div>
      <Tabs defaultValue="book">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="book">Book Appointment</TabsTrigger>
          <TabsTrigger value="appointments">
            My Appointments
            {myAppointmentsCount > 0 && (
                <Badge variant="secondary" className="ml-2">{myAppointmentsCount}</Badge>
            )}
            </TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="book">
            <BookAppointment />
        </TabsContent>
        <TabsContent value="appointments">
            <MyAppointments />
        </TabsContent>
        <TabsContent value="messages">
            <Messages />
        </TabsContent>
      </Tabs>
    </>
  );
}
