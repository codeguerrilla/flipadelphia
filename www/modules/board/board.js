"use strict";

angular.module('board', [])
.controller('BoardCtrl', function($scope, TILESET) {
    $scope.shuffleTiles = function () {
        $scope.tiles = _.shuffle(TILESET);
    }
    
    $scope.drawTileCard = function () {
        var drawnTile,
            card = $scope.tileCards.deck.pop();
        $scope.tileCards.discard.push(card);
        
        drawnTile = _.find($scope.tiles, {"id": card});
        if (drawnTile.level === "tile-flooded") {
            drawnTile.level = "tile-lost";
        } else {
            drawnTile.level = "tile-flooded";
        }
    }
    
    $scope.tiles = TILESET;
    $scope.tileCards = {
        deck: _.shuffle(_.pluck(TILESET, "id")),
        discard: []
    }
})
.directive('gameBoard', function() {
    return {
        restrict: "A",
        templateUrl: "modules/board/board.html",
        controller: "BoardCtrl"
    };
})
.constant('TILESET', [
    {
        id: 1,
        name: "1",
        start: 1,
        relic: 0
    },
    {
        id: 2,
        name: "2",
        start: 2,
        relic: 0
    },
    {
        id: 3,
        name: "3",
        start: 3,
        relic: 0
    },
    {
        id: 4,
        name: "4",
        start: 4,
        relic: 0
    },
    {
        id: 5,
        name: "5",
        start: 5,
        relic: 0
    },
    {
        id: 6,
        name: "6",
        start: 6,
        relic: 0
    },
    {
        id: 7,
        name: "7",
        start: 0,
        relic: 1
    },
    {
        id: 8,
        name: "8",
        start: 0,
        relic: 1
    },
    {
        id: 9,
        name: "9",
        start: 0,
        relic: 2
    },
    {
        id: 10,
        name: "10",
        start: 0,
        relic: 2
    },
    {
        id: 11,
        name: "11",
        start: 0,
        relic: 3
    },
    {
        id: 12,
        name: "12",
        start: 0,
        relic: 3
    },
    {
        id: 13,
        name: "13",
        start: 0,
        relic: 4
    },
    {
        id: 14,
        name: "14",
        start: 0,
        relic: 4
    },
    {
        id: 15,
        name: "15",
        start: 0,
        relic: 0
    },
    {
        id: 16,
        name: "16",
        start: 0,
        relic: 0
    },
    {
        id: 17,
        name: "17",
        start: 0,
        relic: 0
    },
    {
        id: 18,
        name: "18",
        start: 0,
        relic: 0
    },
    {
        id: 19,
        name: "19",
        start: 0,
        relic: 0
    },
    {
        id: 20,
        name: "20",
        start: 0,
        relic: 0
    },
    {
        id: 21,
        name: "21",
        start: 0,
        relic: 0
    },
    {
        id: 22,
        name: "22",
        start: 0,
        relic: 0
    },
    {
        id: 23,
        name: "23",
        start: 0,
        relic: 0
    },
    {
        id: 24,
        name: "H",
        start: 0,
        relic: 0
    }
]);