#target Photoshop

// fixer les préférences sur pixels
var originalRulerUnits = app.preferences.rulerUnits
app.preferences.rulerUnits = Units.PIXELS


if(app.documents.length < 1){
    alert("Il n'y a pas de document ouvert! ");
}else{
   var document = app.activeDocument;
}
//sauvegarde de l'etat initial
var history = document.activeHistoryState;


//.---------------------------------------------------------------
var filename = prompt ("Entrer le nom du fichier que vous souhaiter sauvegarder", "","Nom du fichier :");
var extension = filename.split('.').pop();
if(filename.split('.').lenght <= 1){
    extention = 'png';
    filename += '.png';
    }
var file = new File('/C/Users/Remy/Desktop/destination/' + filename  );
var options = new ExportOptionsSaveForWeb();
options.format = SaveDocumentType.PNG;
options.PNG8 = false;
document.exportDocument(file, ExportType.SAVEFORWEB, options);

//recuperation de l'etat initial
document.activeHistoryState = history;
// restaurer les préférences a l'origine
app.preferences.rulerUnits = originalRulerUnits
//----------------------------------------------------
 