// prisma/seed.ts
import { Day, PrismaClient, UserSex } from '../prisma/generated/prisma'

const prisma = new PrismaClient();

async function main() {

    const parentData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a02",
            username: "parent001",
            name: "John",
            surename: "Doe",
            email: "john.doe@example.com",
            phone: "+880123456789",
            address: "123 Main Street",
            createdAt: new Date("2025-07-19T08:00:00Z")
        }
    ];

    const gradeData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a03",
            level: "Grade 6"
        }
    ];

    const teacherData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a04",
            username: "teacher001",
            name: "Alice",
            surename: "Smith",
            email: "alice.smith@example.com",
            phone: "+880987654321",
            address: "456 Elm Street",
            img: "https://example.com/alice.jpg",
            createdAt: new Date("2025-07-19T08:00:00Z"),
            subjectIds: ["64a2f22e4d3f4b2b1a1c3a05"]
        }
    ];

    const subjectData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a05",
            name: "Mathematics",
            teachersId: ["64a2f22e4d3f4b2b1a1c3a04"],
            code: "MATH101",
            createdAt: new Date("2025-07-19T08:00:00Z")
        }
    ];

    const classData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a06",
            name: "Class A",
            capacity: 30,
            supervisorId: "64a2f22e4d3f4b2b1a1c3a04",
            gradeId: "64a2f22e4d3f4b2b1a1c3a03"
        }
    ];

    const studentData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a07",
            username: "student001",
            name: "Emily",
            surename: "Johnson",
            email: "emily.johnson@example.com",
            phone: "+8801122334455",
            address: "789 Maple Avenue",
            img: "https://example.com/emily.jpg",
            bloodType: "A+",
            sex: UserSex.FEMALE,
            createdAt: new Date("2025-07-19T08:00:00Z"),
            parentId: "64a2f22e4d3f4b2b1a1c3a02", // lowercase
            gradeId: "64a2f22e4d3f4b2b1a1c3a03",  // lowercase,
            classId: "64a2f22e4d3f4b2b1a1c3a06" // lowercase
        }
    ];


    const lessonData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a08",
            name: "Algebra Basics",
            day: Day.SUNDAY,
            startTime: new Date("2025-07-20T09:00:00Z"),
            endTime: new Date("2025-07-20T10:00:00Z"),
            subjectId: "64a2f22e4d3f4b2b1a1c3a05", // lowercase id field (foreign key)
            classId: "64a2f22e4d3f4b2b1a1c3a06",
            teacherId: "64a2f22e4d3f4b2b1a1c3a04"
        }
    ];


    const examData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a09",
            title: "Midterm Exam",
            startDate: new Date("2025-08-01T10:00:00Z"),
            endDate: new Date("2025-08-01T12:00:00Z"),
            lessonId: "64a2f22e4d3f4b2b1a1c3a08"
        }
    ];

    const assignmentData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a0a",
            title: "Homework 1",
            startDate: new Date("2025-07-25T08:00:00Z"),
            endDate: new Date("2025-07-28T08:00:00Z"),
            lessonId: "64a2f22e4d3f4b2b1a1c3a08"
        }
    ];

    const resultData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a0b",
            score: 90,
            examId: "64a2f22e4d3f4b2b1a1c3a09",
            assignmentId: "64a2f22e4d3f4b2b1a1c3a0a",
            studentId: "64a2f22e4d3f4b2b1a1c3a07"
        }
    ];

    const attendenceData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a0c",
            date: new Date("2025-07-20"),
            present: true,
            studentId: "64a2f22e4d3f4b2b1a1c3a07",
            lessonId: "64a2f22e4d3f4b2b1a1c3a08"
        }
    ];

    const eventData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a0d",
            title: "Orientation Day",
            description: "Welcome to the new academic year",
            startDate: new Date("2025-07-15T09:00:00Z"),
            endDate: new Date("2025-07-15T12:00:00Z"),
            classId: "64a2f22e4d3f4b2b1a1c3a06"
        }
    ];

    const announcementData = [
        {
            id: "64a2f22e4d3f4b2b1a1c3a0e",
            title: "Holiday Notice",
            description: "School closed on August 15th",
            date: new Date("2025-08-14T09:00:00Z"),
            classId: "64a2f22e4d3f4b2b1a1c3a06"
        }
    ];

    // Insert in order (due to relations)
    await prisma.parent.createMany({ data: parentData });
    await prisma.grade.createMany({ data: gradeData });
    await prisma.teacher.createMany({ data: teacherData });
    await prisma.subject.createMany({ data: subjectData });
    await prisma.class.createMany({ data: classData });
    await prisma.student.createMany({ data: studentData });
    await prisma.lesson.createMany({ data: lessonData });
    await prisma.exam.createMany({ data: examData });
    await prisma.assignment.createMany({ data: assignmentData });
    await prisma.result.createMany({ data: resultData });
    await prisma.attendence.createMany({ data: attendenceData });
    await prisma.event.createMany({ data: eventData });
    await prisma.announcement.createMany({ data: announcementData });

    console.log('✅ Seeding complete!');
}

main()
    .then(() => {
        console.log('🌱 Seeding complete');
        return prisma.$disconnect();
    })
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        return prisma.$disconnect();
    });
