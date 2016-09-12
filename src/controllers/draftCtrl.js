angular.module( 'AngularMail' ).controller( 'draftCtrl', function ( $scope, $stateParams ) {

  $scope.draft = {
    to: $stateParams.email
  }

  $scope.clearDraft = function () {
    $scope.draft = {};
  }

} );
