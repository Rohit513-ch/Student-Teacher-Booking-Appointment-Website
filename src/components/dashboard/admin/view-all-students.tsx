
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
import { Badge } from '@/components/ui/badge';
import { placeholderStudents } from '@/lib/placeholder-data';
import type { Student } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function ViewAllStudents() {
  const [students] = useState<Student[]>(placeholderStudents);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <CardTitle>All Students</CardTitle>
          <CardDescription>
              View and manage all registered students.
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
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.department}</TableCell>
                    <TableCell>
                        <Badge variant={student.status === 'approved' ? 'default' : 'secondary'}>
                            {student.status}
                        </Badge>
                    </TableCell>
                </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                        No students found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{filteredStudents.length}</strong> of <strong>{students.length}</strong> students
        </div>
      </CardFooter>
    </Card>
  );
}
