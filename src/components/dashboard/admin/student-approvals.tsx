'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
import type { StudentApproval } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface StudentApprovalsProps {
  approvals: StudentApproval[];
  onApprove: (id: string) => void;
}

export function StudentApprovals({
  approvals,
  onApprove,
}: StudentApprovalsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApprovals = approvals.filter(
    (approval) =>
      approval.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Pending Student Registrations</CardTitle>
            <CardDescription>
              Review and approve new students to grant them access.
            </CardDescription>
          </div>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, department, or email..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApprovals.length > 0 ? (
              filteredApprovals.map((approval) => (
                <TableRow key={approval.id}>
                  <TableCell className="font-medium">{approval.name}</TableCell>
                  <TableCell>{approval.email}</TableCell>
                  <TableCell>{approval.department}</TableCell>
                  <TableCell>{approval.date}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onApprove(approval.id)}
                    >
                      Approve
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-muted-foreground"
                >
                  No pending approvals found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{filteredApprovals.length}</strong> of{' '}
          <strong>{filteredApprovals.length}</strong> pending approvals
        </div>
      </CardFooter>
    </Card>
  );
}
