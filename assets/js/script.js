
document.addEventListener("DOMContentLoaded", () => {
  const cookieBannerId = "cookie-banner";
  const localStorageKey = "cookiesAccepted";

  // Check if cookies have already been accepted
  if (!localStorage.getItem(localStorageKey)) {
      showCookieBanner();
  }

  // Show the cookie banner
  function showCookieBanner() {
      const banner = document.getElementById(cookieBannerId);
      if (banner) {
          banner.style.display = "block";
      }
  }

  // Accept cookies and hide the banner
  const acceptButton = document.getElementById("accept-cookies");
  if (acceptButton) {
      acceptButton.addEventListener("click", () => {
          localStorage.setItem(localStorageKey, "true"); // Store acceptance in localStorage
          const banner = document.getElementById(cookieBannerId);
          if (banner) {
              banner.style.display = "none"; // Hide the banner
          }
      });
  }
});