// Setup Lifecycle Events
function appPause() {
    //alert("Pause"); // This alert makes the app not work, don't alert here
    console.log("pause");
}

function appResume() {
    alert("Resume");
    console.log("resume");
}

function needIdeaPressed() {
    alert("idea pressed");
}

function ready() {
    alert("hello");
    document.addEventListener('resume', appResume);
    document.addEventListener('pause', appPause);
    document.addEventListener('needidea',needIdeaPressed);
}

function loaded() {
    // Cordova is ready for native integration/plugins/cordova specific
    document.addEventListener('deviceready', ready);
}

window.addEventListener('load',loaded);

