// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

const checkUserName = () => {
    const username = document.getElementById("usertext").value
    if (username === "") {
    document.getElementById("name_error").innerHTML += "<p>*username is empty</p>"
    setTimeout(() => {
        document.getElementById("name_error").innerHTML = ""
    }, 2000)
    return false
    }
    if (username.length > 15) {
        document.getElementById("name_error").innerHTML += "<p>*username is too long</p>"
        setTimeout(() => {
            document.getElementById("name_error").innerHTML = ""
        }, 2000)
        return false
        }
        if ( username.length < 8) {
            document.getElementById("name_error").innerHTML += "<p>*username is too short</p>"
            setTimeout(() => {
                document.getElementById("name_error").innerHTML = ""
            }, 2000)
            return false
            }
           
    return true
}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
const checkEmail = () => {
    const email = document.getElementById("emailtext").value
    if (!email.includes("@", 1) || /^[\!#$%&*_+|/>,<;{}[]()]*$/.test(email)) {
    document.getElementById("email_error").innerHTML += "<p>*Wrong email id</p>"
    setTimeout(() => {
        document.getElementById("email_error").innerHTML = ""
    }, 2000)
    return false
    }
    return true
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

const checkPassword = () => {
    const password = document.getElementById("passwordtext").value
    if (!/[0-9a-zA-Z]+/.test(password)) {
    document.getElementById("password_error").innerHTML +=
        "<p>*password must contain atleast one Uppercase, one number and special characters</p>"
    setTimeout(() => {
        document.getElementById("password_error").innerHTML = ""
    }, 2000)
    return false
    }
    return true
}


document.querySelector(".submit").addEventListener("click", (e) => {
    e.preventDefault()
    const validUserName = checkUserName()
    const validEmail = checkEmail()
    const validPassword = checkPassword()
    if (validUserName && validEmail && validPassword)
    console.log({
        userName: document.getElementById("usertext").value,
        email: document.getElementById("emailtext").value,
        password: document.getElementById("passwordtext").value,
    })
})
