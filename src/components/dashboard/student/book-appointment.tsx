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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookMarked, User } from 'lucide-react';
import { placeholderTeachers } from '@/lib/placeholder-data';
import type { Teacher, Appointment } from '@/lib/types';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';


interface BookAppointmentProps {
  onAppointmentBooked: (appointment: Appointment) => void;
}

export function BookAppointment({ onAppointmentBooked }: BookAppointmentProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isBookDialogOpen, setIsBookDialogOpen] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const { toast } = useToast();
    
    const filteredTeachers = placeholderTeachers.filter(teacher => 
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBookClick = (teacher: Teacher) => {
        setSelectedTeacher(teacher);
        setIsBookDialogOpen(true);
    }
    
    const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!selectedTeacher || !selectedDate) return;

        const formData = new FormData(event.currentTarget);
        const topic = formData.get('topic') as string;

        const newAppointment: Appointment = {
            id: `a${Date.now()}`,
            studentName: 'Alex Johnson', // This would typically come from the logged-in user's context
            teacherName: selectedTeacher.name,
            dateTime: format(selectedDate, 'yyyy-MM-dd hh:mm a'),
            topic,
            status: 'pending',
        };

        onAppointmentBooked(newAppointment);

        toast({
            title: "Appointment Booked!",
            description: `Your appointment with ${selectedTeacher?.name} has been requested.`,
        })
        setIsBookDialogOpen(false);
        setSelectedTeacher(null);
    }

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Find a Teacher</CardTitle>
                    <CardDescription>Search for a teacher by name, subject, or department.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input 
                            placeholder="Search..." 
                            className="pl-8" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredTeachers.map(teacher => (
                     <Card key={teacher.id}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={`https://placehold.co/100x100.png`} alt={teacher.name} data-ai-hint="person portrait" />
                                <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{teacher.name}</CardTitle>
                                <CardDescription>{teacher.email}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <p className="text-sm font-medium flex items-center gap-2"><User className="w-4 h-4 text-muted-foreground"/>{teacher.department}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-2"><BookMarked className="w-4 h-4 text-muted-foreground"/>{teacher.subject}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={() => handleBookClick(teacher)}>Book Appointment</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {selectedTeacher && (
                 <Dialog open={isBookDialogOpen} onOpenChange={setIsBookDialogOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Book Appointment with {selectedTeacher.name}</DialogTitle>
                            <DialogDescription>
                                Select a date and provide a topic for your meeting.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleBookingSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label>Date</Label>
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={setSelectedDate}
                                        className="rounded-md border"
                                        disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                                    />
                                </div>
                                 <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="topic">Topic</Label>
                                    <Textarea id="topic" name="topic" placeholder="Briefly describe the reason for your appointment." required />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="secondary">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Request Appointment</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
