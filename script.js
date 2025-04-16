
document.getElementById('add-course').addEventListener('click', function() {
    const courseRow = document.createElement('div');
    courseRow.className = 'course-row';
    courseRow.innerHTML = `
        <input type="text" name="course-name" placeholder="Course Name" required>
        <select name="grade" required>
            <option value="">Select Grade</option>
            <option value="4">A</option>
            <option value="3">B</option>
            <option value="2">C</option>
            <option value="1">D</option>
            <option value="0">F</option>
        </select>
    `;
    document.getElementById('gpa-form').insertBefore(courseRow, document.getElementById('add-course'));
});

document.getElementById('calculate-gpa').addEventListener('click', function() {
    const courseNames = document.querySelectorAll('input[name="course-name"]');
    const grades = document.querySelectorAll('select[name="grade"]');
    let totalPoints = 0;
    let numCourses = 0;
    let confirmationMessage = "Courses and Grades:\n";

    grades.forEach(function(grade, index) {
        if (grade.value !== "") {
            totalPoints += parseFloat(grade.value);
            numCourses++;
            confirmationMessage += `${courseNames[index].value}: ${grade.options[grade.selectedIndex].text}\n`;
        }
    });

    if (numCourses > 0) {
        const gpa = totalPoints / numCourses;
        document.getElementById('confirmation-box').textContent = confirmationMessage;
        document.getElementById('gpa-result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
    } else {
        document.getElementById('confirmation-box').textContent = "Please enter grades for all courses.";
        document.getElementById('gpa-result').textContent = "";
    }
});
