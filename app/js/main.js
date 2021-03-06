;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);	

	$doc.ready(function() {
		// fullpage plugin
		$('#fullpage').fullpage({
			//Navigation
			// menu: '.navigation',
			lockAnchors: false,
			anchors:['Personal Information', 'Education', 'Skills', 'Professional Experience', 'Sample Projects'],
			navigation: true,
			navigationPosition: 'right',
			navigationTooltips: ['Personal Information', 'Education', 'Skills', 'Professional Experience', 'Sample Projects'],
			showActiveTooltip: false,
			slidesNavigation: true,
			slidesNavPosition: 'bottom',

			//Scrolling
			css3: true,
			scrollingSpeed: 700,
			autoScrolling: true,
			fitToSection: true,
			fitToSectionDelay: 1000,
			scrollBar: false,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			loopBottom: false,
			loopTop: false,
			loopHorizontal: true,
			continuousVertical: false,
			continuousHorizontal: false,
			scrollHorizontally: false,
			interlockedSlides: false,
			dragAndMove: false,
			offsetSections: false,
			resetSliders: false,
			fadingEffect: false,
			// normalScrollElements: '#element1, .element2',
			scrollOverflow: false,
			scrollOverflowOptions: null,
			touchSensitivity: 15,
			normalScrollElementTouchThreshold: 5,
			bigSectionsDestination: null,

			//Accessibility
			keyboardScrolling: true,
			animateAnchor: true,
			recordHistory: true,

			//Design
			controlArrows: true,
			verticalCentered: true,
			sectionsColor : ['#dddfd4', '#fae596', '#6ed3cf', '#daad86', '#98dafc'],
			paddingTop: '3em',
			paddingBottom: '10px',
			fixedElements: '.header, .footer',
			responsiveWidth: 0,
			responsiveHeight: 0,
			responsiveSlides: false,

			//Custom selectors
			sectionSelector: '.section',
			slideSelector: '.slide',

			lazyLoading: true,

			//events
			onLeave: function(index, nextIndex, direction){},
			afterLoad: function(anchorLink, index){},
			afterRender: function(){},
			afterResize: function(){},
			afterResponsive: function(isResponsive){},
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
		});
	});

})(jQuery, window, document);
