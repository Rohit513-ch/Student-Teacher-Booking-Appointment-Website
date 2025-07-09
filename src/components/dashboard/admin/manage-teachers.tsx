'use client';
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
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { placeholderTeachers } from '@/lib/placeholder-data';
import type { Teacher } from '@/lib/types';

export function ManageTeachers() {
    const [teachers, setTeachers] = useState<Teacher[]>(placeholderTeachers);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

    const handleAddOrUpdateTeacher = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const department = formData.get('department') as string;
        const subject = formData.get('subject') as string;
        const email = formData.get('email') as string;

        if (editingTeacher) {
            // Update teacher
            const updatedTeachers = teachers.map(t => t.id === editingTeacher.id ? {...t, name, department, subject, email} : t);
            setTeachers(updatedTeachers);
            console.log("Teacher updated:", { id: editingTeacher.id, name, department, subject, email });
        } else {
            // Add new teacher
            const newTeacher = { id: (teachers.length + 1).toString(), name, department, subject, email};
            setTeachers([...teachers, newTeacher]);
            console.log("Teacher added:", newTeacher);
        }
        setEditingTeacher(null);
        setIsDialogOpen(false);
    }

    const handleDeleteTeacher = (id: string) => {
        setTeachers(teachers.filter(t => t.id !== id));
        console.log("Teacher deleted:", id);
    }

    const openEditDialog = (teacher: Teacher) => {
        setEditingTeacher(teacher);
        setIsDialogOpen(true);
    }

     const openAddDialog = () => {
        setEditingTeacher(null);
        setIsDialogOpen(true);
    }


  return (
    <Card>
      <CardHeader>
        <CardTitle>Teachers</CardTitle>
        <CardDescription>Manage teacher profiles and information.</CardDescription>
        <div className="text-right">
             <Button size="sm" className="h-8 gap-1" onClick={openAddDialog}>
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Teacher
              </span>
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell className="font-medium">{teacher.name}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.department}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => openEditDialog(teacher)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteTeacher(teacher.id)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{teachers.length}</strong> of <strong>{teachers.length}</strong> teachers
        </div>
      </CardFooter>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{editingTeacher ? "Edit Teacher" : "Add New Teacher"}</DialogTitle>
                    <DialogDescription>
                        {editingTeacher ? "Update the teacher's details." : "Fill in the details for the new teacher."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddOrUpdateTeacher}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input id="name" name="name" defaultValue={editingTeacher?.name || ""} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">Email</Label>
                            <Input id="email" name="email" type="email" defaultValue={editingTeacher?.email || ""} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="department" className="text-right">Department</Label>
                            <Input id="department" name="department" defaultValue={editingTeacher?.department || ""} className="col-span-3" />
                        </div>
                         <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="subject" className="text-right">Subject</Label>
                            <Input id="subject" name="subject" defaultValue={editingTeacher?.subject || ""} className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">{editingTeacher ? "Save Changes" : "Add Teacher"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </Card>
  );
}
