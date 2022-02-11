var grade = prompt( "Enter Your Marks to check your grade.", "0 - 100" ) ;

if ( grade >= 50 && grade <60 ) {
    alert(`Your grade is D`);
} else if ( grade >= 60 && grade <70 ) {
    alert(`Your grade is C`);
} else if ( grade >= 70 && grade <80 ) {
    alert(`Your grade is B`);
} else if ( grade >= 80 && grade <90 ) {
    alert(`Your grade is A`);
} else if ( grade >= 90 && grade <101 ) {
    alert(`Your grade is A+`);
} else if ( grade >= 0 && grade <50 ) {
    alert(`Your grade is F`);
} else {
    alert(`You Entered incorrect Marks!!! `);
}
