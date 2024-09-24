if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./Service_Worker.js') 
      .then(registration => {
        console.log('ServiceWorker registrado con éxito en el scope:', registration.scope);
      })
      .catch(error => {
        console.error('Fallo al registrar el ServiceWorker:', error);
      });
  });
}