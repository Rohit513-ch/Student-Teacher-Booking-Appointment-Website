import type { Teacher, Appointment, StudentApproval, Student } from './types';

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
    { id: 'a5', studentName: 'Samantha Davis', teacherName: 'Dr. Benjamin Lee', dateTime: '2024-06-19 09:00 AM', topic: 'Reviewing quantum experiment data', status: 'approved'},
    { id: 'a6', studentName: 'Michael Brown', teacherName: 'Dr. Jacob Miller', dateTime: '2024-06-20 01:00 PM', topic: 'Help with differential equations homework', status: 'pending'},
];


export const placeholderStudentApprovals: StudentApproval[] = [
    { id: 's1', name: 'Jessica Williams', email: 'jess.w@email.com', date: '2024-05-20', department: 'Computer Science' },
    { id: 's2', name: 'Kevin Brown', email: 'kevin.b@email.com', date: '2024-05-21', department: 'Physics' },
    { id: 's3', name: 'Maria Rodriguez', email: 'maria.r@email.com', date: '2024-05-22', department: 'EEE' },
];

export const placeholderStudents: Student[] = [
    { id: 's1', name: 'Jessica Williams', email: 'jess.w@email.com', department: 'Computer Science', status: 'pending' },
    { id: 's2', name: 'Kevin Brown', email: 'kevin.b@email.com', department: 'Physics', status: 'pending' },
    { id: 's3', name: 'Maria Rodriguez', email: 'maria.r@email.com', department: 'EEE', status: 'pending' },
    { id: 's4', name: 'Alex Johnson', email: 'alex.j@email.com', department: 'History', status: 'approved' },
    { id: 's5', name: 'John Doe', email: 'john.d@email.com', department: 'Mathematics', status: 'approved' },
    { id: 's6', name: 'Jane Smith', email: 'jane.s@email.com', department: 'Computer Science', status: 'approved' },
    { id: 's7', name: 'John Smith', email: 'john.smith@email.com', department: 'EEE', status: 'pending' },
];
