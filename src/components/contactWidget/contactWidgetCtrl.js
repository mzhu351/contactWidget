'use strict';

angular.module('contactProto')
  .controller('contactWidgetCtrl', function($scope, $window, $modal) {
    $scope.data = {};
  
    //return 3 booleans from backend 
    //to decide display status of chat/shceduler status
    $scope.data.chatIsEnable = true;
    $scope.data.chatIsAvailable = true;
    $scope.data.schedulerIsEnable = true;
    
    //for Chat, click and open new window
    $scope.openChatWindow = function() {
      $window.open('//google.com');
    };

    //for Scheduler, click and trigger popover
    $scope.myval = false;
    $scope.showDiv = function() {
      $scope.myval = true;
    };
    $scope.hideDiv = function() {
      $scope.myval = false;
    };

    //open Scheduler Overlay on clickig the button "Schedule an appointment"
    $scope.openSchedulerOverlay = function() {
      $modal.open({
        controller: 'modalController as modal',
        templateUrl: 'components/contactWidget/schedulerOverlay.html'
      });
    };

  })
  .controller('modalController', function($modalInstance) {
    this.modalTitle = "Schedule an appointment to talk with us"
    this.modalText = 'Find a time that works for you in Timetrade Calendar';
    this.cancel = function() {
      $modalInstance.dismiss();
    }
  });