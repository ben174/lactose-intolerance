function bindListener() {
    $(".aoT").each(function(i, e) {
        jQuery(e).keyup(checkForCheese);
    });
}

function delayedBindListener() {
    setTimeout(bindListener, 2000);
}


function checkForCheese() {
    var re = /che.+se/i;
    var subject = jQuery(event.target).val();
    console.log("Checking for cheese: " + subject);
    var matches = subject.match(re)
    console.log(matches);
    if(matches) {
        cheesePanic();
    }
}

function cheesePanic() {
    /*
    document.location.href = "https://mail.google.com/?logout";
    var cheeseURL = chrome.extension.getURL("cheesefall.html");
    console.log(cheeseURL);
    chrome.tabs.update({
        url: cheeseURL
    });
    */
    window.open("https://mail.google.com/?logout");
    window.open("http://localhost/cheesefall.html");
}

function subjectUp() {
    bindListener();
}

jQuery('body').on('click', ".T-I-KE", delayedBindListener);
jQuery('body').on('keyup', ".aoT", subjectUp);
