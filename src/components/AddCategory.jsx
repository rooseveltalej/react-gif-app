import {useState} from "react";


const AddCategory = ({onNewCategory}) => {
    //el setCategories es un props
    const [inputValue, setInputValue] = useState('');


    const onInputChange = (event)=>{

        // console.log(event.target.value);
        setInputValue(event.target.value); //Para guardar en el input value la información que estamos escribiendo
    }
    // El onSubmit nos permite agregar datos a la lista
    const onSubmit = (event) =>{
        event.preventDefault(); //esto es para evitar que se refreque la pagina y asi no perder los datos

        if (inputValue === "" || inputValue.trim() <= 1){ //verificamos si por lo menos hay un caracter en la cadena que se desea insertar
            return
        }
        onNewCategory(inputValue.trim()); //Para agregar los datos
        setInputValue(''); //Reseteamos el input para la proxima entrada
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
};

export default AddCategory;
// recordar exportar el componente para ser usado en otro componente

