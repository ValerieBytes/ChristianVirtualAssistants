document.getElementById('serviceRequestForm').addEventListener('submit', function(event){
    event.preventDefault();
    var request = document.getElementById('requestText').value;
    window.open('mailto:vntgnoir@gmail.com?subject=Service Request&body=' + encodeURIComponent(request));
});
