import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types/User';

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<void>;
  register: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('allygo_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string) => {
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('allygo_users') || '[]');
    const existingUser = users.find((u: User) => u.user_email === email);
    
    if (!existingUser) {
      throw new Error('User not found. Please register first.');
    }
    
    // Store current user
    localStorage.setItem('allygo_user', JSON.stringify(existingUser));
    setUser(existingUser);
  };

  const register = async (userData: Partial<User>) => {
    const users = JSON.parse(localStorage.getItem('allygo_users') || '[]');
    
    // Check if user already exists
    if (users.find((u: User) => u.user_email === userData.user_email)) {
      throw new Error('User already exists. Please login.');
    }
    
    const newUser: User = {
      user_id: Date.now().toString(),
      user_name: userData.user_name || '',
      user_email: userData.user_email || '',
      user_password: '',
      user_role: 'student',
      course: userData.course || '',
      specialization: userData.specialization || '',
      skills: userData.skills || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Save to users list
    users.push(newUser);
    localStorage.setItem('allygo_users', JSON.stringify(users));
    
    // Set as current user
    localStorage.setItem('allygo_user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('allygo_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};