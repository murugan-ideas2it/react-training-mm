import { useState, useEffect } from 'react'
// import Example1 from 'Example1.jsx'
function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
    
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    chatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      chatAPI.UnsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  
  if(isOnline === null){
    return 'Loadning';
  }
  return isOnline ? 'Online' : 'Offline';

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me
  //     </button>
  //   </div>
  // );
}
export default Example