import $ from 'jquery';

function refreshWaypoints() {
  const $lazyImages = $('.lazyload');
  $lazyImages.on('load', function() {
    Waypoint.refreshAll();
  });
}

export default refreshWaypoints;
