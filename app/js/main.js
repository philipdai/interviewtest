$( document ).ready(function() {
	$.getJSON( "assets/demo.json", function( data ) {
		var items = [];
		
		$.each( data, function( key, val ) {
			var str = "<tr><td colspan='2'><span class='number'>" + key + ".</span><span class='value'>"
								+ val + "</span></td><td class='delete'><a href=''>delete</a></td></tr>";

			$("#table").append(str);
			
			items.push(val);
		});

		$("#json").val(JSON.stringify(items));	

	});
});

$('#table').on('click', 'a', function (e) {
	var i = 0;
			str = "";
			items = [];
	
	e.preventDefault();	
	$(this).parent().parent().remove();
	$("#table tr").each(function() {
		i++;
		str = str + "<tr><td colspan='2'><span class='number'>" + i + ".</span><span class='value'>"
					+ $(this).children().children(".value").text() + "</span></td><td class='delete'><a href=''>delete</a></td></tr>";	
	});
	
	$("#table").empty();
	$("#table").append(str);
	
	$("#table tr").each(function() {
		items.push($(this).children().children(".value").text());
	});
	
	$("#json").val(JSON.stringify(items));
});

$('#add').click(function(e) {
	var items = [],
			items2 = [],
			key = Number($('#table .number').last().text()) + 1,
			val = $('#item').val(),
			str = "";
	
	e.preventDefault();
	
	if (val == null || val == '') return;
	
	str = "<tr><td colspan='2'><span class='number'>" + key + ".</span><span class='value'>"
						+ val + "</span></td><td class='delete'><a href=''>delete</a></td></tr>";

	$("#table").append(str);
	
	$('#item').val("");
	
	$("#table tr").each(function() {
		items.push($(this).children().children(".value").text());
	});
	
	$("#json").val(JSON.stringify(items));
});

$('#loadjson').click(function(e) {
	var items = [],
			key = 0,
			str = "",
			val = $('#json').val().replace(/"/g, '').replace('[', '').replace(']','');
	
	e.preventDefault();

	items = val.split(",");
	
	if (val == null || val == '') return;
	
	for(key = 0; key < items.length; key++) {
		var str = str + "<tr><td colspan='2'><span class='number'>" + (key+1) + ".</span><span class='value'>"
						+ items[key] + "</span></td><td class='delete'><a href=''>delete</a></td></tr>";
	}
		
	$("#table").empty();
	$("#table").append(str);	
	$('#item').val("");
	
});