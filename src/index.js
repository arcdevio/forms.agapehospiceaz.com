
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

Jenie.services.addEventListenersToTextareas = function (element) {
	var textareas = element.querySelectorAll('textarea');

	for (var i = 0, l = textareas.length; i < l; i++) {
		textareas[i].addEventListener('keyup', function(){
			if (this.clientHeight < this.scrollHeight) {
				this.style.height = this.scrollHeight + 'px';
			} else {
				this.style.height = 'auto';
			}
		});
	}
};

Jenie.services.addEventListenerToRadio = function () {
	var radios = document.querySelectorAll('input[type=radio]');
	var totalElement = document.querySelector('.total');
	var sections = {};

	for (var i = 0, l = radios.length; i < l; i++) {
		radios[i].addEventListener('click', function (){
			sections[this.name] = parseInt(this.value);
			var total = 0;

			for (var name in sections) {
				total += sections[name];
			}

			totalElement.innerText = total;
		});
	}
};

Jenie.router.setup({
	base: '/',
	routes: [
		{
			path: '/',
			title: 'Agape Forms',
			component: 'view-index'
		},
		{
			title: 'Incident Report',
			path: '/incident-report',
			component: 'incident-report'
		},
		{
			title: 'Manager Incident Investigation',
			path: '/manager/incident-investigation',
			component: 'manager-incident-investigation'
		},
		{
			title: 'SWAT | Primary Caregiver Version',
			path: '/swat-primary-caregiver',
			component: 'swat-primary-caregiver'
		},
		{
			title: '404',
			path: /.*?/,
			component: 'view-404'
		}
	]
});
