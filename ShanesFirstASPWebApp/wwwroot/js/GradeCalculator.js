$("#submitButton").click(function () {
    var A = parseInt($("#A").val() * 0.50);
    var GP = parseInt($("#GP").val() * 0.10);
    var Q = parseInt($("#Q").val() * 0.10);
    var E = parseInt($("#E").val() * 0.20);
    var I = parseInt($("#I").val() * 0.10);

    var numGrade = A + GP + Q + E + I;
    var letGrade = '';
    
    if (numGrade > 94) { letGrade = "A"; }
    else if (numGrade >= 90 && numGrade < 94) { letGrade = "A-"; }
    else if (numGrade >= 87 && numGrade < 90) { letGrade = "B+"; }
    else if (numGrade >= 84 && numGrade < 87) { letGrade = "B"; }
    else if (numGrade >= 80 && numGrade < 84) { letGrade = "B-"; }
    else if (numGrade >= 77 && numGrade < 80) { letGrade = "C"; }
    else if (numGrade >= 74 && numGrade < 77) { letGrade = "C"; }
    else if (numGrade >= 70 && numGrade < 74) { letGrade = "C"; }
    else if (numGrade >= 67 && numGrade < 70) { letGrade = "D"; }
    else if (numGrade >= 64 && numGrade < 67) { letGrade = "D"; }
    else if (numGrade >= 60 && numGrade < 64) { letGrade = "D"; }
    else { letGrade = "E"; }

    alert("Number Grade = " + numGrade + " Letter Grade = " + letGrade);

});