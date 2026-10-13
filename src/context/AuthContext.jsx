import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const STORAGE_KEY = 'SAMZ_auth_user';

export const AuthProvider = ({ children }) => {
  // Try loading saved user from localStorage
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error('Failed to parse auth user from localStorage:', e);
      return null;
    }
  });

  // Modal open & mode state: 'login' | 'signup' | 'forgot'
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login'); // 'login' | 'signup' | 'forgot'

  // Persist user to localStorage
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to persist auth user:', e);
    }
  }, [user]);

  const openAuthModal = (mode = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const switchAuthMode = (mode) => {
    setAuthModalMode(mode);
  };

  // Mock login function
  const login = async (email, password, rememberMe = true) => {
    // Basic validation
    if (!email || !password) {
      throw new Error('Please enter both email and password.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }

    // Simulate network delay for realistic experience
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Generate or derive user profile
    const derivedName = email.split('@')[0]
      .replace(/[._-]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    const loggedInUser = {
      id: 'usr_' + Date.now(),
      name: derivedName || 'User',
      email: email.toLowerCase(),
      avatar: null,
      createdAt: new Date().toISOString(),
      rememberMe: !!rememberMe,
    };

    setUser(loggedInUser);
    return loggedInUser;
  };

  // Mock signup function
  const signup = async (name, email, password) => {
    if (!name || !name.trim()) {
      throw new Error('Please enter your full name.');
    }
    if (!email || !password) {
      throw new Error('Please fill in all required fields.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    const newUser = {
      id: 'usr_' + Date.now(),
      name: name.trim(),
      email: email.toLowerCase(),
      avatar: null,
      createdAt: new Date().toISOString(),
      rememberMe: true,
    };

    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to remove auth user:', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        switchAuthMode,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
