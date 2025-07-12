'use client';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ManageTeachers } from '@/components/dashboard/admin/manage-teachers';
import { StudentApprovals } from '@/components/dashboard/admin/student-approvals';
import { Badge } from '@/components/ui/badge';
import {
  placeholderStudentApprovals,
  placeholderStudents,
} from '@/lib/placeholder-data';
import { ViewAllStudents } from '@/components/dashboard/admin/view-all-students';
import type { Student, StudentApproval } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const [approvals, setApprovals] = useState<StudentApproval[]>(
    placeholderStudentApprovals
  );
  const [students, setStudents] = useState<Student[]>(placeholderStudents);
  const { toast } = useToast();

  const handleApproveStudent = (studentId: string) => {
    const studentToApprove = approvals.find((a) => a.id === studentId);

    if (studentToApprove) {
      // Update the status in the main students list
      setStudents((prevStudents) =>
        prevStudents.map((s) =>
          s.id === studentId ? { ...s, status: 'approved' } : s
        )
      );

      // Remove the student from the pending approvals list
      setApprovals((prevApprovals) =>
        prevApprovals.filter((a) => a.id !== studentId)
      );

      toast({
        title: 'Student Approved',
        description: `${studentToApprove.name} has been approved and can now log in.`,
      });
    }
  };

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
            {approvals.length > 0 && (
              <Badge className="absolute -right-2 -top-2 h-5 w-5 justify-center p-0">
                {approvals.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="all-students">View All Students</TabsTrigger>
        </TabsList>
        <TabsContent value="teachers">
          <ManageTeachers />
        </TabsContent>
        <TabsContent value="approvals">
          <StudentApprovals
            approvals={approvals}
            onApprove={handleApproveStudent}
          />
        </TabsContent>
        <TabsContent value="all-students">
          <ViewAllStudents students={students} />
        </TabsContent>
      </Tabs>
    </>
  );
}
