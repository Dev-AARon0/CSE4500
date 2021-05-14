
//alert("Alerts are somewhat alarming.")
setTimeout(afterNavigate(), 50000)
function afterNavigate() {
    console.log(location.pathname);
    if ('/watch' === location.pathname) {
       // alert("https://socialblade.com/");
        //alert(document.getElementById("upload-info").innerHTML);
        if (window.confirm('Click "ok" to open channel\'s social blade in new tab.')) 
        {
            var a =document.createElement('a');
            a.setAttribute('target', '_blank')
            a.href = 'https://socialblade.com/'
            a.click()
        }
    }
    var folder = location.pathname;
    folder = folder.substr(0, folder.lastIndexOf('/'));
    console.log(folder);
    if('/channel' === folder || '/c' === folder || '/user' === folder){
        alert('Channel page!');
    }
}

function vidSocial() {

}
