/*
  RenameItems.jsx for Adobe Illustrator
  Description: Script to batch rename selected items with many options 
                or simple rename one selected item / active layer
  Date: December, 2019
  Author: Sergey Osokin, email: hi@sergosokin.ru
  
  Installation: https://github.com/creold/illustrator-scripts#how-to-run-scripts
  
  Release notes:
  1.0 Initial version.
  1.0 Added option Find and replace string in all Layer names
  1.2 Added recursive search in Sublayers names
  1.3 Added renaming of the parent Symbol
  
  Donate (optional):
  If you find this script helpful, you can buy me a coffee
  - via YooMoney https://yoomoney.ru/to/410011149615582
  - via QIWI https://qiwi.com/n/OSOKIN
  - via Donatty https://donatty.com/sergosokin
  - via PayPal http://www.paypal.me/osokin/usd

  NOTICE:
  Tested with Adobe Illustrator CC 2018-2021 (Mac), 2021 (Win).
  This script is provided "as is" without warranty of any kind.
  Free to use, not for sale
  
  Released under the MIT license
  http://opensource.org/licenses/mit-license.php
  
  Check other author's scripts: https://github.com/creold
*/

//@target illustrator
app.preferences.setBooleanPreference('ShowExternalJSXWarning', false); // Fix drag and drop a .jsx file

function main() {
  var SCRIPT = {
        name: 'Rename Items',
        version: 'v.1.3'
      };
      
  if (documents.length == 0) {
    alert('Error\nOpen a document and try again.');
    return;
  }

  var doc = activeDocument,
      aLayer = doc.activeLayer,
      texts = initTitle(),
      target = texts[0], 
      placeholder = texts[1],
      start = 1;

  var enterTitleStr = 'Enter ' + target + ' name',
      rplcTitleStr  = 'Replace ' + target + ' name';

  // Create Main Dialog
  var dialog = new Window('dialog', SCRIPT.name + ' ' + SCRIPT.version, undefined);
      dialog.orientation = 'column';
      dialog.alignChildren = 'fill';

  // Name
  var grpName = dialog.add('group'); 
      grpName.alignChildren = 'fill';
      grpName.orientation = 'column'; 

  var nameTitle = grpName.add('statictext'); 
      nameTitle.text = 'Enter ' + target + ' name';
  var nameInp = grpName.add('edittext', [0, 0, 170, 30], placeholder); 
      nameInp.active = true;

  //  Add more options for selected Symbol
  if (selection.length == 1 && isSymbol(selection[0])) {
    var isRplcParent = dialog.add('checkbox', undefined, 'Rename parent symbol');
  }

  //  Add more options for multiple selection or layers
  if (selection.length > 1 || (selection.length == 0 && hasMultiLayer())) {
    var chkFind = dialog.add('checkbox', undefined, 'Find and replace in all');
    chkFind.helpTip = 'Enter the part of the name you want to replace.\n' + 
                        'E.g.: if you enter MY, it will replace all\n' +
                        'the MY occurrences in the names.'; 
    
    // Replace
    var grpRplc = dialog.add('group'); 
        grpRplc.orientation = 'row';
        grpRplc.enabled = false;

    var rplcTitle = grpRplc.add('statictext', undefined, 'Search string'); 
    var rplcInp = grpRplc.add('edittext'); 
        rplcInp.characters = 16;

    // Toggle Find & Replace input
    chkFind.onClick = function () {
      grpRplc.enabled = !grpRplc.enabled;
      nameTitle.text = (chkFind.value) ? rplcTitleStr : enterTitleStr;
    }

    if (selection.length > 1) { 
      var chkAutoInc = dialog.add('checkbox', undefined, 'Auto-numbering up'); 
          chkAutoInc.helpTip = 'Eg: name-1, name-2, etc.'; 
          chkAutoInc.value = true;

      var extra = dialog.add('group');
          extra.orientation = 'row';

      // Numeration
      var countTitle = extra.add('statictext', undefined, 'Start from'); 
      var countInp = extra.add('edittext', undefined, start); 
          countInp.preferredSize.width = 40;

      // Separator
      var sprtTitle = extra.add('statictext', undefined, 'Separator'); 
      var sprtInp = extra.add('edittext', undefined, '-'); 
          sprtInp.helpTip = 'E.g.: name-1, name-2, etc.'
          sprtInp.preferredSize.width = 40;

      // Toggle Auto-increment naming inputs
      chkAutoInc.onClick = function () {
        countInp.enabled = !countInp.enabled;
        sprtInp.enabled = !sprtInp.enabled;
      }

      countInp.onChange = function () { this.text = convertToNum(countInp.text, 1); }
      shiftInputNumValue(countInp);
    }
  }
  
  // Buttons
  var btns = dialog.add('group'); 
      btns.orientation = 'row';
      btns.alignChildren = ['center','center'];

  var cancel = btns.add('button', undefined, 'Cancel', { name: 'cancel' });
      cancel.helpTip = 'Press Esc to Close';
  var ok = btns.add('button', undefined, 'OK', { name: 'ok' });
      ok.helpTip = 'Press Enter to Run';
  
  // Copyright block
  var copyright = dialog.add('statictext', undefined, '\u00A9 Sergey Osokin. Visit Github');
      copyright.justify = 'center';
  
  copyright.addEventListener('mousedown', function () {
    openURL('https://github.com/creold');
  });
  
  cancel.onClick = dialog.close;

  ok.onClick = okClick;

  function okClick() {
    switch (selection.length) {
      case 0: // empty selection
        if (chkFind.value && rplcInp.text.length > 0) renameLayers(doc.layers);
        else aLayer.name = nameInp.text;
        break;
      case 1: // one object was selected
        selection[0].name = nameInp.text;
        if (isRplcParent !== undefined && isRplcParent.value) { 
          selection[0].symbol.name = nameInp.text;
        }
        break;
      default: // multiple objects were selected
        renameItems();
        break;
    }

    reopenPnl();
    dialog.close();
  }

  function renameLayers(_layers) {
    for (var i = 0, lyrLen = _layers.length; i < lyrLen; i++) {
      var iLayer = _layers[i];
      if (iLayer.layers.length > 0) renameLayers(iLayer.layers);
      
      var newName = iLayer.name.replaceAll(rplcInp.text, nameInp.text);
      if (newName != iLayer.name) {
        iLayer.name = newName;
      }
    }
  }

  function renameItems() {
    var count = convertToNum(countInp.text, 1);
    for (var i = 0, sLen = selection.length; i < sLen; i++) {
      var item = selection[i];
      if (!chkFind.value) item.name = nameInp.text;
      if (chkAutoInc.value) item.name += sprtInp.text + count;
      if (chkFind.value && rplcInp.text.length > 0) {
        item.name = item.name.replaceAll(rplcInp.text, nameInp.text);
      }
      
      count++;
    }
  }

  function shiftInputNumValue(item) {
    item.addEventListener('keydown', function (kd) {
      var step;
      ScriptUI.environment.keyboardState['shiftKey'] ? step = 10 : step = 1;
      if (kd.keyName == 'Down') {
        this.text = Number(this.text) - step;
        kd.preventDefault();
      }
      if (kd.keyName == 'Up') {
        this.text = Number(this.text) + step;
        kd.preventDefault();
      }
    });
  }
  
  dialog.show();
}

// Set title & placeholder for input
function initTitle() {
  var target, placeholder;
  switch (selection.length) {
    case 0: // empty selection
      target = 'layer';
      placeholder = activeDocument.activeLayer.name;
      break;
    case 1: // one object was selected
      target = isSymbol(selection[0]) ? 'symbol' : 'item';
      if (isSymbol(selection[0]) && selection[0].name == '') {
        placeholder = selection[0].symbol.name;
      } else {
        placeholder = selection[0].name;
      }
      break;
    default: // multiple objects were selected
      target = selection.length + ' items';
      placeholder = '';
      break;
  }
  return [target, placeholder];
}

function hasMultiLayer() {
  return activeDocument.layers.length > 1 || activeDocument.layers[0].layers.length > 0;
}

String.prototype.replaceAll = function(search, replacement) {
  return this.replace(new RegExp(search, 'g'), replacement);
};

function convertToNum(str, def) {
  // Remove unnecessary characters
  str = str.replace(/,/g, '.').replace(/[^\d.-]/g, '');
  // Remove duplicate Point
  str = str.split('.');
  str = str[0] ? str[0] + '.' + str.slice(1).join('') : '';
  // Remove duplicate Minus
  str = str.substr(0, 1) + str.substr(1).replace(/-/g, '');
  if (isNaN(str) || str.length == 0) return parseFloat(def);
  return parseFloat(str);
}

function isSymbol(item) {
  return item.typename === 'SymbolItem';
}

// Illustrator UI trick. Reopen layers panel for update names 
function reopenPnl() {
  app.executeMenuCommand('AdobeLayerPalette1'); // close
  app.executeMenuCommand('AdobeLayerPalette1'); // open
  redraw();
}

// Open link in browser
function openURL(url) {
  var html = new File(Folder.temp.absoluteURI + '/aisLink.html');
  html.open('w');
  var htmlBody = '<html><head><META HTTP-EQUIV=Refresh CONTENT="0; URL=' + url + '"></head><body> <p></body></html>';
  html.write(htmlBody);
  html.close();
  html.execute();
}

try {
  main();
} catch (e) {}