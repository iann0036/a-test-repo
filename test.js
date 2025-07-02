function test() {
    console.log("Test function executed successfully!");
    return "Test completed";
}

function anotherFunction() {
    console.log("Another function executed!");
    return "Another function completed";
}

function main() {
    const testResult = test();
    console.log(testResult);

    const anotherResult = anotherFunction();
    console.log(anotherResult);
}

function setDisplay(id, status) {
    document.getElementById(id).style.display = status;
}

// Done
