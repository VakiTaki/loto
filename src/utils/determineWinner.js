export const determineWinner = (firstField, secondField, result) => {
   if (!result) return false

   let firstMatches = 0;
   let secondMatches = 0;

   for (let number of result) {
      if (firstField.includes(number)) {
         firstMatches++;
      }
      if (secondField.includes(number)) {
         secondMatches++;
      }
   }

   if (firstMatches === 4 || (firstMatches + secondMatches) === 4) {
      return true
   } else {
      return false
   }
}