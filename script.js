document.addEventListener('DOMContentLoaded', function() {
    var consentBanner = document.getElementById('consent-banner');
    var acceptButton = document.getElementById('accept-btn');
    var declineButton = document.getElementById('decline-btn');

    if (!localStorage.getItem('cookieConsent')) {
        consentBanner.style.display = 'flex';
    }

    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        consentBanner.style.display = 'none';
    });

    declineButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        consentBanner.style.display = 'none';
    });
});
