
import { Link } from 'react-router-dom';
import './Item.css'



const item = ({id, name, img, price, stock}) =>{
    return(

        <article className='CardItem'>
            <div className='ItemCards'>

                <header className='Header'>
                    <h2 className='ItemHeader'>

                        {name}

                    </h2>
                </header>
                <picture>
                   <Link to={`/item/${id}`}> <img src= {img} alt= {name} className='ItemImg'></img></Link>
                </picture>

                <section className='ItemInfo'>

                    <p className='Info'>
                      Precio: ${price}
                    </p>
                    <p className='Info2'>
                       Stock disponible: {stock} 
                    </p>

                    <div className='Info3'>
                        
                        <Link to={`/item/${id}`} className= 'Option'> Detalles</Link>

                    </div>
                </section>

                
                    
                
            </div>
            

        </article>
    )
}

export default item;