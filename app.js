function facto(inp=prompt('usre input number')){

    if(inp == 1 || inp == 0){
        document.write("factorial of 1 or 0 is also :", inp)
    } 
    else{
        var res = 1
        for(var i = 2 ; i<= inp; i++){
            res *= i
        }
    }
    document.write(`${res} is a factorial of ${inp} <br>`)
   return (res)
  
  }
 
 facto ()




function palindrome(str = prompt('enter a string word')){
   var str_arr=str.split('')
   var str_rev = str_arr.reverse()
   var str_joint =str_rev.join('')
   
  if (str == str_joint) {
 
    document.write(`${str} is a palindrome word`)
  }
  else{
    
       document.write(`${str} is not a palindrome word`)
  }
  var string = str

  return string
} 

 palindrome ()



