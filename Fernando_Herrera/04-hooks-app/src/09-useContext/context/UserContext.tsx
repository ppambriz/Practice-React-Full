import { createContext, useState, type PropsWithChildren } from 'react'
import { users, type User } from '../data/user-mock.data';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //State
    authStatus: AuthStatus;
    user: User | null;

    //Methods
    login: (userId: number) => boolean;
    logout: () => void;
}


export const UserContext = createContext({} as UserContextProps);


export const UserContextProvider = ({ children }: PropsWithChildren) => {

    // const [name, setName] = useState('José');
    const [authStatus, setauthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User|null>(null);

    const handleLogin = (userId: number) => {
        const user = users.find((u) => u.id === userId);
        if (!user) {
            console.log(`User not found ${userId}`);
            setUser(null);
            setauthStatus('not-authenticated');
            return false;
        }

        setUser(user);
        setauthStatus('authenticated');
        return true;
    }
    
    const handleLogout = () => {
        console.log('logout');
        setauthStatus('not-authenticated');   
        setUser(null);
    }

  return (
    <>
        {/* No se recomienda usar HTML en el provider, se puede usar pero no se recomienda */}
        <UserContext value={{
            authStatus: authStatus,
            user: user,
            login: handleLogin,
            logout: handleLogout,            
        }}>
            { children }
        </UserContext>
    </>
  )
}
