define(['app'], function (_app) {
  'use strict';

  var _app2 = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var angularModule = ['$scope', '$http']; /***
                                            * (c) 2017 by duo.uno
                                            *
                                            ***/

  angularModule.push(function (scope, http) {
    console.log('init drivesController');

    scope.editDrive = {};
    scope.selections = {
      formats: ['raw', 'qcow2'],
      medias: ['disk', 'cdrom']
    };

    scope.createDrive = function () {
      http.post('/api/drives', scope.editDrive).then(function (data) {
        scope.reloadDrives();
        scope.editDrive = {};
      });
    };

    scope.reloadDrives = function () {
      return http.get('api/drives').then(function (data) {
        return scope.drives = data.data;
      });
    };
    scope.reloadDrives();
  });

  _app2.default.controller('drivesController', angularModule);
});