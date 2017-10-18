Oxe.component.define({
	name: 'view-index',
	html: `
		<div class="section-tiles">
			<h2>Company Forms</h2>
			<hr>
			<a href="/complaint-grievance">
				<i class="fa fa-file-text"></i>
				<h3>Complaint Or Grievance</h3>
			</a>
			<a href="/manager/complaint-investigation">
				<i class="fa fa-file-text"></i>
				<h3>Complaint Investigation</h3>
				<span>(managers only)</span>
			</a>
			<a href="/time-off-request">
				<i class="fa fa-file-text"></i>
				<h3>Time Off Request</h3>
			</a>
			<a href="/sick-call">
				<i class="fa fa-file-text"></i>
				<h3>Sick Call</h3>
				<span>(managers only)</span>
			</a>
		</div>
		<div class="section-tiles">
			<h2>Patient Forms</h2>
			<hr>
			<a href="/incident-report">
				<i class="fa fa-file-text"></i>
				<h3>Incident Report</h3>
			</a>
			<a href="/manager/incident-investigation">
				<i class="fa fa-file-text"></i>
				<h3>Incident Investigation</h3>
				<span>(managers only)</span>
			</a>
			<a href="/mahc-10">
				<i class="fa fa-file-text"></i>
				<h3>MAHC 10</h3>
			</a>
		</div>
		<div class="section-tiles">
			<h2>Social Work</h2>
			<hr>
			<a href="/swat-primary-caregiver">
				<i class="fa fa-file-text"></i>
				<h3>SWAT - Primary Caregiver</h3>
			</a>
			<a href="/swat-patient">
				<i class="fa fa-file-text"></i>
				<h3>SWAT - Patient</h3>
			</a>
			<a href="/swat-patient-caregiver">
				<i class="fa fa-file-text"></i>
				<h3>SWAT - Patient &amp; Caregiver</h3>
			</a>
		</div>
		<div class="section-tiles">
			<h2>Other</h2>
			<hr>
			<a href="/notice-medicare-non-coverage">
				<i class="fa fa-file-text"></i>
				<h3>Notice Of Medicare Non Coverage</h3>
			</a>
			<a href="/revocation-benefit">
				<i class="fa fa-file-text"></i>
				<h3>Revocation Of Benefit</h3>
			</a>
		</div>
	`
});
