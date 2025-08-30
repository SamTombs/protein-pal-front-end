import InspirationPhoto from "../assets/InspirationPhoto.jpg";

const About = () => {
  return (
    <>
      <div>
        <div
          className="flex justify-end bg-white items-center pt-30 pr-90 pb-80 px-4"
          style={{ backgroundColor: "#f5f2eb" }}
        >
          <p className="font-serif text-lg text-justify pr-40 pl-40">
            We didn't start out in the world of protein. In fact, our
            story began on the other end of the spectrum—flour-dusted aprons,
            warm ovens, and a little neighborhood bakery that prided itself on
            serving the softest, most indulgent treats. It was a sweet life, but
            also a carby one. As our passion for food grew, so did our curiosity
            about nutrition, wellness, and balance. We realized that the same
            dedication we had for creating delicious baked goods could be
            channeled into helping people, just like you, to find protein-packed
            options that fuel peoples lives in a healthier way. From those
            humble, carby beginnings, we've risen into something new: a one-stop
            destination to find high-quality proteins. Whether you're an
            athlete, a busy professional, or just someone looking for better
            choices, we’e here to make shopping for protein simple, accessible,
            and actually enjoyable.
          </p>
          <img src={InspirationPhoto} alt="about-pic" className="h-200 w-140" />
        </div>
      </div>
    </>
  );
};

export default About;
