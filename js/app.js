(function(){
  "use strict";

  angular
    .module("Entry", [
      "ui.router",
      "ngResource"
   ])

    .config([
    "$stateProvider",
    RouterFunction
  ])

  .factory( "EntryFactory", [
       "$resource",
       FactoryFunction
     ])

     .controller("EntryIndexController", [
         "EntryFactory",
         EntryIndexControllerFunction
     ])

     .controller("EntryShowController", [
      "EntryFactory",
      "$stateParams",
      EntryShowControllerFunction
    ])

    .controller("EntryNewController", [
      "EntryFactory",
      EntryIndexControllerFunction
  ])

  .controller("EntryEditController", [
    "EntryFactory",
    "$stateParams",
    EntryEditControllerFunction
  ])


  function FactoryFunction($resource) {
    return $resource("127.0.01:8080"),{},{
    upate: {
      method: 'PUT'
    }
  }}
}

function RouterFunction(stateProvider){(
  $stateProvider
  .state("entryIndex", {
    url: "/entries",
    templateUrl: "js/ng-views/index.html",
    controller: "entryIndexController",
    controllerAs: "vm"
})

  .state("entryShow", {
    url: "/entries/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "entriesShowController",
    controllerAs: "vm"
  })
  .state("entryNew", {
    url: "/entries/:id",
    templateUrl: "js/ng-views/new.html",
    controller: "entriesNewController",
    controllerAs: "vm"
  })
  .state("entryEdit", {
    url: "/entries/:id/edit",
    templateUrl: "js/ng-views/edit.html"
    controller: "EntryEditController"
    controllerAs: "vm"
  })
}
 function
  EntryIndexControllerFunction(EntryFactory) {
    this.entries = EntryFactory.query();
  }

  function
  EntryNewControllerFunction(EntryFactory) {
    this.entry = new EntryFactory
    this.create = function() {
    this.entry.$save()
    }
  }
function EntryShowControllerFunction(EntryFactory, $stateParams){
      this.entry= EntryFactory.get({id: $stateParams.id});

function
EntryEditControllerFunction(EntryFactory, $stateParams) {
  this.entry =EntryFactory.get({
    id: $stateParams.id
  })
  this.update = function( {
    this.entry.$update({
      id: $stateParams.id
  })
}
this.destroy = function( {
  this.entry.$delet($
    id: $stateParams.id
   })
  }
}
