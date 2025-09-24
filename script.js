window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');

  // Check if the loading screen has already been shown in this session
  if (!sessionStorage.getItem('loadingShown')) {
    // Show for 2 seconds, then fade out
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
    }, 2000);

    // Mark as shown
    sessionStorage.setItem('loadingShown', 'true');
  } else {
    // If already shown, hide immediately
    loadingScreen.style.display = 'none';
  }
});