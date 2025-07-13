'use client';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ManageTeachers } from '@/components/dashboard/admin/manage-teachers';
import { StudentApprovals } from '@/components/dashboard/admin/student-approvals';
import { Badge } from '@/components/ui/badge';
import {
  placeholderStudentApprovals,
  placeholderStudents,
  placeholderTeachers,
} from '@/lib/placeholder-data';
import { ViewAllStudents } from '@/components/dashboard/admin/view-all-students';
import type { Student, StudentApproval, Teacher } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const [approvals, setApprovals] = useState<StudentApproval[]>(
    placeholderStudentApprovals
  );
  const [students, setStudents] = useState<Student[]>(placeholderStudents);
  const [teachers, setTeachers] = useState<Teacher[]>(placeholderTeachers);
  const { toast } = useToast();

  const handleApproveStudent = (studentId: string) => {
    const studentToApprove = approvals.find((a) => a.id === studentId);

    if (studentToApprove) {
      setStudents((prevStudents) =>
        prevStudents.map((s) =>
          s.id === studentId ? { ...s, status: 'approved' } : s
        )
      );
      setApprovals((prevApprovals) =>
        prevApprovals.filter((a) => a.id !== studentId)
      );

      toast({
        title: 'Student Approved',
        description: `${studentToApprove.name} has been approved and can now log in.`,
      });
    }
  };

  const handleAddOrUpdateTeacher = (teacher: Teacher) => {
    const exists = teachers.some(t => t.id === teacher.id);
    if (exists) {
      setTeachers(teachers.map(t => t.id === teacher.id ? teacher : t));
       toast({
        title: 'Teacher Updated',
        description: `Details for ${teacher.name} have been updated.`,
      });
    } else {
      setTeachers([...teachers, teacher]);
       toast({
        title: 'Teacher Added',
        description: `${teacher.name} has been added to the system.`,
      });
    }
  };

  const handleDeleteTeacher = (teacherId: string) => {
    const teacherName = teachers.find(t => t.id === teacherId)?.name;
    setTeachers(teachers.filter(t => t.id !== teacherId));
    toast({
        title: 'Teacher Removed',
        description: `${teacherName} has been removed.`,
        variant: 'destructive'
      });
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
          <ManageTeachers 
            teachers={teachers}
            onAddOrUpdate={handleAddOrUpdateTeacher}
            onDelete={handleDeleteTeacher}
          />
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
