angular.module( "AngularMail", [ "ui.router" ] )
.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider
		.state( "inbox", {
			controller: "inboxCtrl"
			, url: "/"
			, templateUrl: "./src/templates/inbox.html"
		} )
		.state( "draft", {
			controller: "draftCtrl"
			, url: "/draft/:email"
			, templateUrl: "./src/templates/draft.html"
		} )
		.state( "contacts", {
			controller: "contactsCtrl"
			, url: "/contacts"
			, templateUrl: "./src/templates/contacts.html"
		} );

	$urlRouterProvider.otherwise( "/" );
} );
