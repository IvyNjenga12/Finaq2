// script.js
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
    const grades = document.querySelectorAll('select[name="grade"]');
    let totalPoints = 0;
    let numCourses = 0;

    grades.forEach(function(grade) {
        if (grade.value !== "") {
            totalPoints += parseFloat(grade.value);
            numCourses++;
        }
    });

    if (numCourses > 0) {
        const gpa = totalPoints / numCourses;
        document.getElementById('gpa-result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
    } else {
        document.getElementById('gpa-result').textContent = "Please enter grades for all courses.";
    }
});
