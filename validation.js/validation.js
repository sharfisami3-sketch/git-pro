// Register Validation
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let error = document.getElementById("error");

        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            error.textContent = "جميع الحقول مطلوبة";
            return;
        }

        if (password.length < 6) {
            error.textContent = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
            return;
        }

        if (password !== confirmPassword) {
            error.textContent = "كلمتا المرور غير متطابقتين";
            return;
        }

        error.style.color = "green";
        error.textContent = "تم إنشاء الحساب بنجاح ✔";
    });
}

// Login Validation
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;
        let error = document.getElementById("loginError");

        if (email === "" || password === "") {
            error.textContent = "يرجى إدخال جميع البيانات";
            return;
        }

        error.style.color = "green";
        error.textContent = "تم تسجيل الدخول بنجاح ✔";
    });
}
