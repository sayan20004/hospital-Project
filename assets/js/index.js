document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginForm').classList.toggle('hidden');
});

function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var error = document.getElementById('error');
    
    error.textContent = '';  // Clear previous errors

    if (email === '' || password === '') {
        error.textContent = 'All fields are required';
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        error.textContent = 'Please enter a valid email address';
        return false;
    }

    alert('Login Successful!');
    return true;
}


document.getElementById('appointmentButton').addEventListener('click', function() {
    document.getElementById('appointmentForm').classList.toggle('hidden');
});

function validateAppointmentForm() {
    var username = document.getElementById('username').value;
    var doctor = document.getElementById('doctor').value;
    var date = document.getElementById('date').value;
    var specialization = document.getElementById('specialization').value;
    var error = document.getElementById('error');
    
    error.textContent = '';  // Clear previous errors

    if (username === '' || doctor === '' || date === '' || specialization === '') {
        error.textContent = 'All fields are required';
        return false;
    }

    alert('Appointment booked successfully!');
    return true;
}
document.getElementById('appointmentButton2').addEventListener('click', function() {
    document.getElementById('appointmentForm').classList.toggle('hidden');
});

function validateAppointmentForm() {
    var username = document.getElementById('username').value;
    var doctor = document.getElementById('doctor').value;
    var date = document.getElementById('date').value;
    var specialization = document.getElementById('specialization').value;
    var error = document.getElementById('error');
    
    error.textContent = '';  // Clear previous errors

    if (username === '' || doctor === '' || date === '' || specialization === '') {
        error.textContent = 'All fields are required';
        return false;
    }

    alert('Appointment booked successfully!');
    return true;
}