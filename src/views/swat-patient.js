Jenie.component({
	name: 'swat-patient',
	template: `
		<iframe src="https://docs.google.com/a/agapehospiceaz.com/forms/d/e/1FAIpQLSeiEBMrD0UtHQEJqMXJhLEp-55YdhXeUwX0EUezjePA-3ZAbw/viewform?embedded=true" frameborder="0"></iframe>
	`
});

// <div class="row">
// 	<div class="col-xs-12 form-sec">
// 		<h3>Patient Version</h3>
// 		<form>
// 			<fieldset>
// 				<legend><h1>Social Work Assessment Tool (SWAT)</h1></legend>
// 				<input type="text" class="col-xs-4" name="Patient ID#" placeholder="Patient ID"></input>
// 				<input type="date" class="col-xs-4" name="Patient ID#" placeholder="Date of Social Work Visits"></input>
// 				<fieldset class="radio">
// 					<legend>HOW WELL ARE PATIENT AND PRIMARY CAREGIVER DOING?</legend>
// 					<ol type="1">
// 						<li>Plans for the patients medical treatment match up with my own religious and cultural beliefs</li>
// 						<input type="radio" name="1-patient" value="1">Strongly Disagree
// 						<input type="radio" name="1-patient" value="2">Disagree
// 						<input type="radio" name="1-patient" value="3">Neutral
// 						<input type="radio" name="1-patient" value="4">Agree
// 						<input type="radio" name="1-patient" value="5">Strongly Agree
//
// 						<li>My room is arranged the way I want it (location, bed, pets, etc…).</li>
// 						<input type="radio" name="2-patient" value="1">Strongly Disagree
// 						<input type="radio" name="2-patient" value="2">Disagree
// 						<input type="radio" name="2-patient" value="3">Neutral
// 						<input type="radio" name="2-patient" value="4">Agree
// 						<input type="radio" name="2-patient" value="5">Strongly Agree
//
// 						<li>I am handling my feelings of grief pretty well (sadness, guilt, etc…).</li>
// 						<input type="radio" name="3-patient" value="1">Strongly Disagree
// 						<input type="radio" name="3-patient" value="2">Disagree
// 						<input type="radio" name="3-patient" value="3">Neutral
// 						<input type="radio" name="3-patient" value="4">Agree
// 						<input type="radio" name="3-patient" value="5">Strongly Agree
//
// 						<li>I have good support from my friends, family, place of worship, etc…</li>
// 						<input type="radio" name="4-patient" value="1">Strongly Disagree
// 						<input type="radio" name="4-patient" value="2">Disagree
// 						<input type="radio" name="4-patient" value="3">Neutral
// 						<input type="radio" name="4-patient" value="4">Agree
// 						<input type="radio" name="4-patient" value="5">Strongly Agree
//
// 						<li>I feel a higher purpose in life and a sense of connection with all.</li>
// 						<input type="radio" name="5-patient" value="1">Strongly Disagree
// 						<input type="radio" name="5-patient" value="2">Disagree
// 						<input type="radio" name="5-patient" value="3">Neutral
// 						<input type="radio" name="5-patient" value="4">Agree
// 						<input type="radio" name="5-patient" value="5">Strongly Agree
//
// 						<li>I have been extremely upset to the point that I am thinking about suicide or wanting to hasten my death.</li>
// 						<input type="radio" name="6-patient" value="5">Strongly Disagree
// 						<input type="radio" name="6-patient" value="4">Disagree
// 						<input type="radio" name="6-patient" value="3">Neutral
// 						<input type="radio" name="6-patient" value="2">Agree
// 						<input type="radio" name="6-patient" value="1">Strongly Agree
//
// 						<li>I feel fearful about dying.</li>
// 						<input type="radio" name="7-patient" value="5">Strongly Disagree
// 						<input type="radio" name="7-patient" value="4">Disagree
// 						<input type="radio" name="7-patient" value="3">Neutral
// 						<input type="radio" name="7-patient" value="2">Agree
// 						<input type="radio" name="7-patient" value="1">Strongly Agree
//
// 						<li>I am concerned about finances.</li>
// 						<input type="radio" name="8-patient" value="5">Strongly Disagree
// 						<input type="radio" name="8-patient" value="4">Disagree
// 						<input type="radio" name="8-patient" value="3">Neutral
// 						<input type="radio" name="8-patient" value="2">Agree
// 						<input type="radio" name="8-patient" value="1">Strongly Agree
//
// 						<li>I am concerned about whether I am physically safe in my home.</li>
// 						<input type="radio" name="9-patient" value="5">Strongly Disagree
// 						<input type="radio" name="9-patient" value="4">Disagree
// 						<input type="radio" name="9-patient" value="3">Neutral
// 						<input type="radio" name="9-patient" value="2">Agree
// 						<input type="radio" name="9-patient" value="1">Strongly Agree
//
// 						<li>I feel physically very uncomfortable.</li>
// 						<input type="radio" name="10-patient" value="5">Strongly Disagree
// 						<input type="radio" name="10-patient" value="4">Disagree
// 						<input type="radio" name="10-patient" value="3">Neutral
// 						<input type="radio" name="10-patient" value="2">Agree
// 						<input type="radio" name="10-patient" value="1">Strongly Agree
//
// 						<li>How likely do you think it is that the patients illness will be cured by doctors?</li>
// 						<input type="radio" name="11-patient" value="1">Extremely Likely
// 						<input type="radio" name="11-patient" value="2">Likely
// 						<input type="radio" name="11-patient" value="3">Neutral
// 						<input type="radio" name="11-patient" value="4">Not Likely
// 						<input type="radio" name="11-patient" value="5">Extremely Un-Likely
// 					</ol>
// 					<fieldset>
// 						<legend>Total Patient Score</legend>
// 						<div class="total">0</div>
// 					</fieldset>
// 					<div class="disclaimer">
// 						<p>NOTE: To calculate total scores: add the score for each item in the patient column to get a total patient score. Add the score for each item in the primary caregiver column to get a total primary caregiver score. </p>
// 						<p>The Social Work Assessment Tool was developed by the Social Work Outcomes Task Force of the Social Work Section, National Hospice and Palliative Care Organization, National Council of Hospice and Palliative Professionals. Members of the Task Force included Mary Raymer, ACSW, Dona Reese, Ph.D., MSW, Ruth Huber, Ph.D., MSW, Stacy Orloff, Ed. D., LCSW, and Susan Gerbino, Ph.D., MSW. Further information can be obtained f om the Social Worker Section, National Council of Hospice and Palliative Professionals, National Hospice and Palliative Care Organization, (703) 837-1500. </p>
// 						<p>©2008 National Hospice and Palliative Care Organization. All rights reserved.</p>
// 					</div>
// 			</fieldset>
// 		</form>
// 	</div>
// </div>
