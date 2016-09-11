angular.module( "AngularMail" )
.controller( "inboxCtrl", function( $scope, mailService ) {
	function init() {
		$scope.selectedMessage = null;
		$scope.mail = mailService.getMail();
	}

	$scope.selectMessage = function( message ) {
		$scope.selectedMessage = message;
	}

	init();
} );
