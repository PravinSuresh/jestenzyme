import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { TextArea } from './Textbox.styles';

const Textbox = (props) =>{
    const {placeholder, cols, rows, variant, getValue} = props;
    const [text, setText] = useState('');

    useEffect(()=>{
        if(getValue){
            getValue(text);
        }
    },[text]);

    return (
        <>
            <TextArea variant={variant} cols={cols} rows={rows} placeholder={placeholder} value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </>
    );
}

Textbox.propTypes = {
    placeholder: PropTypes.string,
    cols: PropTypes.number,
    rows: PropTypes.number
}

Textbox.defaultProps = {
    placeholder:'placeholder',
    cols: 100,
    rows: 3
}

export default Textbox;