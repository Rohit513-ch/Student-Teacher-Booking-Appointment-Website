export interface Teacher {
    id: string;
    name: string;
    email: string;
    department: string;
    subject: string;
}
  
export interface Appointment {
    id: string;
    studentName: string;
    teacherName: string;
    dateTime: string;
    topic: string;
    status: 'pending' | 'approved' | 'cancelled';
}

export interface StudentApproval {
    id: string;
    name: string;
    email: string;
    date: string;
    department: string;
}
