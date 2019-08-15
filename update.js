function updateVHostList() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/vhosts.php');
	xhr.onload = function () {
		if (xhr.status === 200) {
			var status = JSON.parse(xhr.responseText);
			
			//change html
			domains = [];
			status.forEach(function (domain) {
				domains.push('<li><a href="http://' + domain.valueOf() + '">' + domain.valueOf() + '</a></li>');
			});
			document.getElementById('vhostsList').innerHTML = domains.join(' ');
			
		} else {
			console.log('Request failed.  Returned status of ' + xhr.status);
		}
	};
	xhr.send();
};

updateVHostList();
