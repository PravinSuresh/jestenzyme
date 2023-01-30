import React from 'react';
import { HomeWrapper, LeftContainer, RightContainer } from './Home.styles';
import Textbox from '../../components/Textbox/Textbox';
import Button from '../../components/Button/Button';
import Questions from '../../components/Questions/Questions';
import { questions } from '../../data/questiondata';

const Home = () => {
    return(
        <HomeWrapper>
            <LeftContainer>
                <Textbox placeholder={'Enter value..'}/>
                <Button text={'Click'}/>
            </LeftContainer>
            <RightContainer>
                <Questions questions={questions}/>
            </RightContainer>
        </HomeWrapper>
    );
}

export default Home;