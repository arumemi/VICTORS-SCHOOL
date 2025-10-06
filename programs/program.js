            
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
               <p>Admission requirements vary by country, school, and course of study. However, students looking to study BSc abroad must meet minimum admission requirements to qualify for admission.</p>
               <div class="programDetail__images">
                  <div><img src="../images/Students regent building.jpg" alt=""></div>
                   <div><img src="../images/nursing-placement student.jpg" alt=""></div>
               </div>

               <h4>bachelor's degree</h4>
               <p>Welcome to your BSc journey abroad! This is an exciting new chapter of learning whereby students can make new friends and also enjoy amazing experiences. Don't be afraid to step out of your comfort zone, explore, and make the most of our services.</p>

               <article>
                  <h5>Admission Requirements </h5>
                  <p>
                  1. Five credits in WAEC/NECO/GCE, including English
                     <br>
                     2. Secondary school diploma
                     <br>
                     3.Reference letters (preferrably From former school or employer)
                     <br>
                     4.  Updated C.V
                     <br>
                     5. Valid passport

                  </p>
               </article>

                <article>
                  <h4>Consultation</h4>
                  <p>
                  Your assigned education counsellor will help you select the right study destination, school, and course of study from our over 350 partner institutions based on your career goal and affordable budget. Consultation fee is  ($50)
                  </p>
               </article>
            
               <article>
                <h5>application</h5>
               <p>Once you send us the required documents and payment, your assigned  counsellor will start the application process. Our admission processing is FREE for some destinations . However , modest fee is applicable to some destinations.</p>
               </article>
               <article>

                  <h5>fun fact</h5>
                  <p>
                  In  many of our BSc programs abroad, your classmates may come from 50+ different countries , so you're learning alongside a truly international crowd. Thereby creating a lifetime of friendship and global connection in your future career.
                  <br>
                  Employers love graduates with international experience because it shows resilience , problem-solving and adaptability.
                  <br>
                  From the first day lost on a foreign campus to your first big exam abroad, these experiences turn into stories you'll tell for the rest of your life.

                  </p>
               </article>

                <article>
                  <h5>do you know?</h5>
                  <p>
                  We have schools that offers SCHOLARSHIP
                  FROM 10% TO 100% of the tuition fee!
                  <br>
                  We advise and provide proper guidance to help you explore  this scholarship opportunities. Overall, we help you meet all admission conditions BUT, processing fee will apply.
                  </p>
               </article>
                 <article>
                <h4>support program</h4>
               <p>We will guide and support you through the student visa application process! Note that we do not give visa , the embassay issues visa</p>
               </article>
                <article>
                  <h5>other destinations we have for you</h5>
                  <p>We also have universities and colleges in some African countries. If you will like to study and get to know other African countries, get in contact with us now!</p>
               </article>
               <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

               
               <!--=========== pricing SECECTION right =============-->
            </div>
            <div class="programDetail__right">
               <article>
                  <h4>school fee ranges from</h4>
                  <div>
                     <h2>£12,000 - £17,000</h2>
                     <P>You will NOT get full refund after the Confimation of Accpetance For Study (CAS) is issued.</P>
                  </div>
                  <div>
                   <h2>£500</h2>
                     <P>Non refundable fees once cast is issued</P>
                    
                  </div>
               </article>

               <article>
                  <h4> deposit is as low as</h4>
                  <div>
                    <h2>£4,000</h2>
                     <P>

                     </P>
                  </div>
                  
               </article>

               <article>
                  <h4>proof of funds</h4>
                  <div>
                     <P>This is a very impotant part of the admission processing in almost all our destinations. If you need help on this, we can advise you according to your circumstances.</P>
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
               <p>Looking to complete your degree abroad? Our International Top-Up Program gives you the chance to transfer credits  that will enable finish your studies faster and earn a globally recognized qualification.
               <br> Study in one of the world's top universities, gain international exposure and open doors to global career opportunities</p>
                  
               <div class="programDetail__images">
                  <div><img src="../images/masters-class.jpg" alt=""></div>
                   <div><img src="../images/Students-on-Campus-YSJ.jpg" alt=""></div>
               </div>

               <h4>top up</h4>
               <p>Ready to take the next step?
               
               Here's what you'll need to apply
               </p>

               <article>
                  <h5>Admission Requirements </h5>
                  <p>
                  1. Completed Diploma / HND / Associate Degree (or equivalent)
                  <br>
                  2. Official academic transcripts
                  <br>
                  3. Filled application form + personal statement
                  <br>
                  4.Recommendation letter (optional, but an advantage)
                  <br>
                  5. Valid passort

                  </p>
               </article>

                <article>
                  <h4>Consultation</h4>
                  <p>
                  Your assigned education counsellor will help you select the right study destination, school, and course from our over 350 partner institutions based on your career goal and budget. Consultation fee is  ($50)
                  </p>
               </article>
            
               <article>
                <h5>Application</h5>
               <p>
               Once you send us the required documents and payment, your assigned counsellor will start the application process. Our admission processing fee is FREE for some destinations . However ,depends on the country and the student's profile. Avg. processing fee is ($250)</p>
               </article>
               <article>

                  <h5>did you know ?</h5>
                  <p>
                  You can finish your degree in just 1 year with a Top-Up Program!
                  <br>
                  Your final degree is globally recognized.
                  <br>
                  You can still work while schooling and get post study work thereafter.
                  <br> 
                  A Top-Up degree gives you a career edge with international experience
                  </p>
               </article>

                
                 
                  
               <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

               
               <!--=========== pricing SECECTION right =============-->
            </div>
            <div class="programDetail__right">
               <article>
                  <h4>school fee ranges from</h4>
                  <div>
                     <h2>£11,000 - £13,000</h2>
                     <P>You will NOT get full refund after the Confimation of Accpetance For Study (CAS) is issued </P>
                  </div>
                  <div>
                  <h2>£500</h2>
                     <P>
                     Non refundable fees once CAS is issued
                     </P>
                     
                  </div>
               </article>

               <article>
                  <h4> deposit is as low as</h4>
                  <div>
                    <h2>£4,500</h2>
                     <P>And subsequent installment payments  will be shown in your admission offer letter</P>
                  </div>
                  
               </article>

               <article>
                  <h4>proof of funds</h4>
                  <div>
                     
                     <P>This is a very important part of the admission processing in almost all our destinations. If you need help on this, we can advise you according to your circumstances.</P>
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
               <p>
               Up grade your future- study Online, in our education without borders. 
               <br>Learn Anywhere<br> Succeed Everwhere<br>  100% Online <br> Flexible<br> Global
               </p>
                <div class="programDetail__images">
                  <div><img src="../images/online study-abroad-image.webp" alt=""></div>
                   <div><img src="../images/black boy reading.jpg" alt=""></div>
               </div>
               <h4>ONLINE PROGRAMS</h4>
               <p>
               Looking to upgrade your skills , boost your career or earn an International  degree without the hustle of getting visa, leaving your job or family behind? At ROCK STAR study abroad, we make that possible! 
               </p>

               <article>
                  <h5>Admission Requirements </h5>
                  <p>
                  1. Completed application form
                  <br>
                  2. Educational qualification - transcripts or certificate from previous studies
                  <br>
                  3. Valid identification - passport or government-issued ID
                  <br>
                  4. Statement of purpose - a short note why you want to study
                  <br>
                  5. Application fee - where applicable
                  </p>
               </article>

                <article>
                  <h4>benefits for you</h4>
                  <p>
                  * 100% online classes -flexible and convient.
                  <br>
                  * Possiblity to travel and work in the host country upon graduating
                  <br>
                  * Globally recognized programs
                  <br>
                  * Affordable tuition fee and easy payment plans
                  <br> 
                  * Learn at your pace - from phone, laptop or computer
                  </p>
               </article>
            
               <article>
                <h5>fun facts</h5>
               <p>
               1. People who school online are most likely to get an online job with slightly higher pay.
               <br>
               2. Online learning can save you up to 60% of study cost 
               <br>
               3. Gradutes of online programms are just as employable as traditional gradutes- sometimes even more, thanks to there digital skills!
             
               </p>
               </article>
               

               
                 
               <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

               
               <!--=========== pricing SECECTION right =============-->
            </div>
            <div class="programDetail__right">
               <article>
                  <h4>school fee ranges from</h4>
                  <div>
                     <h2>£2,500 - £4,000</h2>
                     
                  </div>
                  <div>
                     
                  </div>
               </article>

               <article>
                  <h4> deposit is as low as</h4>
                  <div>
                    <h2>£1,500</h2>
                     <P>And the next instalments payment will be arranged once the study begins</P>
                  </div>
                 
                     
                     
                 
               </article>

              
               </div>
            </div>
      
            `


            }

             
             else if(program.classList.contains('boarding')){
            program.classList.add('active')
            programDetail.innerHTML = `  
            <div class="container programDetail__container">
            <div class="programDetail__left">
               <h2>SECONDARY SCHOOL</h2>
               <p>
               Imagine earning your high school education while exploring the world, making friends from different cultures, and preparing for a global future! with ROCKSTAR Study Abroad Program, students don't just attend school- they embark on a life changing journey
               
               </p>
                <div class="programDetail__images">
                  <div><img src="../images/Activity-Center-student.webp" alt=""></div>
                   <div><img src="../images/School-Boys-in-the-Dining.jpg" alt=""></div>
               </div>

               <h4>high schools</h4>
               <p>
               Imgine this: Walking through the beautiful streets of London with friends on your way to class, or greeting new friends in the vibrant campus in Canada. Every day brings new adventure different cultures , fresh perspective and opportunites, that goes beyond the classroom</p>

               <article>
                  <h5>advantages </h5>
                  <p>
                  * Accredited international high schools in top destinations
                  <br>
                  * Safe and supportive boarding enviroments
                  <br>
                  * Exposure to new cultures , languages , and ideas
                  <br>
                  * Pathway to leading universities worldwide
                  <br>
                  * Accredited internationl curriculum
                  <br>
                  * Personal growth , independence, lifelong friendships and connections
                  
                  </p>
               </article>

                <article>
                  <h4>Consultation</h4>
                  <p>Your assigned education counsellors will help you and your guardian select the right study destination and schools. Consultation fee is ($50)
                  </p>
               </article>
            
               <article>
                <h5>support program</h5>
               <p>
               We will guide and support you through the student visa application process! All the way to your study destination. Making sure that you settle in just fine. We also offer a  long support progame for our high school students all the way to the university.
               </p>
               </article>
               

                
               
               <a href="../contact/contact.html" class="btn primary">Get Started Now!</a>

               
               <!--=========== pricing SECECTION right =============-->
            </div>
            <div class="programDetail__right">
               <article>
                  <h4>school fee ranges from</h4>
                  <div>
                     <h2>£15,000 - £18,000</h2>
                     <P>You will NOT get full refund after the Confimation of Accpetance For Study (CAS) is issued.</P>
                  </div>
                  
               </article>

               <article>
                  <h4> deposit is about</h4>
                  <div>
                    <h2>£8,500</h2>
                     <P>and the next instalmental payment will be paid after visa is issued or by arrangement with the school</P>
                  </div>
                  
               </article>

               <article>
                  <h4>proof of funds</h4>
                  <div>
                    
                     <P>This is a very important part of the admission processing in almost all our destinations. If you need help on this, we can advise you according to your circumstances</P>
                  </div>
               </article>
               </div>
            </div>
      
            `
             }



      });
   });
              