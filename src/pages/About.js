import {useState, useEffect} from "react";

function About(props) {
    // holds data
    const [about, setAbout] = useState(null);

    // create function to make api call
    const getAboutData = async () => {
        // make api call and get response
        const response = await fetch(props.URL + "about");
        // turn response into js object
        const data = await response.json();
        // set the about state to the data
        setAbout(data);
    };

    // make an call inside useEffect so it calls once
    useEffect(() => getAboutData(), []);

    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    return about ? loaded() : <h1>Loading...</h1>
}

export default About;