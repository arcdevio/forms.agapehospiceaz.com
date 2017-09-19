Jenie.setup({
	router: {
		routes: [
			{
				path: '/',
				title: 'Agape Forms',
				component: 'view-index',
				file: '/views/view-index.js'
			},
			{
				path: '/complaint-grievance',
				title: 'Complaint Or Grievance',
				component: 'complaint-grievance',
				file: '/views/complaint-grievance.js'
			},
			{
				path: '/manager/complaint-investigation',
				title: 'Complaint Investigation',
				component: 'manager-complaint-investigation',
				file: '/views/manager/complaint-investigation.js'
			},
			{
				path: '/time-off-request',
				title: 'Time Off Request',
				component: 'time-off-request',
				file: '/views/time-off-request.js'
			},
			{
				path: '/incident-report',
				title: 'Incident Report',
				component: 'incident-report',
				file: '/views/incident-report.js'
			},
			{
				path: '/manager/incident-investigation',
				title: 'Manager Incident Investigation',
				component: 'manager-incident-investigation',
				file: '/views/manager/incident-investigation.js'
			},
			{
				path: '/swat-primary-caregiver',
				title: 'SWAT | Primary Caregiver Version',
				component: 'swat-primary-caregiver',
				file: '/views/swat-primary-caregiver.js'
			},
			{
				path: '/swat-patient',
				title: 'SWAT | Patient',
				component: 'swat-patient',
				file: '/views/swat-patient.js'
			},
			{
				path: '/swat-patient-caregiver',
				title: 'SWAT | Patient/Caregiver',
				component: 'swat-patient-caregiver',
				file: '/views/swat-patient-caregiver.js'
			},
			{
				path: '/mahc-10',
				title: 'MAHC 10',
				component: 'mahc-10',
				file: '/views/mahc-10.js'
			},
			{
				path: '/notice-medicare-non-coverage',
				title: 'Notice Of Medicare Non-Coverage',
				component: 'notice-medicare-non-coverage',
				file: '/views/notice-medicare-non-coverage.js'
			},
			{
				path: '/revocation-benefit',
				title: 'Revocation Of Benefit',
				component: 'revocation-benefit',
				file: '/views/revocation-benefit.js'
			},
			{
				path: /.*?/,
				title: '404',
				component: 'view-404',
				file: '/views/view-404.js'
			}
		]
	}
});



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
