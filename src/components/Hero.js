    import React from "react";

    const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
                className="object-cover object-center rounded"
                alt="hero"
                src={require("../assets/chemicals.jpeg")}
            />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="mb-8 leading-relaxed">
                Specialty Chemicals manufactures a range of Specialty Chemicals and
                Water soluble polymers for applications in various indusrty
                segments.
            </p>
            </div>
        </div>
        </section>
    );
    };

    export default Hero;
