import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import abImg from '../../images/about/ab1.jpg'
import icon from '../../images/about/star.svg'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const About2 = (props) => {

    useEffect(() => {
        function scroll_animations() {
            var defaults = {
                duration: 1.2,
                ease: "power4.out",
                animation: "fade_from_bottom",
                once: false,
            };
            gsap.utils.toArray(".scroll-text-animation").forEach(function (box) {
                var gsap_obj = {};
                var settings = {
                    duration: box.dataset.animationDuration || defaults.duration,
                };
                var animations = {
                    fade_from_bottom: {
                        y: 180,
                        opacity: 0,
                    },
                    fade_from_top: {
                        y: -180,
                        opacity: 0,
                    },
                    fade_from_left: {
                        x: -180,
                        opacity: 0,
                    },
                    fade_from_right: {
                        x: 180,
                        opacity: 0,
                    },
                    fade_in: {
                        opacity: 0,
                    },
                    rotate_up: {
                        y: 180,
                        rotation: 10,
                        opacity: 0,
                    },
                };
                var scroll_trigger = {
                    scrollTrigger: {
                        trigger: box,
                        once: defaults.once,
                        start: "top bottom+=20%",
                        toggleActions: "play none none reverse",
                        markers: false,
                    },
                };
                Object.assign(gsap_obj, settings);
                Object.assign(gsap_obj, animations[box.dataset.animation || defaults.animation]);
                Object.assign(gsap_obj, scroll_trigger);
                gsap.from(box, gsap_obj);
            });
        }
        scroll_animations();
    }, []);

    return (
        <section className={"" + props.hclass} id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-right scroll-text-animation" data-animation="fade_from_left">
                            <div className="image">
                                <img src={abImg} alt="" />
                            </div>
                            <div className="shape">
                                <img src={icon} alt="" />
                            </div>
                            <div className="about-experianc">
                                <div className="nunber">
                                    <h3><span><CountUp end={10} enableScrollSpy /></span></h3>
                                </div>
                                <div className="text">
                                    <h4>Years Of
                                        Experience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <div className="section-top-content">
                                <h2 className="poort-text poort-in-right">About Me</h2>
                                <h3 className="poort-text poort-in-right">Design is My Passion, Which Create Me
                                    More
                                    Professional.
                                </h3>
                                <h4 className="scroll-text-animation" data-animation="fade_from_bottom">I have
                                    <span>10+</span>
                                    years of experiences in this design field for give you better
                                    services.</h4>
                                <p className="scroll-text-animation" data-animation="fade_from_bottom">Posuere
                                    vestibulum
                                    feugiat a
                                    scelerisque aliquam id in neque. Commodo aenean non enim lacus
                                    eleifend. Semper amet facilisis tempor consequat aliquet vel elementum
                                    faucibus.
                                    Ac
                                    vel enim
                                    viverra id tincidunt imperdiet nisl auctor odio. Dignissim habitant
                                    volutpat
                                    viverra
                                    quis.
                                </p>
                            </div>
                            <ul className="scroll-text-animation" data-animation="fade_from_bottom">
                                <li>Vestibulum nisl tempor enim pretium vulputate venenatis.</li>
                                <li>At donec interdiet adipiscing veptubtl cursus.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;