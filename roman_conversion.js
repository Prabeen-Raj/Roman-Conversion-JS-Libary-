function convertRomanToInteger(num) {
  let result=""
  var int = num
  var roman =   ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  var value =   [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  
  for(var i in roman){
      while(value[i]<=int){
               console.log(value[i],int)
                result += roman[i]
                int = int - value[i]
          }
  }
  return result
}
