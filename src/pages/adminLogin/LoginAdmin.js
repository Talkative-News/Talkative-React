import React from 'react';
import './LoginAdmin.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, firestore, GoogleAuthProvider } from '../../auth/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import NavBar from '../../components/navBar/NavBar';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
   
    const handleLogin = async (event) => {
            event.preventDefault();
    
            try {
                const result = await signInWithPopup(auth, googleProvider);
                const user = result.user;
                const email = user.email;
    
                const adminCollectionRef = collection(firestore, 'admin');
                const q = query(adminCollectionRef, where('email', '==', email));
    
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // Process retrieved documents
                    console.log(doc.id, ' => ', doc.data());
                    // Perform actions like setting tokens, redirecting to routes, etc.
                    localStorage.setItem('role', doc.data().role)
                    navigate('/admin');
                });
    
                // If querySnapshot is empty, user not found in Firestore
                if (querySnapshot.empty) {
                    console.log('User not found in Firestore');
                    // Handle accordingly (e.g., show error message)
                }
            } catch (error) {
                console.error('Authentication error / Error checking user in Firestore:', error);
                // Handle authentication error or Firestore query error
            }
        };
    

    return (
        <div className='container'>
            <NavBar />
            <div className='login-box'>
                <div className='login-form'>
                    <div className='login-title'>
                        <label htmlFor='login-h1'>Sign In</label>
                    </div>
                    <form>
                        <div className='login-btn'>
                            <button
                                type='submit'
                                id='firebaseLogin'
                                onClick={(e) => handleLogin(e)}
                            >
                                Sign In With Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
