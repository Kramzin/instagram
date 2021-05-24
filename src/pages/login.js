import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {};

    useEffect(() => {
        document.title = 'Login - SpaX';
    }, []); 

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5"> 
                <img src="/images/iphone-with-profile.jpg" alt="Iphone" />
            </div>
            <div className="flex flex-col w-2/5">
                <p> FORM </p>
            </div>
        </div>
    );
}