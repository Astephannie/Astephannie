$(document).ready(function() {
	$("#fcontacto").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'send.php',
			data: $(this).serialize(),
			success: function(data) {
				if (data.indexOf("Error") >= 0) {
					$("#respuesta").addClass("alert-danger");
				} else {
					$("#respuesta").addClass("alert-success");
				}				
				$("#respuesta").slideDown();
				$("#respuesta").html(data);
			},
			error: function(data, status) {
				$("#respuesta").addClass("alert-danger");
				$("#respuesta").slideDown();
				$("#respuesta").html(data);
			}
		});
		return false;
	});
});