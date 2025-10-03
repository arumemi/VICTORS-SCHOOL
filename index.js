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

      //starting annimation//
      AOS.init();


      
//package toggle section for schools

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
                    
                              <td>SIAM UNIVERSITY</td>
                              <td>BANGKOK THIALAND</td>
                           </tr>

 
                           <tr>
                              <td>SYNERGY UNIVERSITY</td>
                              <td>MALAYSIA</td>
                           </tr>

                            <tr>
                              <td>INTI INTERNATIONAL UNIVERSITY</td>
                              <td>NILAI MALAYSIS</td>
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
                           
                           
                              <td>IU INTERNATIONAL UNIVERSITY OF APPLIED SCIENCE</td>
                              <td>GERMANY</td>
                           </tr>

 
                           <tr>
                              <td>SRH  HAARLEM</td>
                              <td>GERMANY & NETHERLANDS</td>
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
                              <td>HOLMES INSTITUTE DUBLIN (HID)</td>
                              <td>LONDON, U.K</td>
                           </tr>


                           <tr>
                              <td>THOMAS MORE UNIVERSITY OF APPLIED SCIENCES</td>
                              <td>DUBLIN, IRELAND</td>
                           </tr>

                            <tr>
                              <td>C3S BUSSINESS SCHOOL</td>
                              <td>BARCELONA, SPAIN</td>
                           </tr>

                            <tr>
                              <td>DOMIAN ACADEMY</td>
                              <td>MALTA</td>
                           </tr>


                            <tr>
                              <td>LA VALLETTE INSTITUTE</td>
                              <td>MALTA</td>
                           </tr>

                            <tr>
                              <td>WESTERN BALKANS UNIVERSITY</td>
                              <td>ALBANIA</td>
                           </tr>

                            <tr>
                              <td>SYNERGY  UNIVERSITY</td>
                              <td>MOSCOW RUSSIA</td>
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
                           
                           
                              <td>PARK UNIVERSITY</td>
                              <td>PARKVILLE UNITED STATES</td>
                           </tr>

 
                           <tr>
                              <td>UNIVERSITY OF MASSACHUSETTS LOWELL</td>
                              <td>LOWELL UNITED STATES</td>
                           </tr>

                            <tr>
                              <td>CASCADIA COLLAGE</td>
                              <td>WASHINTON UNITED STATES</td>
                           </tr>
 
                           <tr>
                              <td>SPARTAN COLLAGE OF TECHNOLOGY</td>
                              <td>UNITED STATES</td>
                           </tr>

 
                           <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>UNIVERSITY CANADA WEST (UCA)</td>
                              <td>CANADA</td>
                           </tr>


                           <tr>
                              <td>COLLAGE OF THE CAYONS</td>
                           <tr>
                              <td>CALIFORNIA UNITED STATES</td>
                             
                           </tr>

                            <tr>
                              <td>B P P</td>
                              <td>LONDON, U.K</td>
                           </tr>

                            <tr>
                              <td>ANAHUAC UNIVERSITY</td>
                              <td>MEXICO, NORTH AMERICA</td>
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