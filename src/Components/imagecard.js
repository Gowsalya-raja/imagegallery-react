function ImageCard(props) {

    return (

        <div className="image-card">

            <img
                src={props.image.imageUrl}
                alt={props.image.title}
            />

            <div className="image-details">

                <h3>{props.image.title}</h3>

                <p>{props.image.description}</p>

            </div>

        </div>

    );

}

export default ImageCard;