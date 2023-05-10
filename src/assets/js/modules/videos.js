/**
 * Videos
 */

$('.js-video-trigger').on('click', function(e) {
	const videoFrame = $(this).closest('.js-video').find('iframe');

	e.preventDefault();
	videoFrame.attr('src', videoFrame.attr('src') + '?autoplay=1');
	
	$(this).closest('.js-video').addClass('has-video-playing');
});
