export class sortStandingsTableValueConverter {
    toView(array) {
    
    if(array.length > 0) { 
    return array.sort((a, b) => {
        return (a.noOfPoints - b.noOfPoints) * (-1);
        })
    }
    }
  }