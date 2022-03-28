const navigator = {
  work:'serviceWorker',
  storage: 'webkitPersistentStorage',
  storage2: 'webkitTemporaryStorage',
  location: 'geolocation',
  dnd: 'doNotTrack',
  status: 'onLine',
  lan: 'languages',
};
let aProperty;
console.log("Navigator Object Properties");
for (aProperty in navigator) {
  console.log(aProperty);
}
console.log("Exiting from the loop!");