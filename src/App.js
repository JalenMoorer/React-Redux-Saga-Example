import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import './App.css';


function RestaurantScheduler(props){
  const dates = [];
  const a = moment('2020-06-01');
  const b = moment('2020-07-01');

  const computeDates = (a,b) => {
    for (let m = moment(a); m.isBefore(b); m.add(1, 'days')) {
      dates.push(m.format('dddd-MM-DD'));
    }
  }

  computeDates(a,b);

  const workDayList = dates.map((item, i) => {
    const { length } = props.burgerData;

    // Circular array index lookup to get a Burger of the Day for each day in the month
    const burgerIndex = i % length === 16 ? length-1 : i % length;
    return (
      <WorkDay
      key={i}
      date={item}
      formattedDay={item.substring(0,item.indexOf('-')).toLowerCase()}
      schedule={props.scheduleData}
      burgerOfTheDay={props.burgerData[burgerIndex]}
    />
    )
  })

  return (
    <>
      <div className="title"><h1>React Redux Saga Example</h1></div>
      <div className="flexContainer">{workDayList}</div>
    </>
  )
}

function WorkDay(props) {

  const hasWorkDay = (user, workday) => {
    if (user.userId && user.workDays[workday] === true)
      return <li key={user.userId}>{user.userId}</li>;
    else 
      return false;
  }

  return (
    <div className="card">
    <div className="date">{props.date}</div>
    <div className="cardContainer">
      <div>
        <div className="special">
          <h3 className="specialHeading">Special by -  {props.burgerOfTheDay.createdByUser} </h3>
          <div className="burgerName">{props.burgerOfTheDay.name}</div>  
        </div>
      </div>
      <h3 className="schedule">On schedule:</h3>
      <ul className="scheduleList">
        {
          props.schedule.map(item => hasWorkDay(item, props.formattedDay))
        }
      </ul>
    </div>
    </div>
  )
}

function App() {

  const isLoading = useSelector(state => state.loading.isLoading);
  const burgerData = useSelector(state => state.burgers.data);
  const scheduleData = useSelector(state => state.schedule.data);
  const userData = useSelector(state => state.users.data);

  return (
    <div>
    {isLoading 
      ? <p>Loading...</p> 
      : (
        <RestaurantScheduler 
          burgerData={burgerData}
          scheduleData={scheduleData}
          userData={userData}
        />
        ) 
      }
    </div>
  );
}

export default App;
