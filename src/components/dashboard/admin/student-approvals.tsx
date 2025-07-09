'use client'
import { useState } from 'react';
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
import { placeholderStudentApprovals } from '@/lib/placeholder-data';
import type { StudentApproval } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export function StudentApprovals() {
  const [approvals, setApprovals] = useState<StudentApproval[]>(placeholderStudentApprovals);
  const { toast } = useToast();

  const handleApprove = (id: string) => {
    const student = approvals.find(a => a.id === id);
    // Here, you would update the user's role in Firebase and move them from pending to active.
    setApprovals(approvals.filter(a => a.id !== id));
    console.log("Student approved:", id);
    toast({
        title: "Student Approved",
        description: `${student?.name} has been approved and can now log in.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Student Registrations</CardTitle>
        <CardDescription>
          Review and approve new students to grant them access.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {approvals.length > 0 ? (
                approvals.map((approval) => (
                <TableRow key={approval.id}>
                    <TableCell className="font-medium">{approval.name}</TableCell>
                    <TableCell>{approval.email}</TableCell>
                    <TableCell>{approval.date}</TableCell>
                    <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => handleApprove(approval.id)}>
                        Approve
                    </Button>
                    </TableCell>
                </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                        No pending approvals.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{approvals.length}</strong> of <strong>{approvals.length}</strong> pending approvals
        </div>
      </CardFooter>
    </Card>
  );
}
