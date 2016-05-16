function query200(id) {
    $.ajax({
        url: '/posts/' + id,
        method: 'DELETE',
        complete: function(r) {
            $('#status').html(r.status);
        }
    });
}

function query204() {
    $.ajax({
        url: '/posts/204',
        method: 'GET',
        complete: function(r) {
            $('#status').html(r.status);
        }
    });
}

function query404() {
    $.ajax({
        url: '/posts/-1',
        method: 'DELETE',
        complete: function(r) {
            $('#status').html(r.status);
        }
    });
}

function query451() {
    $.ajax({
        url: '/posts/666',
        method: 'GET',
        complete: function(r) {
            $('#status').html(r.status);
        }
    });
}

function query500() {
    $.ajax({
        url: '/posts',
        method: 'POST',
        complete: function(r) {
            $('#status').html(r.status);
        }
    });
}