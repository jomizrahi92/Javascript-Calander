window.onload = function(){
	startCalender();

	function startCalender() {
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
		var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var dateObject = new Date();
		var todaysDate = dateObject.getDate();
		var sDateObject = new Date();
		sDateObject.setTime(dateObject.getTime());
		var mDateObject = new Date();
		mDateObject.setTime(dateObject.getTime());

		buildCalender();

		function buildCalender(){
		var date = document.querySelector('#currentDay p');
		date.innerHTML += weekdays[dateObject.getDay()];

		var currentDate = document.querySelector('#currentDate p');
		currentDate.innerHTML += dateObject.getDate();
		}
	}
}