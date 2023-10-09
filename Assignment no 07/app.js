// Chapter (46-48 / Events..)

// (Q1)

// var button = document.getElementById("myButton");

// button.addEventListener("click", function() {
//     console.log("Button clicked!");
// });


// (Q2)

// var elementToHide = document.getElementById("elementToHide");
// var clickTrigger = document.getElementById("clickTrigger");

// clickTrigger.addEventListener("click", function()
// {
//     elementToHide.style.display = "none";
//     console.log("Element hidden!");
// });


// (Q4)

// var scrollToTopLink = document.getElementById("scrollToTopLink");

// scrollToTopLink.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });

//     console.log("Scrolled to the top of the page!");
// });


// (Q5)




// (Q6)

// var openWindowLink = document.getElementById("openWindowLink");

// openWindowLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     window.open(openWindowLink.href, "_blank");
//     console.log("New window opened!");
// });


// (Q7)

// var alertButton = document.getElementById("alertButton");

// alertButton.addEventListener("click", function() {
//     alert("Button clicked!");
//     console.log("Alert shown!");
// });


// (Q9)

// (Skiped)


// (Q10)

// var hoverElement = document.getElementById("hoverElement");

// hoverElement.addEventListener("mouseover", function() {
//     alert("Mouse over element!");
//     console.log("Mouse over element!");
// });


// (Q12)

// var openWindowLink = document.getElementById("openWindowLink");

// openWindowLink.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var windowWidth = event.clientX || window.innerWidth / 2;
//     var windowHeight = event.clientY || window.innerHeight / 2;

//     var newWindow = window.open('', '', 'width=' + windowWidth + ', height=' + windowHeight);

//     newWindow.document.write('<html><head><title>New Window</title></head><body>');
//     newWindow.document.write('<h1>New Window</h1>');
//     newWindow.document.write('<button id="closeWindowButton">Close Window</button>');
//     newWindow.document.write('</body></html>');
//     newWindow.document.close();

//     var closeWindowButton = newWindow.document.getElementById("closeWindowButton");

//     closeWindowButton.addEventListener("click", function() {
//         newWindow.close();
//         console.log("Window closed!");
//     });
// });


// (Q11)

// var hideElement = document.getElementById("hideElement");

// hideElement.addEventListener("mouseout", function() {
//     hideElement.style.display = "none";
//     console.log("Element hidden on mouse out!");
// });




// Chapter (49-50 / Reading and Setting field values)


// (Q1)

// var userInput = document.getElementById("userInput");

// userInput.addEventListener("input", function() {
//     var inputValue = userInput.value;
//     console.log("User input:", inputValue);
// });

// (Q2)

// var checkbox = document.getElementById("checkbox");

// checkbox.addEventListener("change", function() {
//     var isChecked = checkbox.checked;
//     console.log("Checkbox value:", isChecked);
// });


// (Q3)

// var selectBox = document.getElementById("selectBox");

// selectBox.addEventListener("change", function() {
//     var selectedValue = selectBox.value;
//     console.log("Selected value:", selectedValue);
// });


// (Q4)

// var textField = document.getElementById("textField");
// textField.value = "Sample Text";
// console.log("Text placed in field:", textField.value);


// (Q5)

// var statusField = document.getElementById("status");
// var setStatusButton = document.getElementById("setStatusButton");

// var married = false;

// setStatusButton.addEventListener("click", function() {
//     if (!married) {
//         statusField.value = "available";
//         console.log("Status set to 'available'");
//     }
// });


// (Q6)



// (Q7)

var registrationForm = document.getElementById("registrationForm");

var username = document.getElementById("username");

var email = document.getElementById("email");

var password = document.getElementById("password");

var usernameError = document.getElementById("usernameError");

var emailError = document.getElementById("emailError");

var passwordError = document.getElementById("passwordError");

registrationForm.addEventListener("submit", function(event) {
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    var isValid = true;

    if (username.value.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters.";
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        emailError.textContent = "Invalid email address.";
        isValid = false;
    }

    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}