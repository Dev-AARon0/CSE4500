
//alert("Alerts are somewhat alarming.")

function afterNavigate() {
    if ('/watch' === location.pathname) {
        alert('Watch page!');
    }
    if('/channel/' === location.pathname){
        alert('Channel page!')
    }
}
(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    if (event.propertyName === 'width' && event.target.id === 'progress') {
        afterNavigate();
    }
}, true);
// After page load
setTimeout(afterNavigate(), 50000)