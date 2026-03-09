import { createContext, useContext, useState, ReactNode } from 'react';
import type { User } from '../types/User';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - replace with real API
    const mockUser: User = {
      user_id: '1',
      user_name: 'John Doe',
      user_email: email,
      user_password: '',
      user_role: 'student',
      course: 'Computer Science',
      specialization: 'Software Engineering',
      skills: ['React', 'TypeScript'],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setUser(mockUser);
  };

  const register = async (userData: Partial<User>) => {
    // Mock register - replace with real API
    const mockUser: User = {
      user_id: '1',
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
    setUser(mockUser);
  };

  const logout = () => setUser(null);

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