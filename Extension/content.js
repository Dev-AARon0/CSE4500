
//alert("Alerts are somewhat alarming.")
setTimeout(afterNavigate(), 50000)
function afterNavigate() {
    console.log(location.pathname);
    if ('/watch' === location.pathname) {
        alert('Watch page!');
    }
    var folder = location.pathname;
    folder = folder.substr(0, folder.lastIndexOf('/'));
    console.log(folder);
    if('/channel' === folder || '/c' === folder || '/user' === folder){
        alert('Channel page!');
    }
}
