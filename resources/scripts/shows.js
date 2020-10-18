function openShow(typeName, tableName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tabcontenttable, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tabcontenttable = document.getElementsByClassName("tabcontenttable");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tabcontenttable.length; i++) {
        tabcontenttable[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    
    // Show the specific tab content
    document.getElementById(typeName).style.display = "block";

    // Show the specific tab table content
    document.getElementById(tableName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}
