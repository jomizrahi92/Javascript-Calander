window.onload = function() {
	startCalender();

	function startCalender() {
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var weekdaysSmall = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
		var dateObject = new Date();
		var todaysDate = dateObject.getDate();
		var sDateObject = new Date();
		sDateObject.setTime(dateObject.getTime());
		var mDateObject = new Date();
		mDateObject.setTime(dateObject.getTime());

		buildCalender();

		function buildCalender() {				
				var date = document.querySelector('#currentDay p');
				date.innerHTML += weekdays[dateObject.getDay()];

				var currentDate = document.querySelector('#currentDate p');
				currentDate.innerHTML += dateObject.getDate();

				var currentMonth = document.querySelector('#currentMonth');
				currentMonth.innerHTML += months[mDateObject.getMonth()] + ' ' + mDateObject.getFullYear();

				for (x in weekdaysSmall) {
					var daysOfWeek = document.querySelector('.day tr');
					daysOfWeek.innerHTML += '<th>' + weekdaysSmall[x] + '</th>';
				}

				var dateCounter = 1;
				mDateObject.setDate(dateCounter);
				var currentMonthIndex = mDateObject.getMonth();
				var dates = document.querySelector('.monthDate');
				
				var datesString = "";

				for (var i = 0; i < 6; i++) {
					datesString += '<tr>';
					
					for (var x = 0; x < 7; x++) {
						datesString += '<td';
						
						if ((mDateObject.getDate() == dateObject.getDate()) && (mDateObject.getMonth() == dateObject.getMonth()) && (mDateObject.getFullYear() == dateObject.getFullYear())) {
							datesString += ' id="today"';
						}
						
						datesString += '>';

						if ((mDateObject.getDay() == x) && (mDateObject.getMonth() == currentMonthIndex)) {
							datesString += mDateObject.getDate();
							dateCounter++;
							mDateObject.setDate(dateCounter);
						} else {
							datesString += '&nbsp;'
						}
						
						datesString += '</td>';
					}
					
					datesString += '</tr>';
				}
				
				if (mDateObject.getMonth() != currentMonthIndex) {
					mDateObject.setMonth(mDateObject.getMonth() - 1);
				}
				
				datesString += '</table>';
				
				dates.innerHTML = datesString;
			}
			
			//window.onkeydown = parseKeyboardInput;
		function parseKeyboardInput(e) {
			if (e.keyCode == '37') {
				prevMonth();
			} else if (e.keyCode == '39') {
				nextMonth();
			}
		}

		/*function prevMonth() {
			mDateObject.setMonth(mDateObject.getMonth() - 1);
			buildCalendar();
		}
		function nextMonth() {
			mDateObject.setMonth(mDateObject.getMonth() + 1);
			buildCalendar();
		}
		function dateClick(evt) {
			sDateObject.setDate(evt.target.innerHTML);
			sDateObject.setMonth(mDateObject.getMonth());
			sDateObject.setYear(mDateObject.getFullYear());

			var currentDayText = document.querySelector('#currentDayText');
			currentDayText.innerHTML = weekdays[sDateObject.getDay()];
			var currentDateText = document.querySelector('#currentDateText');
			currentDateText.innerHTML = sDateObject.getDate();
		}*/
	}
}