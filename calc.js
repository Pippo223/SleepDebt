function getSleepHours(day) {
    switch (day) {
      case 'monday': return 8
      break
      case 'tuesday': return 5
      break
      case 'wednesday': return 6
      break
      case 'thursday': return 4
      break 
      case 'friday': return 7
      break
      case 'saturday': return 9
      break
      case 'sunday': return 7
      break
      default: return 'invalid day'
      break
    }
  }
  function getActualSleepHours() {
    return (getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+
  getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday'))
  }
  
  function getIdealSleepHours(hours) {
    return hours * 7
  }
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(6)
  
  if(actualSleepHours===idealSleepHours) {
    console.log('You got the perfect amount of sleep')
  }
  else if (actualSleepHours > idealSleepHours) {
   // console.log('More Sleep than Necessary')
    console.log('You got '+(actualSleepHours - idealSleepHours) +' hours of sleep than necessary. Get your lazy bum up')
  }
  else if (actualSleepHours < idealSleepHours) {
    //console.log('Less Sleep than Necessary')
    console.log('You got '+ (idealSleepHours - actualSleepHours) +' hour(s) less sleep than you needed this week. Get some rest')
  }
  }
  calculateSleepDebt()
  