app.bringToFront();

if (!documents.length) {
    alert('No open document found. Open a document and try again.');
    throw new Error('No document');
}

var doc = app.activeDocument;
var counter = 1;

for (var i = 0; i < doc.pathItems.length; i++) {
    try {
        doc.pathItems[i].name = "MFK" + i;
    } catch (e) {}
}

for (var j = 0; j < doc.pathItems.length; j++) {
    try {
        doc.pathItems[j].name = "Path " + counter;
        counter++;
    } catch (e) {}
}

alert('Successfully Done! Total paths: ' + (counter - 1));
