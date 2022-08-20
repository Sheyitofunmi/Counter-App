//           METHOD 1
// get element from html
// const count = document.querySelector(".count");
// const addEl = document.querySelector(".add-btn");
// const subEl = document.querySelector(".sub-btn");
// const resetEl = document.querySelector(".reset-btn");


// // addeventlistener
// addEl.addEventListener("click",  () =>{
//   count.innerHTML ++;   
//   // console.log("add")
// });
// subEl.addEventListener("click",  () =>{
//   count.innerHTML --;   
//   // console.log("add")
// });
// resetEl.addEventListener("click",  () =>{
//   count.innerHTML = 0;   
//   // console.log("add")
// });

      // METHOD 2(Event delegation)

    const count = document.querySelector(".count");
    const buttonEl= document.querySelector(".buttons");
      // targeting all the buttons
    buttonEl.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-btn")) {
            count.innerHTML++;
            changeCountColor()
        }
        if (e.target.classList.contains("sub-btn")) {
            count.innerHTML--;
            changeCountColor()
        }
        if (e.target.classList.contains("reset-btn")) {
            count.innerHTML = 0;
            changeCountColor()
        }
        
    });

    // changing the count color
    function changeCountColor() {
        if (count.innerHTML > 0) {
            count.style.color ="yellow";
        }else if (count.innerHTML < 0) {
            count.style.color ="orangered";
            
        }else{
            count.style.color ="white"

        }
    };