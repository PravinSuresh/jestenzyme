import React, {useState} from 'react';
import { HomeWrapper, LeftContainer, RightContainer } from './Home.styles';
import Textbox from '../../components/Textbox/Textbox';
import Button from '../../components/Button/Button';
import Questions from '../../components/Questions/Questions';
import { questions } from '../../data/questiondata';

const Home = ({data, setData}) => {
    const [question, setQuestion] = useState('');
    const [marks, setMarks] = useState(0);

    const handleClick = ()=>{
        if(question!='' && marks!=0){
            setData([...data, {id:data.length+1, question, marks}]);
            setMarks(0);
            setQuestion('');
        }
    }
    return(
        <HomeWrapper>
            <LeftContainer>
                <Textbox placeholder={'Enter question..'} getValue={setQuestion}/>
                <Textbox variant={'small'} cols={1} rows={3} placeholder={'Enter marks..'} getValue={setMarks}/>
                <Button text={'Click'} callBackFn={handleClick}/>
            </LeftContainer>
            <RightContainer>
                <Questions questions={data}/>
            </RightContainer>
        </HomeWrapper>
    );
}

export default Home;