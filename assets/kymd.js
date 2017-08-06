// KyMD.js By CKylin
dialogdiv = document.createElement('div');
dialogdiv.id = 'dialogs';
document.body.appendChild(dialogdiv);	var templete = document.createElement('script');
templete.type = 'text/templete';
templete.id = 'dialogtemplete';
var templetecontent = '';
templetecontent+= "    <dialog id=\'dialog\'>";
templetecontent+= "        <div id=\'dialog-card\' class=\'card dialog\'>";
templetecontent+= "        <div class=\'card-header\' id=\'dialog-header\'></div>";
templetecontent+= "        <div class=\'card-body\' id=\'dialog-contents\'></div>";
templetecontent+= "        <div class=\'card-footer card-footer-right\'>";
templetecontent+= "            <button class=\'primary\' id=\'dialog-ok\' onclick=\'dialog.ok();closeModals()\' style=\'display:none\'>Ok</button>";
templetecontent+= "            <button id=\'dialog-close\' onclick=\'dialog.callback();closeModals()\' style=\'display:inline-block\'>Close</button>";
templetecontent+= "        </div>";
templetecontent+= "        <div class=\'clear\'></div>";
templetecontent+= "    </div>";
templetecontent+= "    </dialog>";
templete.innerHTML = templetecontent;
document.body.appendChild(templete);
window.onload = (function(){
    removeClass(document.body,'preload');
});
function addClass(obj, cls){
    var obj_class = obj.className;
    var blank = (obj_class != '') ? ' ' : '';
    var added = obj_class + blank + cls;
    obj.className = added;
}
 
function removeClass(obj, cls){
    var obj_class = ' '+obj.className+' ';
    obj_class = obj_class.replace(/(\s+)/gi, ' ');
    var removed = obj_class.replace(' '+cls+' ', ' ');
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');
    obj.className = removed;
}
 
function hasClass(obj, cls){
    var obj_class = obj.className;
    var obj_class_lst = obj_class.split(/\s+/);
    var x = 0;
    for(x in obj_class_lst) {
        if(obj_class_lst[x] == cls) {
            return true;
        }
    }
    return false;
}

var dialog = {};
dialog.callback = (function(){console.log('dialog closed')});
dialog.ok = (function(){console.log('dialog oked')});

function dialoger(content = '',title = '',closebutton = 'Close',closecallback = (function(){console.log('dialog closed')}),okbutton = 'Ok',okcallback = ''){
    var div = document.getElementById('dialogs');
    div.innerHTML = document.getElementById('dialogtemplete').innerHTML;
    //showModal();
    dialogTitle(title);
    dialogContent(content);
    //if(typeof(closecallback)=='function'){
        dialogCloseButton(closebutton);
        dialog.callback = closecallback;
    //}
    if(typeof(okcallback)=='function'){
        dialogOkButton(okbutton);
        dialog.ok = okcallback;
    }
    showDialog()
}
var dialoge = '';
function showDialog(){
    dialoge = document.querySelector('dialog');
    dialogPolyfill.registerDialog(dialoge);
    // Now dialog acts like a native <dialog>.
    dialoge.showModal();
    addClass(document.getElementById('dialog-card'),'on')
    addClass(document.getElementById('dialog'),'show')
}
function closeModals(){
    addClass(document.getElementById('dialog-card'),'off');
    addClass(document.getElementById('dialog'),'hide')
    setTimeout((function(){dialoge.close()}),300);
    return false;
}
function dialogTitle(text = 'Alert'){
    return document.getElementById('dialog-header').innerHTML = text;
}
function dialogContent(text = 'Hello!'){
    return document.getElementById('dialog-contents').innerHTML = text;
}
function dialogCloseButton(text = 'Close'){
    document.getElementById('dialog-close').style.display = 'inline-block';
    return document.getElementById('dialog-close').innerHTML = text;
}
function dialogOkButton(text = 'Ok'){
    document.getElementById('dialog-ok').style.display = 'inline-block';
    return document.getElementById('dialog-ok').innerHTML = text;
}