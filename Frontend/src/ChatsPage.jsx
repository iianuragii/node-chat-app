import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = () =>{
    const chatProps = useMultiChatLogic(
        '7ab5aaa5-e934-4d63-933a-395d07764d72',
        props.user.username,
        props.user.secret
    );
    return <div style ={{height: '100vh' }}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
}

export default ChatsPage