import React, {useState} from 'react';
import './Join.css';
import {Link} from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const onNameInput = (e) => setName(e.target.value);
    const onRoomInput = (e) => setRoom(e.target.value);
    const onSignInClick = (e) => (!name || !room) ? e.preventDefault() : null;

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Войти в чат</h1>
                <div><input placeholder='Имя' className='joinInput' type='text' onChange={onNameInput}/></div>
                <div><input placeholder='Комната' className='joinInput mt-20' type='text'
                            onChange={onRoomInput}/></div>
                <Link to={`/chat?name=${name}&room=${room}`} onClick={onSignInClick}>
                    <button className='button mt-20' type='submit'>Войти</button>
                </Link>
            </div>

        </div>
    );
};

export default Join;