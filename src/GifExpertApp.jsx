import { useState } from "react";
import AddCategory from "./components/AddCategory.jsx";
import GifGrid from "./components/GifGrid.jsx";

    
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    const onAddCategory = (newCategory)=>{
        if (categories.includes(newCategory)) { //Validamos si la categoria ya existe en el arreglo
            return;
        }
        setCategories([newCategory,...categories]);
    }
    
    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}

            />

                {categories.map(category =>{
                    return (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                })}
        </>
    );
};