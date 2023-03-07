import RecipeCard from './RecipeCard';
import RecipePage from './RecipePage';




export default function Main({resources, title, url, category}){
    const Menu = () => {
 
        const menuContent = resources.map((resources) => {
    
          return (
            <section className="menuCategory">
              <button onClick={Menu}>{resources.category}</button>
              <div className="open">
                <p className="text">{resources.text}</p>
                <ul className="menuContent">{resources.sources.map((item) => ( 
                  <li><a target="_blank" href={item.url}>{item.title}</a></li> 
                ))}</ul>
              </div>
            </section>
          );
      
        });
      

      
        return (
          <ul>{menuContent}</ul>
      
        );
    }
}