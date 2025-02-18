import { useContext } from 'react';
import DataContext from '../Contexts/Data';
import ListPost from '../Components/ListPost';

export default function Home() {

    const { posts } = useContext(DataContext);

    return (
        <section className="home">
            <div className="container">
                <h1>postai</h1>
                {   posts !== null 
                    ?
                    posts.map(post => <ListPost key={post.id} post={post} />)
                    :
                    <h2>loading...</h2>
                }
            </div>
        </section>
    );
}