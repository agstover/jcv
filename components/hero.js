const { default: Container } = require("./container");

const Hero = () => (
    <div className={'bg-black flex flex-col content-left py-12 mb-12'}>
        <Container>
            <h1 className='hero-text w-full md:w-3/4 text-sm md:text-5xl mb-12 font-bold'>
                <span className={'text-default-purple'}>We help experienced and aspiring entrepreneurs</span> alike
                achieve the freedom, independence, and ability to do what they love
                to make the world a better place.
            </h1>
            <img src='assets/john-banner.jpg'/>
        </Container>
    </div>
)

export default Hero