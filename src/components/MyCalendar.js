import FullCalendar from  '@fullcalendar/react'
import dayGridPlugin from  '@fullcalendar/daygrid'
import interactionPlugin from  "@fullcalendar/interaction"; // needed for dayClick

function MyCalendar() {
	const handleDateClick = (arg) => { // bind with an arrow function
		alert(arg.dateStr)
	}

	return (
		     	<div style={{width: '500px', height: '600px'}}>
				<FullCalendar
					plugins={[ dayGridPlugin, interactionPlugin ]}
					dateClick={handleDateClick}
				/>
			</div>
		)
}

export default MyCalendar 