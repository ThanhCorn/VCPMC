import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  phoneNumber: string | null;
  datePorn: string | null;
}

interface UserContextValue {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextValue>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const newData = user.providerData[0];
        const providerData = { ...newData, datePorn: '10-12-2000' };
        const { displayName, email, photoURL, uid, phoneNumber, datePorn } =
          providerData;
        setCurrentUser({
          displayName: 'Ngoc Thanh',
          email,
          photoURL:
            'https://pbs.twimg.com/profile_images/1534202050304614402/CCmKYCSS_400x400.jpg',
          uid,
          phoneNumber: '+84 123456789',
          datePorn: '10-12-2000',
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
