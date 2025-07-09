import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TeacherAppointments } from '@/components/dashboard/teacher/appointments';
import { Messages } from '@/components/dashboard/shared/messages';
import { Badge } from '@/components/ui/badge';
import { placeholderAppointments } from '@/lib/placeholder-data';

export default function TeacherDashboard() {
  const pendingCount = placeholderAppointments.filter(a => a.status === 'pending').length;
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Teacher Dashboard</h1>
      </div>
      <Tabs defaultValue="appointments">
        <TabsList>
          <TabsTrigger value="appointments">
            Appointments 
            {pendingCount > 0 && (
              <Badge className="ml-2">{pendingCount}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="appointments">
          <TeacherAppointments />
        </TabsContent>
        <TabsContent value="messages">
          <Messages />
        </TabsContent>
      </Tabs>
    </>
  );
}
