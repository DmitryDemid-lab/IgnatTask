import React from 'react';
import preLoaderIMG from "../../img/Spinner-1s-200px.svg";

type PreloaderType = {}

function Preloader(props: PreloaderType) {
    return (
        <div>
            <img src={preLoaderIMG}/>
        </div>
    )
};

export default Preloader;