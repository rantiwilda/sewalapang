/* List of Functions */
function addModal( target, title, content ) {
	var html =
		'<div class="modal fade" id="' + target.substr(1) + '" tabindex="-1" role="dialog">' +
			'<div class="modal-dialog" role="document">' +
				'<div class="modal-content">' +
					'<div class="modal-header">' +
						'<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
							'<span aria-hidden="true">&times;</span>' +
						'</button>' +
						'<h4 class="modal-title">' + title + '</h4>' +
					'</div>' +

					'<div class="modal-body">' +
						content +
					'</div>' +

					'<div class="modal-footer">' +
						'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
						// '<button type="button" class="btn btn-primary">Save changes</button>' +
					'</div>' +

				'</div>' +
			'</div>' +
		'</div>'
	;
	$( 'body' ).append( html );
}

