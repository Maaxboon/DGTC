const testResultElement = document.getElementById("testResult");
const testResult = 0; // Test Result, would normally be calcualted
let icon = null; // Variable that will contain the image name
switch (
  testResult // Check the test result
) {
  case 0: // If this has the value 0
    icon = "pass.png"; // the image name 'pass.png' will be used
    break; // Abort the switch statement

  case 1: // If the test result has the value 1,
    icon = "info.png"; // the image name 'info.png' will be used
    break; // Abort the switch statement

  case 2: // If the test result has the value 2
    icon = "warning.png"; // the image 'warning.png' will be used
    break; // Abort the switch statement

  case 3: // If the test result has the value 3
    icon = "error.png"; // the image 'error.png' will be used
    break; // Abort the switch statement

  default:
    icon = "unknown.png"; // For all other images
}
testResultElement.src = "img/" + icon;
