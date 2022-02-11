var result = 75;

switch (result) {
    case result>=50 && result<60:
        console.log('Your Grade is D ');
        break;
    case result>=60 && result<70:
        console.log('Your Grade is C ');
            break;
    case result>=70 && result<80:
        console.log('Your Grade is B ');
            break;
    case result>=80 && result<90:
        console.log('Your Grade is A ');
            break;
    case result>=90 && result<101:
        console.log('Your Grade is A+');
            break;
    default:
        console.log('Your Grade is F ');
            break;
}
