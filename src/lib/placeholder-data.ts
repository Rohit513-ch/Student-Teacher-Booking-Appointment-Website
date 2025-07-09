import type { Teacher, Appointment, StudentApproval } from './types';

export const placeholderTeachers: Teacher[] = [
  { id: '1', name: 'Dr. Emily Carter', email: 'emily.carter@university.edu', department: 'Computer Science', subject: 'Artificial Intelligence' },
  { id: '2', name: 'Dr. Benjamin Lee', email: 'ben.lee@university.edu', department: 'Physics', subject: 'Quantum Mechanics' },
  { id: '3', name: 'Prof. Sophia Rodriguez', email: 'sophia.r@university.edu', department: 'History', subject: 'Modern European History' },
  { id: '4', name: 'Dr. Jacob Miller', email: 'j.miller@university.edu', department: 'Mathematics', subject: 'Calculus II' },
];

export const placeholderAppointments: Appointment[] = [
    { id: 'a1', studentName: 'Alex Johnson', teacherName: 'Dr. Emily Carter', dateTime: '2024-06-15 10:00 AM', topic: 'Project proposal discussion', status: 'approved' },
    { id: 'a2', studentName: 'Maria Garcia', teacherName: 'Dr. Benjamin Lee', dateTime: '2024-06-16 02:30 PM', topic: 'Lab results clarification', status: 'pending' },
    { id: 'a3', studentName: 'Chris Green', teacherName: 'Dr. Emily Carter', dateTime: '2024-06-17 11:00 AM', topic: 'Thesis chapter review', status: 'pending' },
    { id: 'a4', studentName: 'Alex Johnson', teacherName: 'Prof. Sophia Rodriguez', dateTime: '2024-06-18 03:00 PM', topic: 'Question about the final essay', status: 'cancelled' },
];


export const placeholderStudentApprovals: StudentApproval[] = [
    { id: 's1', name: 'Jessica Williams', email: 'jess.w@email.com', date: '2024-05-20' },
    { id: 's2', name: 'Kevin Brown', email: 'kevin.b@email.com', date: '2024-05-21' },
];
