

const btn=document.querySelector("#throttle");
    // Throttling Function
    const throttleFunction=(func, delay)=>{
     
      // Previously called time of the function
      let prev = 0; 
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime(); 
     
        // Logging the difference between previously 
        // called and current called timings
        console.log(now-prev, delay); 
         
        // If difference is greater than delay call
        // the function again.
        if(now - prev> delay){ 
          prev = now;
     
          // "..." is the spread operator here 
          // returning the function with the 
          // array of arguments
          return func(...args);  
        }
      }
    }


    document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
     var div = document.createElement("div");
     div.classList.add('imageDiv');
     div.style.left = dets.clientX+'px';
     div.style.top = dets.clientY+'px';

     document.body.appendChild(div);

     var image = document.createElement("img");
     image.setAttribute("src", "https://images.unsplash.com/photo-1655738532028-d2514cd8495b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");

     div.appendChild(image);
     document.body.appendChild(div);

     gsap.to(image,{
      y:"0",
      ease : Power3,
      duration : .5
     })

     gsap.to(image,{
      y : "100%",
      delay: .6,
      ease : Power2
     })

     setTimeout(() => {
      div.remove();
     }, 2000);
    }, 400));


     
