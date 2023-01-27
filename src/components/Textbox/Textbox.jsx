import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { TextArea } from './Textbox.styles';

const Textbox = (props) =>{
    const {placeholder, cols, rows} = props;
    const [text, setText] = useState('');
    return (
        <>
            <TextArea cols={cols} rows={rows} placeholder={placeholder} value={text} onChange={(e)=>{setText(e.target.value)}}/>
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