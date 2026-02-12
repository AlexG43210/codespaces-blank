let inputOne = document.querySelector(".questionOne")
let inputTwo = document.querySelector(".questionTwo")
let button = document.querySelector(".submitbutton")

button.addEventListener("click", function() {
  let answer1 = inputOne.value;
  console.log(answer1);
  let answer2 = inputTwo.value;
  console.log(answer2);
  let img = document.querySelector(".image")
  let para = document.querySelector(".type")
  
  if(answer1 <= 16 && answer2 === "Mild"){
    
     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSLq2mjfcOh1KwSXnqCpUj1CLBAREvbfZ-w&s";
    
    para.innerHTML = "Mozzarella!";
    
  }else if(answer1 <= 16 && answer2 === "Sharp"){
    
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WqPBKNNakrVOefh4Iq78q9vqdQgWin6kzw&s";
    
     para.innerHTML = "Cheddar Cheese!";
    
}else if(answer1 > 16 && answer2 ==="Salty"){
  
  img.src = "https://images.albertsons-media.com/is/image/ABS/960535214-C1N1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available";
  
   para.innerHTML = "Cojita!";
  
}else if(answer1 > 16 && answer2 === "Smoky"){
  
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5RY6oaOl0-OsbXGEHS-m8vQMTTJA6TZOTQ&s";
  
   para.innerHTML = "Gouda!";
  
}else{
  
  img.src = "https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png";
  
   para.innerHTML = "Error!"
}

});
      