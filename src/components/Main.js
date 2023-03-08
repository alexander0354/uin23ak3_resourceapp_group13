import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

export default function Main({name, url, cat}){
    return(
        <article className="Main">
            <ProductTitle productname={name}/>
            <ProductPrice url={url}/>
            <ProductCategory cat={cat}/>
        </article>
    )
}












