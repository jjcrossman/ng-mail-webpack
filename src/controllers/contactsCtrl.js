angular.module( 'AngularMail' ).controller( 'contactsCtrl', function ( $scope, $state, contactsService ) {

  function init () {
    $scope.contacts = contactsService.getContacts();
  }

  $scope.draftToContact = function ( contact ) {
    $state.go( "draft", { email: contact.email } );
  }

  init();

} );
