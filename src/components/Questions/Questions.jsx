import React from 'react';
import PropTypes from 'prop-types';
import {QuestionsContainer} from './Questions.styles';

const Questions = ({questions})=>{
    return (
        <ol>
            {questions.map(item=><QuestionsContainer key={item.id}><span>{item.question}</span> <span>{item.marks}</span></QuestionsContainer>)}
        </ol>
    );
}

Questions.propTypes = {
    questions: PropTypes.array
}

Questions.defaultProps = {
    questions:[]
}

export default Questions;