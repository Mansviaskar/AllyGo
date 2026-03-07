export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'gig' | 'message' | 'system' | 'achievement';
  priority: 'low' | 'medium' | 'high';
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}