// Check if a document is open
if (app.documents.length > 0) {
    var myDocument = app.activeDocument;
    
    // Check if anything is selected
    if (myDocument.selection.length > 0) {
        
        // Iterate through selected items
        for (var i = 0; i < myDocument.selection.length; i++) {
            var mySelection = myDocument.selection[i];
            
            // Check if the selected object is on the page
            if (mySelection.parentPage != null) {
                var myPage = mySelection.parentPage;
                
                // Get page margins
                var topMargin = myPage.marginPreferences.top;

                // Set the left margin depending on the page number's parity
                var leftMargin = (myPage.documentOffset % 2 === 0) ? myPage.bounds[1] + myPage.marginPreferences.left : myPage.marginPreferences.left;
                
                // Set the width and height of the selected object
                mySelection.geometricBounds = [
                    topMargin, // Top edge
                    leftMargin, // Left edge
                    myPage.bounds[2] - myPage.marginPreferences.bottom, // Bottom edge (height)
                    myPage.bounds[3] - myPage.marginPreferences.right // Right edge (width)
                ];
            } else {
                alert("The selected object is not on the page.");
            }
        }
        
    } else {
        alert("You have nothing selected.");
    }
} else {
    alert("No document is open.");
}