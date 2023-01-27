import React from 'react';
import { HomeWrapper, LeftContainer, RightContainer } from './Home.styles';
import Textbox from '../../components/Textbox/Textbox';

const Home = () => {
    return(
        <HomeWrapper>
            <LeftContainer>
                <Textbox placeholder={'Enter value..'}/>
            </LeftContainer>
            <RightContainer></RightContainer>
        </HomeWrapper>
    );
}

export default Home;