import { useState, useEffect } from 'react';
import './BestCardList.css';
import BestCard from './BestCard';

export default function BestCardList(){
    const [bestcards, setBestCards] = useState([]);

    useEffect(() => {
        const fetchBestCards = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/siokistokis/8e9786b17500edcae279e07879cfeec8/raw/1102fb00d4c7dcb2495bb21f3963170425de868c/besttags.json'); 
                const data = await response.json();
                    console.log(data);
               
                const bestCardsWithImages = await Promise.all(data.map(async (bestCard) => {
                        const imagePath = await
                        import(`../img/bestSelling/${bestCard.fileName}`);
                        return {
                            ... bestCard,
                            imageSrc: imagePath.default,
                        };
                    }));
                    // console.log(bestCardsWithImages)
                setBestCards(bestCardsWithImages);
            } catch (error){
                console.error('Klaida gaunant kategorijas', error);
            }
        };
        fetchBestCards();
    }, []);
 

    return(
        <div className='best-cards-list'>
            {
                bestcards.map((card) =>(
                    <BestCard
                        key={card.id}
                        imageSrc={card.imageSrc}
                        title ={card.title}
                    />
                ))
            }
 
        </div>
    )
}