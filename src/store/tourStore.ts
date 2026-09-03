import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TOURS as initialTours } from '../data/tours';
import type { Tour } from '../types/tour';

interface TourState {
  // Public tours list (filtered)
  tours: Tour[];
  featuredTours: Tour[];
  
  // Admin state
  isAdminMode: boolean;
  adminCredentials: { username: string; password: string };
  
  // Actions
  setTours: (tours: Tour[]) => void;
  setFeaturedTours: (tours: Tour[]) => void;
  setAdminMode: (mode: boolean) => void;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  toggleAdminAccess: () => void;
  deleteTour: (id: string) => void;
  resetTours: () => void;
}

const DEFAULT_CREDENTIALS = {
  username: 'admin',
  password: 'kyrgyzgo777'
};

export const useTourStore = create<TourState>()(
  persist(
    (set, get) => ({
      // Initial state
      tours: initialTours,
      featuredTours: initialTours.filter(t => t.featured),
      isAdminMode: false,
      adminCredentials: DEFAULT_CREDENTIALS,
      
      // Actions
      setTours: (tours) => set({ 
        tours, 
        featuredTours: tours.filter(t => t.featured) 
      }),
      setFeaturedTours: (tours) => set({ featuredTours: tours }),
      setAdminMode: (mode) => set({ isAdminMode: mode }),
      login: (username, password) => {
        const { adminCredentials } = get();
        if (username === adminCredentials.username && 
            password === adminCredentials.password) {
          set({ isAdminMode: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAdminMode: false }),
      toggleAdminAccess: () => {
        const { isAdminMode } = get();
        set({ isAdminMode: !isAdminMode });
      },
      deleteTour: (id) => {
        const { tours } = get();
        set({ 
          tours: tours.filter(t => t.id !== id),
          featuredTours: tours.filter(t => t.id !== id && t.featured)
        });
      },
      resetTours: () => set({ 
        tours: initialTours, 
        featuredTours: initialTours.filter(t => t.featured) 
      }),
    }),
    {
      name: 'tour-store',
      // Сохраняем ВСЕ данные, включая tours, чтобы изменения админа
      // не терялись между сессиями
      partialize: (state) => ({
        tours: state.tours,
        featuredTours: state.featuredTours,
        isAdminMode: state.isAdminMode,
        adminCredentials: state.adminCredentials,
      }),
    }
  )
);