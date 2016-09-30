// We do all these imports in here, because app.js is the entry point we gave to webpack.

// const angular = require( "angular" );
import angular from "angular";
import uiRouter from "angular-ui-router"; //angular and uiRouter are scoped to only this file, because of Webpack. Webpack runs on node.

// Styles
import "./styles.css"; // all of these imports are to tell Webpack where dependencies/files are.

import inboxHtml from "./templates/inbox.html"

// Controllers
import inboxCtrl from "./controllers/inboxCtrl";
//Services
import mailService from "./services/mailService";
// const inboxCtrl = require( "./controllers/inboxCtrl" );

angular.module( 'AngularMail', [ uiRouter ] )

.controller( "inboxCtrl", inboxCtrl )
.service( "mailService", mailService )
.config( function ( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise( "/" );

  $stateProvider
    .state( 'inbox', {
      url: "/"
      , template: inboxHtml
      , controller: "inboxCtrl"
    } );
    // .state ( 'draft', {
    //   url: "/draft/:email"
    //   , templateUrl: "./src/templates/draft.html"
    //   , controller: "draftCtrl"
    // } )
    // .state ( 'contacts', {
    //   url: "/contacts"
    //   , templateUrl: "./src/templates/contacts.html"
    //   , controller: "contactsCtrl"
    // } );

} );
