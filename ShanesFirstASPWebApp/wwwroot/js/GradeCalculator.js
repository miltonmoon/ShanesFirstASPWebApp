var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    var numGrade = ((document.getElementByID("A") * 0.50) +
        (document.getElementById("GP") * 0.10) +
        (document.getElementById("Q") * 0.10) +
        (document.getElementById("E") * 0.20) +
        (document.getElementById("I") * 0.10))
    var letGrade = ""
    if (numGrade > 9) then letGrade = "A";
    else if (numGrade > 90 and numGrade < 94) then letGrade = "A-";
    else if (numGrade > 87 and numGrade < 90) then letGrade = "B+";
    else if (numGrade > 84 and numGrade < 87) then letGrade = "B";
    else if (numGrade > 80 and numGrade < 84) then letGrade = "B-";
    else if (numGrade > 77 and numGrade < 80) then letGrade = "C";
    else if (numGrade > 74 and numGrade < 77) then letGrade = "C";
    else if (numGrade > 70 and numGrade < 74) then letGrade = "C";
    else if (numGrade > 67 and numGrade < 70) then letGrade = "D";
    else if (numGrade > 64 and numGrade < 67) then letGrade = "D";
    else if (numGrade > 60 and numGrade < 64) then letGrade = "D";
    else if (numGrade < 60 then letGrade) = "E";

    alert("Number Grade = " + numGrade + " Letter Grade = " + letGrade);
});

//