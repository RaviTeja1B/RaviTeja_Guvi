function PalindromeCreator(str) { 
  
    let isPalindrome = (word) => {
      return word.toLowerCase() === word.split("").reverse().join("").toLowerCase()
    }
  
    let removeCharAt = (word, index, n=1) => {
      return word.slice(0, index) + word.slice(index+n)
    }
  
    if(isPalindrome(str)){
      return "palindrome"
    }
    else{
      for(let i=0; i<str.length; i++){
        //Remove only one character and check if it's Palindrome.
        //Remoing only one character will give the longest possible substring
        if((str.length > 3) && (isPalindrome(removeCharAt(str, i)))){
          return str[i]
        }
        if(str.length > 4){
          //Remove 2 character where both of them must not be adjacent
          let strTemp =  removeCharAt(str, i)
          for(let j=0; j<strTemp.length; j++){
            if((strTemp.length > 3) && (isPalindrome(removeCharAt(strTemp, i)))){
              return str[i] + str[i+j+1]
            }
          }
          
        }  
      }
      return "not possible"
    }
  }
  // Sample run
  console.log(PalindromeCreator("kjjjhjjj"));