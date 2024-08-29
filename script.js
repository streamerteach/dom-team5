window.onload = function() {
    // Lyssna efter händelser
    const elements = document.querySelectorAll('.team-member');
    elements.forEach(elem => elem.addEventListener('mouseenter', evt => {
        evt.target.style.border = 'solid';
    }));
    elements.forEach(elem => elem.addEventListener('mouseleave', evt => {
        evt.target.style.border = 'none';
    }));
}
var editTitle = function(e) {
    // Ändra "team-title"
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?

}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
}
