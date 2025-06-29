import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'SUPERVISOR' | 'USER';
  account_id: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for test user in localStorage
    const testUser = localStorage.getItem('test_user');
    if (testUser) {
      try {
        setUser(JSON.parse(testUser));
      } catch (error) {
        console.error('Error parsing test user:', error);
        localStorage.removeItem('test_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate login - in production, this would call your auth service
    setIsLoading(true);
    
    // Mock user data for testing
    const mockUser: User = {
      id: 'user-1',
      email,
      name: 'Test User',
      role: 'USER',
      account_id: 'acc-1'
    };
    
    setUser(mockUser);
    localStorage.setItem('test_user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('test_user');
  };

  const value = {
    user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}