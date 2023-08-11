import './card.css'




   const Card = (props ) =>  {
    console.log(props)
     return (
          
        <div class="card" >

       <div class="container">
         <div className="colors" style={{backgroundColor:` ${props .colors}`}}> </div>
       <h4>{props.title}</h4>
       <h5>{props.code}</h5>
            
          </div>
        </div>
        


      );
       }
export default  Card;
