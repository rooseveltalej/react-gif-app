import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";

function UseFetchGifs(category) {

    const [images, setImages] = useState([ ]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        getGifs(category).then(newImages => {
            setImages(newImages);
            setLoading(false);
        })
    }, []);


    return {
        images: images,
        isLoading: loading,

    }
}

export default UseFetchGifs;