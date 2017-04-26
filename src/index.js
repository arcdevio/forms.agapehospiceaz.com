
Jenie.services.pdf = function (element) {
	html2canvas(element, {
		onrendered: function (canvas) {
			var imgData = canvas.toDataURL('image/png');
			var imgWidth = 8;
			var pageHeight = 11;
			var imgHeight = canvas.height * imgWidth / canvas.width;
			var heightLeft = imgHeight;

			var doc = new jsPDF('p', 'in');
			var positionTop = 0.125;
			var positionLeft = 0.125;

			doc.addImage(imgData, 'PNG', positionLeft, positionTop, imgWidth, imgHeight);
			heightLeft -= pageHeight;

			while (heightLeft >= 0) {
				positionTop = heightLeft - imgHeight;
				doc.addPage();
				doc.addImage(imgData, 'PNG', positionLeft, positionTop, imgWidth, imgHeight);
				heightLeft -= pageHeight;
			}

			var name = window.location.pathname.replace(/\//g, '-').replace(/^-/, '');

			doc.save(name + '.pdf');
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

Jenie.services.addEventListenerToRadio = function (element) {
	var radios = element.querySelectorAll('input[type=radio]');
	var totalElement = element.querySelector('.total');
	var sections = {};

	for (var i = 0, l = radios.length; i < l; i++) {
		radios[i].addEventListener('click', function (){
			sections[this.name] = parseInt(this.value);
			var total = 0;

			for (var name in sections) {
				total += sections[name];
			}
			console.log('Clicked');
			totalElement.innerText = total;
		});
	}
};

Jenie.router({
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
			title: 'Complaint/Grievance Form',
			path: '/complaint',
			component: 'view-complaint'
		},
		{
			title: 'SWAT | Primary Caregiver Version',
			path: '/swat-primary-caregiver',
			component: 'swat-primary-caregiver'
		},
		{
			title: 'SWAT | Patient',
			path: '/swat-patient',
			component: 'swat-patient'
		},
		{
			title: 'SWAT | Patient/Caregiver',
			path: '/swat-patient-caregiver',
			component: 'swat-patient-caregiver'
		},
		{
			title: '404',
			path: /.*?/,
			component: 'view-404'
		}
	]
});
