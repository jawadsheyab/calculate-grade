function calculateGrade() {
    //Get the input value from the input field
    var markInput = document.getElementById("markInput");
    var mark = Number(markInput.value);
    
    //Get the reference to the result element and the image element
    var resultElement = document.getElementById("result");
    var gradeImg = document.getElementById("gradeImg");
    var studentName = document.getElementById("nameInput");
    let studentNameInput = studentName.value;

    //Check on the mark range and set the corresponding message and image source
    if (mark >= 0 && mark <= 49) {
        resultElement.textContent = `Sorry ${studentNameInput}! you have Failed.`;
        gradeImg.src = "./img/fail.png";
    } else {
        resultElement.textContent = `Congratulations ${studentNameInput}! you Passed.`;
        gradeImg.src = "./img/pass.png";
    }
}