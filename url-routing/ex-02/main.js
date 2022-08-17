function displayHash() {
    var theHash = window.location.hash;
    if (theHash.length == 0) { theHash = "_index"; }
    var elems = document.querySelectorAll("#app");
    
    elems[0].innerText = "Current Hash: " + theHash;
    return true;
  }
  window.addEventListener("hashchange", function() {
    console.log("hashchange event");
    displayHash();
  });
  window.addEventListener("DOMContentLoaded", function(ev) {
    console.log("DOMContentLoaded event");
    displayHash();
  });