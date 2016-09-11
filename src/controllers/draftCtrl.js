angular.module( "AngularMail" )
.controller( "draftCtrl", function( $scope, $stateParams ) {
	$scope.message = {
		to: $stateParams.email
	};
	
	$scope.sendMessage = function() {
		$scope.message = {};
	}
} );
