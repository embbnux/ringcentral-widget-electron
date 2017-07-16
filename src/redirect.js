window.addEventListener('load', () => {
  const callbackUri = window.location.href;
  if (window.Bridge) {
    window.Bridge.sendLoginSuccessMessage(callbackUri);
  }
  window.close();
});
