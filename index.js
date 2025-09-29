  //start Swiper JS -->//


    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView:1,
      spaceBetween : 50,
      breakpoints:{
      599: {
        slidesPerView: 3
      }
      }
    });



//package section for schools

const packagesButtons = document.querySelectorAll('.packages__buttons button');
const packagesTableBody = document.querySelector('.packages tbody');

const removeActiveClassFromButtons = () =>{
   packagesButtons.forEach(button =>{
      button.classList.remove('active')
   });
};

   packagesButtons.forEach(button => { 
      button.addEventListener('click', ()  => { 
         removeActiveClassFromButtons()
         if(button.classList.contains('asia')){
            button.classList.add('active')
            packagesTableBody.innerHTML = `
                               <tr>
                    
                              <td>kesston uk</td>
                              <td>LONDON, U.K</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>YORK ST JOHN</td>
                              <td>LONDON, U.K</td>
                           </tr>
 
                           <tr>
                              <td>UNIVERSITYY OF CUMBRIA</td>
                              <td>LANCASTER, U.K</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                           
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>



            `
         }
         else if(button.classList.contains('europe')){
            
            button.classList.add('active')
            packagesTableBody.innerHTML =`
            <tr>
                           
                           
                              <td>olise COLLEGE</td>
                              <td>LONDON, U.K</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>YORK ST JOHN</td>
                              <td>LONDON, U.K</td>
                           </tr>
 
                           <tr>
                              <td>UNIVERSITYY OF CUMBRIA</td>
                              <td>LANCASTER, U.K</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                           
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


            
            `
         }

 
         else if(button.classList.contains('america')){
            
            button.classList.add('active')
            packagesTableBody.innerHTML =`
            <tr>
                           
                           
                              <td>olise COLLEGE</td>
                              <td>LONDON, U.K</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>YORK ST JOHN</td>
                              <td>LONDON, U.K</td>
                           </tr>
 
                           <tr>
                              <td>UNIVERSITYY OF CUMBRIA</td>
                              <td>LANCASTER, U.K</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                           
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                                   `

          } else if(button.classList.contains('australia')){
           
            button.classList.add('active')
            packagesTableBody.innerHTML =`
            <tr>
                          
                        
                              <td>fine girl COLLEGE</td>
                              <td>LONDON, U.K</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>YORK ST JOHN</td>
                              <td>LONDON, U.K</td>
                           </tr>
 
                           <tr>
                              <td>UNIVERSITYY OF CUMBRIA</td>
                              <td>LANCASTER, U.K</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                           
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>
                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>


            
            `
         }
      });
      });