document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    var nom = document.getElementById('nom').value;
    var telephone = document.getElementById('telephone').value;
    var email = document.getElementById('email').value;
    var sujet = document.getElementById('sujet').value;
    var message = document.getElementById('message').value;

    var mailtoLink = "mailto:info.diaspoconstruc@gmail.com";
    mailtoLink += "?subject=Message de contact";
    mailtoLink += "&body=Nom:" + encodeURIComponent(nom);
    mailtoLink += "%0ATéléphone:" + encodeURIComponent(telephone);
    mailtoLink += "%0AEmail:" + encodeURIComponent(email);
    mailtoLink += "%0ASujet:" + encodeURIComponent(sujet);
    mailtoLink += "%0AMessage:" + encodeURIComponent(message);

    window.location.href = mailtoLink;
});