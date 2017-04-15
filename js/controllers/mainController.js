// MAIN CONTROLLER
function mainController($scope) {
$scope.reponses = [];
// $scope.nom ='';
// $scope.prenom ='';
// $scope.email ='';

  $scope.add = function() {


  var rep = {
      noms : $scope.nom,
      prenoms : $scope.prenom,
      emails : $scope.email
    };
$scope.reponses.push(rep);

$scope.nom ='';
$scope.prenom ='';
$scope.email ='';
console.log(rep);
};
}
