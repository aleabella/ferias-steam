import Foto1_1 from "./1_1feria.jpg" 
import Foto1_2 from "./1_2feria.jpg" 
import Foto1_3 from "./1_3feria.jpg" 
import Foto1_4 from "./1_4.jpg" 
import Foto1_5 from "./1_5feria.jpg" 
import Foto1_6 from "./1_6 feria.jpg" 
import Foto1_7 from "./1_7 feria.jpg" 
import Foto1_8 from "./1_8 feria.jpg" 
import Foto1_9 from "./1feria.png" 
import './Uno.css'
function Uno (){
    return (
        <>
            <div class="slideFeria">
     
     <h1>Primera Feria STEAM</h1>
 </div>
 <div class="tituloFeria">
 <img class="zoom" alt="Foto1_9" src={Foto1_9} className="headerindex"/>
     <h1>Primera Feria STEAM</h1>
     <a href="./ferias.html"><button class="back"><i class="fa-solid fa-arrow-left"></i></button></a>
     <h1>Nuestros Proyectos</h1>
     <br/>
     <h2><img src="..//assets/img/bx-calendar 2.png" alt="calendarioicon" />2017</h2>
     <hr/>
     <h3>Descripción de la Feria:</h3> 
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab
     </p> 
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum velit ut rerum reprehenderit culpa ullam! Ducimus, hic ut aliquid qui accusamus et porro repudiandae voluptates ipsa consequatur dolore ab</p> 
     <br/>
     <hr/>
     <div class="row">
         <div class="column">
             <img class="zoom" alt="Foto1_1" src={Foto1_1}/>
             <img  class="zoom" alt="Foto1_2" src={Foto1_2}/>
         </div>
 
         <div class="column">
             <img class="zoom" alt="Foto1_3" src={Foto1_3}/>
             <img class="zoom" alt="Foto1_4" src={Foto1_4}/>
         </div>
         
         <div class="column">
             <img class="zoom" alt="{Foto1_5" src={Foto1_5}/>
             <img class="zoom" alt="Foto1_6" src={Foto1_6}/>
         </div>
         
         <div class="column">
             <img class="zoom" alt="Foto1_7" src={Foto1_7}/>
             <img class="zoom" alt="Foto1_8" src={Foto1_8}/>
         </div>
    
     </div>
   
     
 </div>
 </>
    )
}

export default Uno;