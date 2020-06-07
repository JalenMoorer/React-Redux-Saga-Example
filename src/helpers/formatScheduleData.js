 function formatScheduleData(data) {
    const weekDays = {
      sunday: false, 
      monday: false, 
      tuesday: false,  
      wednesday: false, 
      thursday: false, 
      friday: false, 
      saturday: false, 
    }; // default workdays
  
    const weekDaysFromSchedule = data.reduce(function(acc, curr) {
      acc[curr] = true;
      return acc;
    }, {});
  
    return {...weekDays, ...weekDaysFromSchedule};
  }

  export default formatScheduleData;