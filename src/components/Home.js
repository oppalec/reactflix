import Hero from './Hero';

const Home = () => {
    return (
        <>
            <Hero text = "Welcome To The Movie Browser"/>
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-8 offset-lg-2 my-5">
                        <p className = "lead">
                            This is a <strong>React JS 201 project for Udemy</strong> headed by Kalob Taulien.    
                        </p>
                        
                        <p className = "lead">
                            Here are the bugs that Kalob pointed out that I fixed: 
                        </p>

                        <ul>
                            <li>Added 404 page</li>
                            <li>Added a "Not found" placeholder for missing movie posters</li>
                            <li>Added handling for no search results</li>
                            <li>Added functionality for search button</li>
                        </ul>

                        <p className = "lead">
                            Plus here are more things that I also fixed just for fun:
                        </p>
                        <ul>
                            <li>Added Top Movies in the categories section (with pagination)</li>
                            <li>Included more movie details once the card is clicked</li>
                            <li>Placed a max width when displaying movie descriptions in search results</li>
                        </ul>

                        <p>
                            **API provided by The Movie Database**
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;