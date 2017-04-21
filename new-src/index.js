
Jenie.services.pdf = function (element) {
	html2canvas(element, {
		onrendered: function (canvas) {
			var img = canvas.toDataURL("image/png");
			var doc = new jsPDF();
			doc.addImage(img, 'JPEG',20,20);
			doc.save(window.location.pathname + '.pdf');
		}
	});
};

Jenie.services.addEventListenersToTextareas = function () {
	var textareas = document.querySelectorAll('textarea');
	for (var i = 0; i < textareas.length; i++) {
		textareas[i].addEventListener('focusin', function() {
			this.style.height = '500px';
		});
		textareas[i].addEventListener('focusout', function() {
			this.style.height = 'initial';
		});
	}
};

Jenie.router.setup({
	routes: [
		{
			path: '/',
			title: 'Agape Forms',
			component: 'index-view'
		},
		{
			title: 'Incident Report',
			path: '/incident-report',
			component: 'incident-report'
		}
	]
});
