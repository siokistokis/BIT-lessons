import Title from "./Title";
import "./SectionHot.css";
import HotCardList from "./HotCardList";
import PlantCard from "./PlantCard";


export default function SectionHot(allProducts) {
    return (
        <div className="light-bg">
            <div className="wrapper hot-section">
            <Title text1='Hottest ' text2='Plants' showLink={true} />
            {/* <HotCardList allProducts={allProducts} rating={5} /> */}

            <div className="hotCard-list">
            {allProducts.map((card) => (
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

            </div>
        </div>
        
    );
}