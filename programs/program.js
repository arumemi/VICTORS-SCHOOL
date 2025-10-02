            
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
         if(program.classList.contains('masters')){
            program.classList.add('active')
            programDetail.innerHTML = `  
            <div class="container programDetail__container">
            <div class="programDetail__left">
               <h2>MASTERS</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, esse voluptatibus corrupti deleniti perspiciatis libero magnam ad tenetur id eum delectus facilis, vel earum, temporibus dignissimos mollitia distinctio necessitatibus facere.</p>
               <div class="programDetail__images">
                  <div><img src="../images/york uni.jpg" alt=""></div>
                   <div><img src="../images/boy standin to read.jpg" alt=""></div>
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

             else if(program.classList.contains('bsc')){
            program.classList.add('active')
            programDetail.innerHTML = `  
            <div class="container programDetail__container">
            <div class="programDetail__left">
               <h2>BACHELOR'S DEGREE</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, esse voluptatibus corrupti deleniti perspiciatis libero magnam ad tenetur id eum delectus facilis, vel earum, temporibus dignissimos mollitia distinctio necessitatibus facere.</p>
               <div class="programDetail__images">
                  <div><img src="../images/york uni.jpg" alt=""></div>
                   <div><img src="../images/boy standin to read.jpg" alt=""></div>
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
             else if(program.classList.contains('programT')){
            program.classList.add('active')
            programDetail.innerHTML = `  
            <div class="container programDetail__container">
            <div class="programDetail__left">
               <h2>TOP up program</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, esse voluptatibus corrupti deleniti perspiciatis libero magnam ad tenetur id eum delectus facilis, vel earum, temporibus dignissimos mollitia distinctio necessitatibus facere.</p>
               <div class="programDetail__images">
                  <div><img src="../images/york uni.jpg" alt=""></div>
                   <div><img src="../images/boy standin to read.jpg" alt=""></div>
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
                  <div><img src="../images/york uni.jpg" alt=""></div>
                   <div><img src="../images/boy standin to read.jpg" alt=""></div>
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
              