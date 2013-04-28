'use strict';

function MainCtrl($scope, $http) {

  var map;

  $scope.parliamentary_constituencies = [];

  $scope.GetParliamentaryConstituencies = function() {
    $http({
      method: 'GET',
      url: 'data/GE2013/parliamentary/overall.json'
    }).success(function(data, status, headers, config) {
      $scope.parliamentary_constituencies = data;
    }).error(function(data, status, headers, config) {
      console.warn('Error loading Parliamentary Constituencies');
    });
  }();

  $scope.count = 0;
  $scope.$watch('parliamentary_constituencies', function() {

  });

  /* 
   * Initializations
   */

  (function() {

  })();
}

function GMapCtrl($scope, $rootScope, $routeParams, $timeout, $location) {

  var $main_map_canvas = $('#map-canvas');
  $rootScope._assets = $rootScope._assets || {};
  $rootScope._assets.googlemaps = $rootScope._assets.googlemaps || {};
  $rootScope._assets.googlemaps.orignal_marker_green = 'http://maps.google.com/mapfiles/marker_green.png';
  $rootScope._assets.googlemaps.orignal_marker_purple = 'http://maps.google.com/mapfiles/marker_purple.png';
  $rootScope._assets.googlemaps.marker_blue = 'images/marker_azure.png';
  $rootScope._assets.googlemaps.marker_red = 'images/marker_pink.png';
  $rootScope._active_marker = null;

  $rootScope.SetActiveMarker = function(constituency_code) {
    var marker = $('#map-canvas').gmap3({get: {id: "main_map_marker_" + constituency_code}});
    $rootScope._active_marker = marker;
  };

  $main_map_canvas.gmap3({
    map: {
      options: {
        center: new google.maps.LatLng(4, 108),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        streetViewControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
        },
        navigationControl: false,
        scrollwheel: true,
        streetViewControl: true,
        zoomControl: false
      }
    }
  });

  function main_map_add_marker(marker_order, marker_lat, marker_lng, marker_description) {
    var marker_id = 'main_map_marker_' + marker_order;
    $main_map_canvas.gmap3({
      marker: {
        id: marker_id,
        latLng: [marker_lat, marker_lng],
        options: {
          icon: $rootScope._assets.googlemaps.marker_red
        },
        events: {
          click: function(marker) {
            $rootScope._active_marker = marker;
            window.location.hash = '/details/' + marker_order;
          },
          mouseover: function(marker) {
            $('#' + marker_id).css({'display': 'block', 'opacity': 0}).stop(true, true).animate({bottom: '15px', opacity: 1}, 500);
          },
          mouseout: function(marker) {
            $('#' + marker_id).stop(true, true).animate({bottom: '50px', opacity: 0}, 500, function() {
              $(this).css({'display': 'none'});
            });
          }
        }
      },
      overlay: {
        latLng: [marker_lat, marker_lng],
        options: {
          content: marker_description,
          offset: {
            y: -42,
            x: -122
          }
        }
      }
    });
  }

  $scope.$watch('constituency_code', function() {
    if ($routeParams.constituency_code) {
      $rootScope.SetActiveMarker($routeParams.constituency_code);
    }
  });

  $scope.$watch('_active_marker', function(new_marker, old_marker) {
    if (old_marker) {
      old_marker.setAnimation(null);
      old_marker.setIcon($rootScope._assets.googlemaps.marker_red);
    }
    if (new_marker) {
      new_marker.setAnimation(google.maps.Animation.BOUNCE);
      new_marker.setIcon($rootScope._assets.googlemaps.marker_blue);
      $main_map_canvas.gmap3("get").panTo(new_marker.position);
    }
  });

  $scope.$watch('parliamentary_constituencies', function() {
    angular.forEach($scope.parliamentary_constituencies, function(value, key) {
      var desc = '<div id="main_map_marker_' + value.code + '" class="main_map_marker_info"><div class="location-description"> <div class="location-title"> <h2>P' + value.code + ' - ' + value.constituency + '</h2> <div class="location-subtitle"><p>' + value.state + '</p></div> </div> <div class="location-result">' + value.state + '</div> </div> <!-- .location-description --> </div> <!-- .main_map_marker_info -->';
      if (value.location) {
        main_map_add_marker(value.code, value.location.lat, value.location.lng, desc);
      }
    });
  });

  (function() {
    $timeout(function() {
      $rootScope.SetActiveMarker($routeParams.constituency_code);
    }, 1000);
  })();

}
