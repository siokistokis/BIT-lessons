import PlantCard from "./PlantCard";
import './DealsCardList.css';

export default function DealsCardList({allProducts, rating}){

    const sortedProducts = allProducts.sort((a, b) => b.discount - a.discount);
    const topDiscounted = sortedProducts.slice(0, 4);
 

    return(
        <div className="hotCard-list">
            {topDiscounted.map((card) => (
                <PlantCard
                    key={card.id}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    price={card.price}
                    showDiscount={true}
                    discount={card.discount}
                    
                />
            ))}
        </div>
   
    );
};



