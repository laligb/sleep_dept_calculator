let getSleepHours = (day)=>{
  day = day.toLowerCase();
  switch (day){
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 9;
      break;
    case "sunday":
      return 10;
      break;
    default:
      return 8;

  }
}

function getActualSleepHours(){
    let days = ["monday", "tuesday", "wednesday",   "thursday", "friday", "saturday", "sunday"]
    let total = 0;
    for (day in days) {
      total += getSleepHours(day);
    }

    return total;
}

function getIdealSleepHours(number){
  let idealHours = number;
  return idealHours * 7;
}

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHour = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHour){
    console.log(`You average sleep hours are ${actualSleepHours /7 } which means that you got the perfect amount of sleep!`);
  }else if (actualSleepHours > idealSleepHour){
    console.log(`You average sleep hours are ${actualSleepHours /7 } which means that you sleep more than you need, try to sleep ${idealSleepHour / 7} hours`);
  }else{
    console.log(`You average sleep hours are ${actualSleepHours /7 } which means that you sleep less than you need, try to sleep ${idealSleepHour/7} hours`);
  }

}

calculateSleepDebt();
