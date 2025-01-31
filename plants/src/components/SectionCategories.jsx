import CategoriesList from "./CategoriesList";
import Title from "./Title";
import "./SectionCategories.css";

export default function SectionCategories(){
    return (
        <div className="wrapper categories">
            <Title text1 = 'Shop ' text2 = 'by Category' showLink={true}/>
            <CategoriesList/>
        </div>
    );
}