import Hero from './Hero'

const AboutView = () => {
    return (
        <>  
            <Hero text = "About Alec Padua"/>
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-8 offset-lg-2 my-5">
                        <p className = "lead">
                            Alec Padua is a former Android application developer turned singer-songwriter, music producer, content writer, content creator and trader. He is now embarking on a journey to study web development and beyond.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutView;