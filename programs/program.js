            
const programsMenu = document.querySelectorAll('.program');
const programDetail = document.querySelector('.programDetail');
            
const removeActiveClass = () =>{
   programsMenu.forEach(button =>{
      button.classList.remove('active')
   })
}
 programsMenu.forEach(program =>{
      program.addEventListener('click', ()  => { 
         removeActiveClass()
           if(program.classList.contains('bsc')){
            program.classList.add('active')
            programDetail.innerHTML = `  
            <div class="container programDetail__container">
            <div class="programDetail__left">
               <h2>BACHELOR'S DEGREE</h2>
               <p>Admission requirements vary by country, school, and course. However, students looking to study B.sc abroad must meet minimum admission requirements to qualify for our admission services.</p>
               <div class="programDetail__images">
                  <div><img src="../images/Students regent building.jpg" alt=""></div>
                   <div><img src="../images/nursing-placement student.jpg" alt=""></div>
               </div>

               <h4>bachelor's degree</h4>
               <p>Welcome to your BSc journey abroad! This is an exciting new chapter-full of learning , new friends and amazing experiences. Don't be afraid to step out of your comfort zone, explore, and make the most of our services.</p>

               <article>
                  <h5>Admission Requirements </h5>
                  <p>
                  1. Five credits in WAEC/NECO/GCE, including English
                     <br>
                     2. Secondary school diploma
                     <br>
                     3.Reference letters (preferrably From former school or empoyer)
                     <br>
                     4.  Updated C.V
                     <br>
                     5. Valid passport

                  </p>
               </article>

                <article>
                  <h4>Consultation</h4>
                  <p>
                  Your assigned education counsellors will help you select the right study destination, schools, and courses from over 350 partner institutions based on your career goals and funding strategy. Consultation fee is  ($50)
                  </p>
               </article>
            
               <article>
                <h5>application</h5>
               <p>Once you send us the required documents and payment, your assigned  counsellor will start the application process. Our admission processing fee is FREE for some destinations . However ,depends on the country and the student's profile. Avg. processing fee is  ($250)</p>
               </article>
               <article>

                  <h5>fun fact</h5>
                  <p>
                  In  many of our BSc programs abroad, your classmates may come from 50+ different countries , so you're learning alongside a truly international crowd. Thereby creating a life-Time of friends and global connection in your future career.
                  <br>
                  Employers love graduates with international experience because it shoes resilience , problem-solving and adaptability
                  <br>
                  from the first day lost on a foreign campus to your first bigexam abroad, these experiences turn into stories you'll tell for the rest of your life

                  </p>
               </article>

                <article>
                  <h5>do you know?</h5>
                  <p>
                  We have schools that offers schorlarships 
                  up to 100%.
                  We advise and provide proper guidance to help you explore  this scholarship opportunities. Overall, we help you meet your Proof of Fund requirement.
                  </p>
               </article>
                 <article>
                <h4>support program</h4>
               <p>We will guide and support you through the student visa application process! Note that we do not give visa , the embassay issues visa</p>
               </article>
                <article>
                  <h5>other destinations we have for you</h5>
                  <p>We also have universities and collages in other african countries. if you will like to study and get to know other African countries, get in contact with us now!</p>
               </article>
               <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

               
               <!--=========== pricing SECECTION right =============-->
            </div>
            <div class="programDetail__right">
               <article>
                  <h4>school fee ranges from</h4>
                  <div>
                     <h2>$11,000 - $15,000</h2>
                     <P>you will NOT get full refund after CAST (full meaning) is out.</P>
                  </div>
                  <div>
                     <P>Non refundable fees once cast is out</P>
                     <h2>$500</h2>
                  </div>
               </article>

               <article>
                  <h4> deposit is as low as</h4>
                  <div>
                    <h2>$3,500</h2>
                     <P>and the next instamental payment will be paid after visa is issued</P>
                  </div>
                  <div>
                     
                     <P>Non refundable fees for each new dependant</P>
                  </div>
               </article>

               <article>
                  <h4>proof of funds</h4>
                  <div>
                     <h2>$13,400</h2>
                     <P>Non refundable fees without dependant</P>
                  </div>
                  <div>
                     <h2>$100</h2>
                     <P>Non refundable fees for each new dependant</P>
                  </div>
               </article>
               </div>
            </div>
      
            `
             }

             
             else if(program.classList.contains('programT')){
            program.classList.add('active')
            programDetail.innerHTML = `  
            <div class="container programDetail__container">
            <div class="programDetail__left">
               <h2>TOP up program</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, esse voluptatibus corrupti deleniti perspiciatis libero magnam ad tenetur id eum delectus facilis, vel earum, temporibus dignissimos mollitia distinctio necessitatibus facere.</p>
               <div class="programDetail__images">
               <div class="programDetail__images">
                  <div><img src="../images/subject-civil-engineering-student.webp" alt=""></div>
               </div>

               <h4>masters</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi soluta neque suscipit, quod consequatur tempore ipsum sit rem animi.</p>

               <article>
                  <h5>here is the details of your masters </h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>

                <article>
                  <h4>masters in uk</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>
            
               <article>
                <h5>admition times</h5>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi soluta neque suscipit, quod consequatur tempore ipsum sit rem animi.</p>
               </article>
               <article>

                  <h5>school fees</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>

                <article>
                  <h5>facts about our masters program</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>
                 <article>
                <h4>support program</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi soluta neque suscipit, quod consequatur tempore ipsum sit rem animi.</p>
               </article>
                <article>
                  <h5>other destinations we have for you</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>
               <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

               
               <!--=========== pricing SECECTION right =============-->
            </div>
            <div class="programDetail__right">
               <article>
                  <h4>school fee ranges from</h4>
                  <div>
                     <h2>$11,000 - $15,000</h2>
                     <P>you will NOT get full refund after CAST (full meaning) is out.</P>
                  </div>
                  <div>
                     <P>Non refundable fees once cast is out</P>
                     <h2>$500</h2>
                  </div>
               </article>

               <article>
                  <h4> deposit is as low as</h4>
                  <div>
                    <h2>$3,500</h2>
                     <P>and the next instamental payment will be paid after visa is issued</P>
                  </div>
                  <div>
                     
                     <P>Non refundable fees for each new dependant</P>
                  </div>
               </article>

               <article>
                  <h4>proof of funds</h4>
                  <div>
                     <h2>$13,400</h2>
                     <P>Non refundable fees without dependant</P>
                  </div>
                  <div>
                     <h2>$100</h2>
                     <P>Non refundable fees for each new dependant</P>
                  </div>
               </article>
               </div>
            </div>
      
            `
             }

             
             else if(program.classList.contains('online')){
            program.classList.add('active')
            programDetail.innerHTML = `  
            <div class="container programDetail__container">
            <div class="programDetail__left">
               <h2>online program</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, esse voluptatibus corrupti deleniti perspiciatis libero magnam ad tenetur id eum delectus facilis, vel earum, temporibus dignissimos mollitia distinctio necessitatibus facere.</p>
               <div class="programDetail__images">
               <div class="programDetail__images">
                  <div><img src="../images/black boy studying.jpg""></div>
               </div>

               <h4>masters</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi soluta neque suscipit, quod consequatur tempore ipsum sit rem animi.</p>

               <article>
                  <h5>here is the details of your masters </h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>

                <article>
                  <h4>masters in uk</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>
            
               <article>
                <h5>admition times</h5>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi soluta neque suscipit, quod consequatur tempore ipsum sit rem animi.</p>
               </article>
               <article>

                  <h5>school fees</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>

                <article>
                  <h5>facts about our masters program</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>
                 <article>
                <h4>support program</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi soluta neque suscipit, quod consequatur tempore ipsum sit rem animi.</p>
               </article>
                <article>
                  <h5>other destinations we have for you</h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus illum explicabo, reprehenderit inventore consequuntur autem quod et eligendi, vero distinctio nulla culpa blanditiis est assumenda expedita reiciendis eius enim.</p>
               </article>
               <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

               
               <!--=========== pricing SECECTION right =============-->
            </div>
            <div class="programDetail__right">
               <article>
                  <h4>school fee ranges from</h4>
                  <div>
                     <h2>$11,000 - $15,000</h2>
                     <P>you will NOT get full refund after CAST (full meaning) is out.</P>
                  </div>
                  <div>
                     <P>Non refundable fees once cast is out</P>
                     <h2>$500</h2>
                  </div>
               </article>

               <article>
                  <h4> deposit is as low as</h4>
                  <div>
                    <h2>$3,500</h2>
                     <P>and the next instamental payment will be paid after visa is issued</P>
                  </div>
                  <div>
                     
                     <P>Non refundable fees for each new dependant</P>
                  </div>
               </article>

               <article>
                  <h4>proof of funds</h4>
                  <div>
                     <h2>$13,400</h2>
                     <P>Non refundable fees without dependant</P>
                  </div>
                  <div>
                     <h2>$100</h2>
                     <P>Non refundable fees for each new dependant</P>
                  </div>
               </article>
               </div>
            </div>
      
            `
             }



      });
   });
              