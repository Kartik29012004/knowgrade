function calculateGrade() {
    const mark = document.getElementById("mark").value;
    let grade = "";
    if (mark >= 90 && mark <= 100) {
        grade = "A+";
    } else if (mark >= 100 && mark <= 10000) {
        grade = "no grade";
    } else if (mark >= 80 && mark <= 89) {
        grade = "A";
    } else if (mark >= 70 && mark <= 79) {
        grade = "B+";
    } else if (mark >= 60 && mark <= 69) {
        grade = "B";
    } else if (mark >= 50 && mark <= 59) {
        grade = "C+";
    } else if (mark >= 40 && mark <= 49) {
        grade = "C";
    } else if (mark >= 30 && mark <= 39) {
        grade = "D+";
    } else if (mark >= 20 && mark <= 29) {
        grade = "D";
    } else {
        grade = "E";
    }

    const result = document.getElementById("result");

    if (grade === "D+" || grade === "D" || grade === "E") {
        result.innerText = "Student has not passed. Grade: " + grade;
    } else {
        result.innerText = "Student has passed. Grade: " + grade;
    }
}