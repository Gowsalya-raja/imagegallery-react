import ImageCard from "./Components/imagecard";

import "./style.css";


function App() {

    const images = [

        {
            id: 1,
            imageUrl: require("./assets/images/image1.jpg"),
            title: "Forest",
            description: "Explore the Beauty of Nature."
        },

        {
            id: 2,
            imageUrl: require("./assets/images/image2.jpg"),
            title: "Ocean Sunset",
            description: "Beautiful sunset near the ocean."
        },

        {
            id: 3,
            imageUrl: require("./assets/images/image3.jpg"),
            title: "Mountain View",
            description: "Enjoy breath taking views, fresh air and peaceful surroundings."
        },

        {
            id: 4,
            imageUrl: require("./assets/images/image4.jpg"),
            title: "Parrot",
            description: "A beautiful parrot with vibrant feathers."
        },

        {
            id: 5,
            imageUrl: require("./assets/images/image5.jpg"),
            title: "Deer",
            description: "A graceful deer wandering through the peaceful forest."
        },

        

    ];


    return (

        <>

            <div className="gallery-header">

                <h1>Gallery</h1>

                <button className="explore-btn">
                    Explore Collections
                </button>

            </div>


            <div className="gallery-container">

                {images.map((image) => (

                    <ImageCard
                        key={image.id}
                        image={image}
                    />

                ))}

            </div>

        </>

    );

}


export default App;