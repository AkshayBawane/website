'use strict';

describe('Controller: DownloadCtrl', function () {

  // load the controller's module
  beforeEach(module('apiPlatformWebsite'));

  var DownloadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DownloadCtrl = $controller('DownloadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
