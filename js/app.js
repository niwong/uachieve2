$(document).foundation();

$(document).ready(function() {

	function readMore() {
		event.preventDefault();
		$('.hero4').addClass('hero4extended');
		$('#readMore').css('display', 'none');
		$('.hero4text').append('<h3>it is imperative for students to transition from concrete algebra to the more symbolic language of algebra.  Developing abstract thinking skills is necessary to excel in math and the sciences.  The message for parents is clear, make sure your child is on track with math.  It is easier to learn the math now than to relearn it later.</h3><hr><h3>Inquiry-based approach to concepts and algorithms of whole numbers in addition to geometry and measurement (pre-algebra). Along with the more traditional methods of doing math with pencil and paper, there will be laboratory experiences on appropriate manipulatives with emphasis on conceptual understanding. I intend to build the students&rsquo; intellectual muscle with regards to problem-solving in math.</h3>');
	}

	$('#readMore').click(readMore);
});



