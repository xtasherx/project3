import React from "react";

import ReviewSlideLogin from "../components/review-slider-login";

//Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

//buttons
import LoginButton from "../components/login-button";
import SignupButton from "../components/signup-button";

export default function Home () {
        return(
        <div>
                <Jumbotron fluid className="jumbotron" lg="5" alt="Photo by Adonyi Gábor from Pexels">
                        <Container >
                                <h1 className="homeHead">Swap Your Skills</h1>
                                <h3>
                                This4That is an easy and fun way to SAVE MONEY while still obtaining any services you require!  
                                </h3>
                                <p className="my-5">Join the barter community and trade talents and services, in any combination.
                                This4That offers a way for you to get value out of your many talents while exploring the fantastic abilities of others in your community.  You will also have fun searching, making deals, and will likely meet a few awesome people along the way!
                                </p>
                                <LoginButton className/> &emsp;<SignupButton />
                        </Container>
                </Jumbotron>
                <Container>
                        <ReviewSlideLogin />  
                </Container>
        </div>
        )
}
