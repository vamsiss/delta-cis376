$(document).ready(function () {
    $('#btnGetFacts').click(function () {
        var userName = $('#userName').val().trim();
        var animalMessage = chooseAnimal(userName);
        var palindromeMessage = isPalindrome(userName) ? "Also, your name is a palindrome!" : "Also, your name is not a palindrome.";
        var letterCount = userName.replace(/[^a-zA-Z]/g, '').length;


        var combinedMessage = animalMessage + " " + palindromeMessage + ` It has ${letterCount} letter(s).`;


        $('#messageOutput').html(combinedMessage);
    });
});

function chooseAnimal(someInput) {
    let inputLength = someInput.replace(/[^a-zA-Z]/g, '').length;

    if (inputLength < 4) {
        return 'Your spirit animal is a slug 🐌.';
    } else if (inputLength >= 4 && inputLength <= 6) {
        return 'Your spirit animal is NOT a slug 🐌.';
    } else {
        return 'Your spirit animal is a majestic eagle 🦅.';
    }
}

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
