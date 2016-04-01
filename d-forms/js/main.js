(function ($) {

	$(document).ready( function () {


		//  W I T H   I C O N S

			$('.d-forms.with-icon, .d-forms.with-icon-only').each( function() {
				var icon = $(this).attr('data-icon');
				$(this).before('<span class="d-forms icon '+icon+'" ></div>');
				if ( $(this).is(':submit') ) $(this).prev('span').addClass('submit');
				else if ( $(this).is(':text') ) $(this).prev('span').addClass('input');
			});


		//  C H E C K B O X   A N D   R A D I O

			$(':checkbox').each( function() {
				$(this).css('opacity','0').before('<span class="d-forms elem checkbox" >&nbsp;</div>');
				if ( $(this).hasClass('single') ) $(this).prev('span').addClass('single');
				if ( $(this).is(':checked') ) $(this).parent().addClass('checked');
			});
			$(':radio').each( function() {
				$(this).css('opacity','0').before('<span class="d-forms elem radio" >&nbsp;</div>');
				if ( $(this).is(':checked') ) $(this).parent().addClass('checked');
			});

			var elem = $(':checkbox, :radio');
			var lbl = elem.parent();
			// Hover
			lbl.hover( function() {
				$(this).toggleClass('hover');
			});
			// Focus
			elem.focus( function() {
				$(this).parent().addClass('active');
			});
			// Blur
			elem.blur( function() {
				$(this).parent().removeClass('active');
			});
			// Click
			lbl.click( function() {
				$(this).children('input').focus();
				if ( $(this).children('input').is(':checkbox') ) {
					if ( $(this).children('input').is(':checked') ) $(this).addClass('checked');
					else $(this).removeClass('checked');
				}
				else if ( $(this).children('input').is(':radio') ) {
					var radio_group = $(this).children('input').attr('name');
					$('input[name="'+radio_group+'"]').parent().removeClass('checked');
					$(this).addClass('checked');
				}
			});


		//  S E L E C T

			$('select').each( function () {

				var slct = $(this);
				var options_amount = $(this).children('option').length;

				slct.hide().wrap('<div class="select"></div>');
				slct.after('<div class="checked"></div>');

				var $slct_checked = slct.next('div.checked');
				$slct_checked.text(slct.children('option').eq(0).text());

				var $slct_options = $('<ul />', {
					'class': 'options'
				}).insertAfter($slct_checked);

				for (var i = 0; i < options_amount; i++) {
					$('<li />', {
						text: slct.children('option').eq(i).text(),
						rel: slct.children('option').eq(i).val()
					}).appendTo($slct_options);
				}

				var $options = $slct_options.children('li');

				// Show options on select click
				$slct_checked.click( function (e) {
					e.stopPropagation();
					$('div.checked.active').each( function () {
						$(this).removeClass('active').next('ul.options').removeClass('opened');
					});
					$(this).toggleClass('active').next('ul.options').toggleClass('opened');
				});

				// Hide options on option select
				$options.click( function (e) {
					e.stopPropagation();
					$slct_checked.text($(this).text()).removeClass('active');
					slct.val($(this).attr('rel'));
					$slct_options.removeClass('opened');
				});

				// Hide options on outer click
				$(document).click( function () {
					$slct_checked.removeClass('active');
					$slct_options.removeClass('opened');
				});

			});

		//  F I L E

			$(':file').each( function() {
				$(this).next('input').addClass('d-forms elem button file-submit inline');
				$(this).wrap('<div class="d-forms elem file inline" ></div>').before('<span class="d-form info" >Choose a file</div>').before('<span class="d-forms icon file" ></span>');
			});
			$(':file').change( function(e) {
				$in = $(this);
				$in.parent().children('.info').html($in.val().split('\\').pop());
			});


        });

})(jQuery);
