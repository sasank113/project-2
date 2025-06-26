
function validateForm() {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const phonenoInput = document.getElementById('phoneno');
            const passwordInput = document.getElementById('password');
             const phonenoError = document.getElementById('phonenoErr');
              const passwordError = document.getElementById('passwordErr');

            let isValid = true;

            // Validate Name
            if (nameInput.value.trim() === "") {
                nameError.textContent = "Name is required.";
                isValid = false;
            } else {
                nameError.textContent = "";
                
            }

             // Validate Email
            if (emailInput.value.trim() === "") {
                emailError.textContent = "Email is required.";
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = "Invalid email format.";
                isValid = false;
            } else {
                emailError.textContent = "";
               
            }
              
            if (phonenoInput.value.trim()=== "") {
                phonenoError.textContent = "Phone number is required.";
                isValid = false;
            } 
            else if(phonenoInput.value.length !==10)
            {
                  phonenoError.textContent = "Phone number is not valid.";
                  isValid = false;
            }
            else {
                phonenoError.textContent = "";
                
            }

            if (passwordInput.value.trim() === "") {
                passwordError.textContent = "Password is required.";
                isValid = false;
            } 
            else if(passwordInput.value.length <=6)
            {
                  passwordError.textContent = "Password length should be greater than 6 characters";
                  isValid = false;
            }
            else {
                passwordError.textContent = "";
                
            }

           

            if (isValid) {
                alert("Form submitted successfully!"); // Replace with your actual submission logic
                // You would typically send the form data to a server here.
            }
        }

        function isValidEmail(email) {
            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }