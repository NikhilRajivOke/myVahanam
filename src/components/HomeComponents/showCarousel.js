import React,{useState} from 'react';
import {Carousel,CarouselItem, CarouselControl,CarouselIndicators} from 'reactstrap';
import { FaUserCircle } from 'react-icons/fa';



const ShowCarousel = () =>{
    const data =[
        {profile_desi:'Founder, Cosmo Trade Bhubaneswar',location:'Odhisa',profile_name:'Mr. Bikash Garabadau',test:'There was a little bit of anxiety and doubt when I contacted them as I was from one side of the country and they were from other side and I was new to online filing and documentation process. But the service I got from them was marvelous. These guys are so professional, that I never felt to be new to them. The execution of papers, documentation and processing was first class. They finished the assignment before committed time and pricing is absolutely affordable and value for money.'},
        {profile_desi:'CEO, Appiuss Software Pvt. Ltd.',location:'Mumbai',profile_name:'Mr. Rakesh Gupta',test:'It was wonderful experience with Startupwala Group during OPC registration of Appiuss Software. Queries were addressed instantly through mails, Phone calls; and the follow-up was just fantastic. The documentation was perfect and the Startupwala way of delivering it is great. '},
        {profile_desi:'Beatsandbeard Online Services Pvt. Ltd.',location:'Bangalore',profile_name:'Mr. Nikhil Jhunjhunwala',test:'Always we have heard that formation of a Pvt. Ltd. Company is a tough task to achieve, running around number of offices, getting infinite number of approvals from various departments and at last being left with some pending documents. But STARTUPWALA has changed my view, experience with them was like sitting at home and ordering for a home delivery. Employees of them are very knowledgeable about their process and the customer service is outstanding.'},
        {profile_desi:'Founder, Geo Eco-Initiative India Pvt. Ltd.',location:'Delhi',profile_name:'Mr. Manoj Kumar',test:'I am extremely delighted to have taken services from Startupwala for our GeoEi\'s trademark registration. Right from documentation to queries over phone until the execution of our application. I would say that you can rely on their outstanding services.'}
    ];
 /*console.log('type of data ',typeof(data))*/
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = data.map((data) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={data.profile_name}
      >
        <div className="testimonial-flex">
        <div className="img-section">
            <FaUserCircle className="UserPic" size="100px"/>
            <p className="name">{data.profile_name}</p>
            <p className="description">{data.profile_desi}</p>
            <p className="description">{data.location}</p>
        </div>
        <div className="test-text">
            <p>{data.test}</p>
        </div>
        </div>
      </CarouselItem>
    );
  });
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" className="arrow" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
  
}

export default ShowCarousel;