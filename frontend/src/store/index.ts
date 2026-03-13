import { create } from 'zustand';
import { User } from '../types/User';
import { Notification } from '../types/Notification';
import { Request } from '../types/Request';
import { Post } from '../types/Post';
import { Gig } from '../types/Gig';

interface AppState {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Notifications state
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
  addNotification: (notification: Notification) => void;
  
  // Requests state
  requests: Request[];
  setRequests: (requests: Request[]) => void;
  updateRequest: (id: string, data: Partial<Request>) => void;
  
  // Posts state
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  updatePost: (id: string, data: Partial<Post>) => void;
  deletePost: (id: string) => void;
  
  // Gigs state
  gigs: Gig[];
  setGigs: (gigs: Gig[]) => void;
  updateGig: (id: string, data: Partial<Gig>) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // User state
  user: null,
  setUser: (user) => set({ user }),
  
  // Notifications state
  notifications: [],
  setNotifications: (notifications) => set({ notifications }),
  addNotification: (notification) => set((state) => ({ 
    notifications: [...state.notifications, notification] 
  })),
  
  // Requests state
  requests: [],
  setRequests: (requests) => set({ requests }),
  updateRequest: (id, data) => set((state) => ({
    requests: state.requests.map(req => 
      req.id === id ? { ...req, ...data } : req
    )
  })),
  
  // Posts state
  posts: [],
  setPosts: (posts) => set({ posts }),
  updatePost: (id, data) => set((state) => ({
    posts: state.posts.map(post => 
      post.id === id ? { ...post, ...data } : post
    )
  })),
  deletePost: (id) => set((state) => ({
    posts: state.posts.filter(post => post.id !== id)
  })),
  
  // Gigs state
  gigs: [],
  setGigs: (gigs) => set({ gigs }),
  updateGig: (id, data) => set((state) => ({
    gigs: state.gigs.map(gig => 
      gig.id === id ? { ...gig, ...data } : gig
    )
  }))
}));