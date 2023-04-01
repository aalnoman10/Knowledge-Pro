import React from 'react';
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Question = () => {
    return (
        <div className='question'>
            <h2>Interview Question</h2>
            <ol>
                <li>
                    <h3>Props vs state ? <FontAwesomeIcon icon={faArrowDown} /></h3>
                    <ul>
                        <li><p><strong>Props : </strong>is passing information like object by another components</p></li>
                        <li> <p><strong>State : </strong>is a variable.are updating changed value in user interface</p></li>
                    </ul>
                </li>
                <li>
                    <h3>How does useState work ? <FontAwesomeIcon icon={faArrowDown} /></h3>
                    <ul>
                        <li>
                            <p><strong>useState : </strong> is like a hook, it returns a variable , and a uodate this function.</p></li>
                    </ul>
                </li>
                <li>
                    <h3>Purpose of useEffect other than fetching data ?<FontAwesomeIcon icon={faArrowDown} /></h3>
                    <ul>
                        <li>
                            <p>k</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>How Does React work ? <FontAwesomeIcon icon={faArrowDown} /></h3>
                    <ul>
                        <li>
                            <p><strong>React : </strong>is a library of JavaScript.are working With JavaScriptXML(jsx) file.Write code into create many Components.And updating time compare old DOM with new DOM, see which code is changed and Updating this change code in  user interface.</p>
                        </li>
                    </ul>
                </li>
            </ol >
        </div >
    );
};

export default Question;