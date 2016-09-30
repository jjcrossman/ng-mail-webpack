function inboxCtrl( $scope, mailService ) {

  function init () {
    $scope.selectedMessage = null;
    $scope.mail = mailService.getMail();
  }

  $scope.selectMessage = function ( message ) {
    $scope.selectedMessage = message;
  }

  init();

}

export default inboxCtrl; // you can use export default on line 1 before function inboxCtrl.
// like saying module.exports = inboxCtrl;
