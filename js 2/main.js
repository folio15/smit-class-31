function trackAttendance() {
    const totalStudents = parseInt(prompt("Enter the number of students :"));

    let absentStudents = [];
    
    let presentCount = 0;

    for (let i = 0; i < totalStudents; i++) {
        const studentName = prompt(`Enter the name of student ${i + 1}:`);
        
        let attendance;
        while (true) {
            attendance = prompt(`Is ${studentName} Present or Absent?`).toLowerCase();
            if (attendance === "present" || attendance === "absent") {
                break; 
            } else {
                alert("Invalid input. Please enter 'Present' or 'Absent'.");
            }
        }
        if (attendance === "present") {
            presentCount++;
        } else {
            absentStudents.push(studentName);
        }
    }
    alert(`Total students present: ${presentCount}`);
    if (absentStudents.length > 0) {
        alert(`Absent students: ${absentStudents.join(", ")}`);
    } else {
        alert("No students are absent.");
    }
}
trackAttendance();
