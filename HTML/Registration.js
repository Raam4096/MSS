// Utility function to set error messages
function setError(fieldId, errorId, message) {
    const error = document.getElementById(errorId);
    error.style.display = 'block';
    error.textContent = message;
    document.getElementById(fieldId).style.borderColor = 'red';
}

function clearError(fieldId, errorId) {
    const error = document.getElementById(errorId);
    error.style.display = 'none';
    document.getElementById(fieldId).style.borderColor = 'green';
}

// First Name Validation
document.getElementById('fname').addEventListener('blur', () => {
    const fname = document.getElementById('fname').value.trim();
    if (fname === '') {
        setError('fname', 'fname_err', 'First name is required');
    } else if (!/^[A-Za-z]+$/.test(fname)) {
        setError('fname', 'fname_err', 'Only alphabets allowed');
    } else if (fname.length < 3 || fname.length > 15) {
        setError('fname', 'fname_err', 'Must be between 3 and 15 characters');
    } else {
        clearError('fname', 'fname_err');
    }
});

// Email Validation
document.getElementById('email').addEventListener('blur', () => {
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        setError('email', 'email_err', 'Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('email', 'email_err', 'Invalid email format');
    } else {
        clearError('email', 'email_err');
    }
});

// Address Validation
document.getElementById('address').addEventListener('blur', () => {
    const address = document.getElementById('address').value.trim();
    if (address.length < 150 || address.length > 300) {
        setError('address', 'address_err', 'Must be between 150 and 300 characters');
    } else {
        clearError('address', 'address_err');
    }
});

// Age Validation
document.getElementById('age').addEventListener('blur', () => {
    const age = parseInt(document.getElementById('age').value);
    if (isNaN(age) || age < 1 || age > 100) {
        setError('age', 'age_err', 'Age must be between 1 and 100');
    } else {
        clearError('age', 'age_err');
    }
});

// Course Validation
document.getElementById('course').addEventListener('change', () => {
    const course = document.getElementById('course').value;
    if (!course) {
        setError('course', 'course_err', 'Select a course');
    } else {
        clearError('course', 'course_err');
    }
});

// Gender Validation on Submit
document.getElementById('admissionForm').addEventListener('submit', (event) => {
    if (!document.querySelector('input[name="gender"]:checked')) {
        event.preventDefault();
        setError('gender', 'gender_err', 'Select a gender');
    }
});

// File Validations
['photo', 'marksheet'].forEach((id) => {
    document.getElementById(id).addEventListener('change', () => {
        const file = document.getElementById(id).files.length;
        if (file === 0) {
            setError(id, `${id}_err`, 'Upload a file');
        } else {
            clearError(id, `${id}_err`);
        }
    });
});

// Final Submit Validation
document.getElementById('admissionForm').addEventListener('submit', (event) => {
    const errors = document.querySelectorAll('p[style="display: block;"]');
    if (errors.length > 0) {
        event.preventDefault();
        alert('Fix errors before submitting');
    }
});
