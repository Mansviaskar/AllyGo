import { useEffect, useState } from 'react';
import { mockApi } from '../../services/mockApi';
import { Card, Badge, Button, Loader } from '../../components/ui';
import { Bell, Check, X, ExternalLink } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'gig' | 'message' | 'system' | 'achievement';
  priority: 'low' | 'medium' | 'high';
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await mockApi.getNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (id: string) => {
    try {
      await mockApi.markNotificationRead(id);
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'gig': return 'info';
      case 'message': return 'success';
      case 'system': return 'warning';
      case 'achievement': return 'success';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'default';
      default: return 'default';
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader size="lg" text="Loading notifications..." />
      </div>
    );
  }

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Notifications
          </h1>
          {unreadCount > 0 && (
            <p className="text-gray-400 text-sm">
              {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          )}
        </div>
        <Button variant="outline" size="sm">
          Mark All Read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`${!notification.read ? 'border-orange-500/30 bg-orange-500/5' : ''}`}
            hover
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className="flex items-center gap-2 mt-1">
                  <Bell className={`w-4 h-4 ${!notification.read ? 'text-orange-500' : 'text-gray-500'}`} />
                  {!notification.read && (
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold ${!notification.read ? 'text-white' : 'text-gray-300'}`}>
                      {notification.title}
                    </h3>
                    <Badge variant={getTypeColor(notification.type) as any} size="sm">
                      {notification.type}
                    </Badge>
                    <Badge variant={getPriorityColor(notification.priority) as any} size="sm">
                      {notification.priority}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-2">
                    {notification.message}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {formatTime(notification.createdAt)}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      {notification.actionUrl && (
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      )}
                      
                      {!notification.read && (
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <Check className="w-3 h-3 mr-1" />
                          Mark Read
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {notifications.length === 0 && (
        <Card className="text-center py-12">
          <Bell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            No notifications
          </h3>
          <p className="text-gray-400">
            You're all caught up! New notifications will appear here.
          </p>
        </Card>
      )}
    </div>
  );
}