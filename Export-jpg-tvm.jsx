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
var filename = prompt ("Entrer le nom du fichier JPEG pour TV Mag", "","Nom du fichier :");
var extension = filename.split('.').pop();
if(filename.split('.').length <= 1){
    extention = 'jpg';
    filename += '.jpg';
    }
var file = new File('//nas_vnx1.io.le-figaro.com/tvmag_inout$/production/TVM/import imagerie/Images/In_Imagerie/' + filename);
//local test path: var file = new File('/C/Users/rlaurent/Desktop/Scripts Photoshop/reception-tmp/' + filename);
//"\\nas_vnx1.io.le-figaro.com\tvmag_inout$\production\TVM\import imagerie\Images\In_Imagerie"

jpegSaveOptions = new JPEGSaveOptions()
jpegSaveOptions.embedColorProfile = true
jpegSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE
jpegSaveOptions.matte = MatteType.NONE
jpegSaveOptions.quality = 12
//app.activeDocument.exportdocument(file, jpgSaveOptions, true, Extension.LOWERCASE)
 

document.saveAs(file, jpegSaveOptions, true, Extension.LOWERCASE);

//recuperation de l'etat initial
document.activeHistoryState = history;
// restaurer les préférences a l'origine
app.preferences.rulerUnits = originalRulerUnits
//----------------------------------------------------
 