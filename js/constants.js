var constantModule = angular.module('uchiwa.constants', []);

// Themes
constantModule.value('THEMES', [
  {name: 'uchiwa-default'},
  {name: 'uchiwa-dark'}
]);

// Version
constantModule.constant('VERSION', {
  uchiwa: '0.23.0'
});
