#target Photoshop

// fixer les préférences sur pixels
var originalRulerUnits = app.preferences.rulerUnits
app.preferences.rulerUnits = Units.PIXELS

function exportMethode() {

    if(app.documents.length == 0){

    alert("Il n'y a pas de document ouvert! ");
    return;

}else{
   var document = app.activeDocument;
}

//sauvegarde de l'etat initial
var history = document.activeHistoryState;

var filename = prompt ("Entrer le nom du fichier PNG pour TV Mag", "","Nom du fichier :");
var extension = filename.split('.').pop();
if(filename.split('.').length <= 1){
    extention = 'png';
    filename += '.png';
    }
var file = new File('//nas_vnx1.io.le-figaro.com/tvmag_inout$/production/TVM/import rct/autres/' + filename);

var options = new ExportOptionsSaveForWeb();
options.format = SaveDocumentType.PNG;
options.PNG8 = false;
document.exportDocument(file, ExportType.SAVEFORWEB, options);

//recuperation de l'etat initial
document.activeHistoryState = history;
// restaurer les préférences a l'origine
app.preferences.rulerUnits = originalRulerUnits
};

exportMethode();
 