import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext(null);
const STORAGE_KEY = 'SAMZ_admin_user';

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (admin) localStorage.setItem(STORAGE_KEY, JSON.stringify(admin));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, [admin]);

  const login = async (email, password) => {
    if (!email || !password) {
      throw new Error('Please enter email and password.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    await new Promise((r) => setTimeout(r, 500));

    // Static demo: accept any valid-looking credentials
    const loggedIn = {
      id: 'admin_1',
      name: 'SAMZ Admin',
      email: email.toLowerCase(),
      role: 'admin',
    };
    setAdmin(loggedIn);
    return loggedIn;
  };

  const logout = () => setAdmin(null);

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        isAdminAuthenticated: !!admin,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
};

export default AdminAuthContext;
