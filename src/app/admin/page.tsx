import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ManageTeachers } from '@/components/dashboard/admin/manage-teachers';
import { StudentApprovals } from '@/components/dashboard/admin/student-approvals';
import { Badge } from '@/components/ui/badge';
import { placeholderStudentApprovals } from '@/lib/placeholder-data';

export default function AdminDashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Admin Dashboard</h1>
      </div>
      <Tabs defaultValue="teachers">
        <TabsList>
          <TabsTrigger value="teachers">Manage Teachers</TabsTrigger>
          <TabsTrigger value="approvals" className="relative">
            Student Approvals
            {placeholderStudentApprovals.length > 0 && (
               <Badge className="absolute -right-2 -top-2 h-5 w-5 justify-center p-0">{placeholderStudentApprovals.length}</Badge>
            )}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="teachers">
          <ManageTeachers />
        </TabsContent>
        <TabsContent value="approvals">
          <StudentApprovals />
        </TabsContent>
      </Tabs>
    </>
  );
}
