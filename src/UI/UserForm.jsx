import React from 'react';

const UserForm = ({ visible, setVisible }) => {

    function authorization() {

        let input = document.querySelector('.user__form-name');
        localStorage.username = input.value
        localStorage.users = new Array()
        // localStorage.users.push(localStorage.username)

        setVisible(false)

    }

    return (
        <div className='user__popup'>


            <form className='user__form'>
                <h4 className='user__form-title'>Как ваше имя?</h4>
                <input type='name' className='user__form-name' placeholder='Ваше имя'></input>
                <button onClick={authorization} className='user__form-btn'>Войти</button>

            </form>


        </div>


    );
}

export default UserForm;