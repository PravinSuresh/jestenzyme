import React from 'react';
import { HomeWrapper, LeftContainer, RightContainer } from './Home.styles';
import Textbox from '../../components/Textbox/Textbox';
import Button from '../../components/Button/Button';

const Home = () => {
    return(
        <HomeWrapper>
            <LeftContainer>
                <Textbox placeholder={'Enter value..'}/>
                <Button text={'Click'}/>
            </LeftContainer>
            <RightContainer></RightContainer>
        </HomeWrapper>
    );
}

export default Home;