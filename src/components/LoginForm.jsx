import {useState} from 'react'
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "c014b40f-ca49-461d-8dc7-06b3415d06ca", 'User-Name' : username, 'User-Secret' : password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();
            
        } catch (error) {
            setError('Kullanıcı adı veya şifre yanlış !')
            
        }

    }
    return (
        <div className = "wrapper">
            <div className = "form">
                <h1 className = "title">Chat Uygulaması</h1>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" value = {username} onChange = {(e) => setUsername(e.target.value)} className = "input" placeholder = "Kullanıcı adı" required/>
                    <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "input" placeholder = "Parola" required/>
                    <div align = "center">
                        <button type = "submit" className = "button">
                            <span>Konuşmaya Başla</span>
                        </button>
                    </div>
                    <h2 className = "error">{error}</h2>
                </form>
            </div>

        </div>
    );

}
export default LoginForm;