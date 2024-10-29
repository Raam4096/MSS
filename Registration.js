
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

// this is for firstname
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

//this is for lastname
document.getElementById('lname').addEventListener('blur', () => {
    const lname = document.getElementById('lname').value.trim();
    if (lname === '') {    // Validate First Name
        setError('lname', 'lname_err', 'Last name is required');
    } else if (!/^[A-Za-z]+$/.test(lname)) {
        setError('lname', 'lname_err', 'Only alphabets allowed');
    } else if (lname.length < 3 || lname.length > 15) {
        setError('lname', 'lname_err', 'Must be between 3 and 15 characters');
    } else {
        clearError('lname', 'lname_err');
    }
});

//this is for dob
document.getElementById('dob').addEventListener('blur', () => {
    const dob = document.getElementById('dob').value.trim();
    if (dob === '') {
        setError('dob', 'dob_err', 'dob should be choosen');
    } 
    else {
        clearError('dob', 'dob_err');
    }
});


//this is for nationality
document.getElementById('nationality').addEventListener('blur', () => {
    const nationality = document.getElementById('nationality').value.trim();
    if (nationality === '') {
        setError('nationality', 'nationality_err', 'nationality is required');
    } else if (!/^[A-Za-z]+$/.test(nationality)) {
        setError('nationality', 'nationality_err', 'Only alphabets allowed');
    } else{
        clearError('nationality', 'nationality_err');
    }
});

//this is for email
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


//this is for address
document.getElementById('address').addEventListener('blur', () => {
    const address = document.getElementById('address').value.trim();
    if(address===''){
        setError('address','address_err','Address Required');
    }
    else if (address.length < 150 || address.length > 300) {
        setError('address', 'address_err', 'Must be between 150 and 300 characters');
    } else {
        clearError('address', 'address_err');
    }
});

//this is for age
document.getElementById('age').addEventListener('blur', () => {
    const age = parseInt(document.getElementById('age').value);
    if(isNaN(age)){
        setError('age','age_err','Age required')
    }
    else if ( age < 1 || age > 100) {
        setError('age', 'age_err', 'Age must be between 1 and 100');
    } else {
        clearError('age', 'age_err');
    }
});

//this is for course
document.getElementById('course').addEventListener('change', () => {
    const course = document.getElementById('course').value;
    if (!course) {
        setError('course', 'course_err', 'Select a course');
    } else {
        clearError('course', 'course_err');
    }
});

//password
document.getElementById('password').addEventListener('blur', () => {
    const password = document.getElementById('password').value.trim();
    
    var regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

    if (password === '') {
        setError('password', 'password_err', 'Password Required');
    } else if (password.length < 6 || password.length > 12) {
        setError('password', 'password_err', 'Length must be between 6 and 12 characters');
    } else if (!regx.test(password)) {
        setError('password', 'password_err', 'Password must contain at least one alphabet, one number, and one special character');
    } else {
        clearError('password', 'password_err');
    }
});

//conpassword

document.getElementById('conpassword').addEventListener('blur', () => {
    const conpassword = document.getElementById('conpassword').value.trim();
    const password = document.getElementById('password').value.trim();
    

    if (conpassword==='') {
        setError('conpassword', 'conpassword_err', 'Password Required');
    }else if(password!==conpassword){
        setError('conpassword', 'conpassword_err', 'Password Doesnt Match');
    }
    else {  
        clearError('conpassword', 'conpassword_err');
    }
});

//phone

document.getElementById('phone').addEventListener('keyup', () => {
    var phone=document.getElementById("phone").value.trim();
    var regx = /^[0-9]{10}$/;

    if (phone === '') {
        setError('phone', 'phone_err', 'Number Required');
    }
    else if (!/^[0-9]*$/.test(phone)) { 
        setError('phone', 'phone_err', 'Enter digits only');
    }
    else if (phone.length < 10) {
        setError('phone', 'phone_err', 'Enter exactly 10 digits');
    }
    else if (!regx.test(phone)) {
        setError('phone', 'phone_err', 'Invalid phone number');
    }
    else {
        clearError('phone', 'phone_err');
    }
});


//this is for admission form 
document.getElementById('admissionForm').addEventListener('submit', (event) => {
    if (!document.querySelector('input[name="gender"]:checked')) {
        setError('gender', 'gender_err', 'Select a gender');
    }
});

//this is for files
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


//this is for submitting
document.getElementById('admissionForm').addEventListener('submit', (event) => {
    let hasError = false;

    //fname on submit
    const fname = document.getElementById('fname').value.trim();
    if (fname === '') {
        setError('fname', 'fname_err', 'First name is required');
        hasError = true;
    } else if (!/^[A-Za-z]+$/.test(fname)) {
        setError('fname', 'fname_err', 'Only alphabets allowed');
        hasError = true;
    } else if (fname.length < 3 || fname.length > 15) {
        setError('fname', 'fname_err', 'Must be between 3 and 15 characters');
        hasError = true;
    } else {
        clearError('fname', 'fname_err');
    }

    //lname on submit
    const lname = document.getElementById('lname').value.trim();
    if (lname === '') {
        setError('lname', 'lname_err', 'Last name is required');
        hasError = true;
    } else if (!/^[A-Za-z]+$/.test(lname)) {
        setError('lname', 'lname_err', 'Only alphabets allowed');
        hasError = true;
    } else if (lname.length < 3 || lname.length > 15) {
        setError('lname', 'lname_err', 'Must be between 3 and 15 characters');
        hasError = true;
    } else {
        clearError('lname', 'lname_err');
    }

   //phone on submit
    const phone = document.getElementById('phone').value.trim();
    const phoneRegx = /^[0-9]{10}$/;
    if (phone === '') {
        setError('phone', 'phone_err', 'Number Required');
        hasError = true;
    } else if (!phoneRegx.test(phone)) {
        setError('phone', 'phone_err', 'Enter exactly 10 digits');
        hasError = true;
    } else {
        clearError('phone', 'phone_err');
    }

 //password on submit
    const password = document.getElementById('password').value.trim();
    const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
    if (password === '') {
        setError('password', 'password_err', 'Password Required');
        hasError = true;
    } else if (!passwordRegx.test(password)) {
        setError('password', 'password_err', 'Should contain alphabet, number, and special character');
        hasError = true;
    } else {
        clearError('password', 'password_err');
    }

    //conpassword on submit
    const conpassword = document.getElementById('conpassword').value.trim();
    if (conpassword === '') {
        setError('conpassword', 'conpassword_err', 'Password Required');
        hasError = true;
    } else if (password !== conpassword) {
        setError('conpassword', 'conpassword_err', 'Password Doesn\'t Match');
        hasError = true;
    } else {
        clearError('conpassword', 'conpassword_err');
    }

    //email on submit
    const email = document.getElementById('email').value.trim();
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        setError('email', 'email_err', 'Email is required');
        hasError = true;
    } else if (!emailRegx.test(email)) {
        setError('email', 'email_err', 'Invalid email format');
        hasError = true;
    } else {
        clearError('email', 'email_err');
    }

//dob on submit    
    const dob = document.getElementById('dob').value.trim();
    if (dob === '') {
        setError('dob', 'dob_err', 'dob should be choosen');
        hasError=true;
    } 
    else {
        clearError('dob', 'dob_err');
    }

         //address on submit
    const address = document.getElementById('address').value.trim();
    if(address===''){
        setError('address','address_err','Address Required');
        hasError=true;
    }
    else if (address.length < 150 || address.length > 300) {
        setError('address', 'address_err', 'Must be between 150 and 300 characters');
        hasError=true
    } else {
        clearError('address', 'address_err');
    }

    //age on submit
    const age = parseInt(document.getElementById('age').value);
    if(isNaN(age)){
        setError('age','age_err','Age required');
        hasError=true;
    }
    else if ( age < 1 || age > 100) {
        setError('age', 'age_err', 'Age must be between 1 and 100');
        hasError=true;
    } else {
        clearError('age', 'age_err');
    }
  
    //files on submit
    ['photo', 'marksheet'].forEach((id) => {
        const file = document.getElementById(id).files.length;
        if (file === 0) {
            setError(id, `${id}_err`, 'Upload a file');
            hasError = true;
        } else {
            clearError(id, `${id}_err`);
        }
    });



    

      
    


   
    if (hasError) {
        alert('Please fix the errors before submitting.');
        event.preventDefault();
        
    }
    else{
        const fname = document.getElementById('fname').value.trim();
        const lname = document.getElementById('lname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const dob = document.getElementById('dob').value.trim();
        const nationality = document.getElementById('nationality').value.trim();
        const address = document.getElementById('address').value.trim();
        const course = document.getElementById('course').value;
        const age = document.getElementById('age').value.trim();
        const password = document.getElementById('password').value.trim();
        
        const url=`success.html?fname=${encodeURIComponent(fname)}&lname=${encodeURIComponent(lname)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&gender=${encodeURIComponent(gender)}&dob=${encodeURIComponent(dob)}&nationality=${encodeURIComponent(nationality)}&address=${encodeURIComponent(address)}&course=${encodeURIComponent(course)}&age=${encodeURIComponent(age)}&password=${encodeURIComponent(password)}`;

    

        // Redirect to the success page with the query parameters
        window.location.href = url;
    }
});

