import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height = "100vh"
            projectID = "c014b40f-ca49-461d-8dc7-06b3415d06ca"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
         />
    )
}
export default App;