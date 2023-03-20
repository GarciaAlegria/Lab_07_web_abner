import './Cuadro.css'

export default function Cuadro({tittle,image, description, link, linkdata }){
    return(
        <div className='box'>
            `<img src={image} alt="data" />
            <h3>{tittle}</h3>
            <p>{description} 
                <a href={link}>
                    <b>{linkdata}</b>
                </a>
            </p>`
        </div>
    )
}