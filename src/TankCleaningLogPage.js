import './TankCleaningLogPage.css';
import React,{useState} from 'react';
import DatePicker from 'react-datepicker';




function TankCleaningLogPage() {

        const [selectedDate, setSelectedDate] = useState(null);

        const handleDateChange = (date) => {
            setSelectedDate(date);
        };
  

    return (
        <div>


            <h1 >Tank Cleaning Log</h1>
            <div className="column">
                {/* this is the beginning of what will be the feature to create a ttask */}
                <div className="content">
                    <h2 className="row"> Create A Task </h2>
                    <DatePicker 
                        name="datepickeercurrent"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="current date"
                        />

                    <textarea name="taskName">Task Name</textarea>
                    <textarea name="shortDesc">Short Description</textarea>

                    <div>
                        <h3> Reoccurs every </h3>
                        <h4>Day(s)</h4><textarea className="shortText" name="day">0</textarea>
                        <h4>Week(s)</h4><textarea className="shortText" name="week">0</textarea>
                        <h4>Month(s)</h4><textarea className="shortText" name="month">0</textarea>
                        <h4>Year(s)</h4><textarea className="shortText" name="year">0</textarea>
                        {/* i want this section to be formatted a certain way  */}
                        {/* with For being on the left side and the btns divided vertically on the right */}
                        <div>
                            <div className="columnForever">
                                <h3> For </h3>
                            </div>

                            <div className="column">
                                <button name="foreverBtn"> Indefinitely</button>
                                <textarea className="shortText" name="iterationEntry">0</textarea><h4>time(s)</h4>
                                
                            </div>

                        </div>

                        <h3>Starting</h3>
                        <DatePicker 
                        name="startingDate"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="current date"
                        />

                    </div>
                    <button name="createTask"> Create Task</button>
                    <button name="createTaskwithReminder"> Create Task w/Reminder</button>
                    <button name="clear"> Clear</button>


                </div>

                {/* record of an event  */}

                {/* this is to display reminders */}

                {/* this is to display tasks */}

                {/* this is to search through recorded events in the past */}

            </div>

        </div>

    );

}
export default TankCleaningLogPage;
