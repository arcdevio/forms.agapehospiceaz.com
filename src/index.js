
// Jenie.services.addEventListenersToTextareas = function (element) {
// 	var textareas = element.querySelectorAll('textarea');
//
// 	for (var i = 0, l = textareas.length; i < l; i++) {
// 		textareas[i].addEventListener('keyup', function(){
// 			if (this.clientHeight < this.scrollHeight) {
// 				this.style.height = this.scrollHeight + 'px';
// 			} else {
// 				this.style.height = 'auto';
// 			}
// 		});
// 	}
// };
//
// Jenie.services.addEventListenerToRadio = function (element) {
// 	var radios = element.querySelectorAll('input[type=radio]');
// 	var totalElement = element.querySelector('.total');
// 	var sections = {};
//
// 	for (var i = 0, l = radios.length; i < l; i++) {
// 		radios[i].addEventListener('click', function (){
// 			sections[this.name] = parseInt(this.value);
// 			var total = 0;
// 			for (var name in sections) {
// 				total += sections[name];
// 			}
// 			console.log('Clicked');
// 			totalElement.innerText = total;
// 		});
// 	}
// };
//
// Jenie.services.addEventListenerToCheckbox = function (element) {
// 	var checkbox = element.querySelectorAll('input[type=checkbox]');
// 	var totalElement = element.querySelector('.total');
// 	var sections = {};
//
// 	for (var i = 0, l = checkbox.length; i < l; i++) {
// 		checkbox[i].addEventListener('click', function (){
// 			sections[this.name] = parseInt(this.value);
// 			var total = 0;
// 			// console.log(sections);
// 			for (var name in sections) {
// 				total += sections[name];
// 			}
// 			// console.log(total);
// 			totalElement.innerText = total;
// 		});
// 	}
// };

Jenie.router({
	hash: true,
	routes: [
		{
			path: '/',
			title: 'Agape Forms',
			component: 'view-index'
		},
		{
			title: 'Complaint Or Grievance',
			path: '/complaint-grievance',
			component: 'complaint-grievance'
		},
		{
			title: 'Time Off Request',
			path: '/time-off-request',
			component: 'time-off-request'
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
			title: 'MAHC 10',
			path: '/mahc-10',
			component: 'mahc-10'
		},
		{
			title: 'Notice Of Medicare Non-Coverage',
			path: '/notice-medicare-non-coverage',
			component: 'notice-medicare-non-coverage'
		},
		{
			title: 'Revocation Of Benefit',
			path: '/revocation-benefit',
			component: 'revocation-benefit'
		},
		{
			title: '404',
			path: /.*?/,
			component: 'view-404'
		}
	]
});
