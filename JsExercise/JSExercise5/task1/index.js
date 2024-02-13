document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const courseList = document.getElementById('course-list');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const role = document.getElementById('role').value;

        // Save user details to local storage
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        // Display courses based on the role
        displayCourses(role);
    });

    function displayCourses(role) {
        const courses = getCourseList(role);

        // Display courses in the UI
        courseList.innerHTML = '';
        courses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course;
            courseList.appendChild(li);
        });
    }

    function getCourseList(role) {
        if (role === 'student') {
            return ['Mathematics', 'Science', 'History'];
        } else if (role === 'admin') {
            return ['Programming', 'Database Management', 'Web Development'];
        }

        return [];
    }

    // Check if user is already logged in
    const storedUsername = localStorage.getItem('username');
    const storedRole = localStorage.getItem('role');

    if (storedUsername && storedRole) {
        displayCourses(storedRole);
    }
});
