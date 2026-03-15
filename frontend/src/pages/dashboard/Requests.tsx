import { useEffect, useState } from 'react';
import { mockApi } from '../../services/mockApi';
import { Card, Badge, Button, Loader } from '../../components/ui';
import { Send, Clock, User, DollarSign } from 'lucide-react';

interface Request {
  id: string;
  gigId: string;
  applicantId: string;
  message: string;
  proposedPrice?: number;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  createdAt: Date;
  updatedAt: Date;
}

export default function Requests() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await mockApi.getRequests();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const updateRequestStatus = async (id: string, status: 'accepted' | 'rejected') => {
    try {
      await mockApi.updateRequestStatus(id, status);
      setRequests(prev => 
        prev.map(req => 
          req.id === id ? { ...req, status, updatedAt: new Date() } : req
        )
      );
    } catch (error) {
      console.error('Error updating request status:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'accepted': return 'success';
      case 'rejected': return 'error';
      case 'withdrawn': return 'default';
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
        <Loader size="lg" text="Loading requests..." />
      </div>
    );
  }

  const pendingRequests = requests.filter(r => r.status === 'pending');
  const processedRequests = requests.filter(r => r.status !== 'pending');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">
          Requests
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{pendingRequests.length} pending</span>
          <span>{processedRequests.length} processed</span>
        </div>
      </div>

      {/* Pending Requests */}
      {pendingRequests.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-500" />
            Pending Requests
          </h2>
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <Card key={request.id} className="border-orange-500/30">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-white font-medium">
                        Request from {request.applicantId}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={getStatusColor(request.status) as any} size="sm">
                          {request.status}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {formatTime(request.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {request.proposedPrice && (
                    <div className="flex items-center gap-1 text-orange-500">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold">₹{request.proposedPrice}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 bg-gray-800/50 p-3 rounded-lg">
                  {request.message}
                </p>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="primary"
                    onClick={() => updateRequestStatus(request.id, 'accepted')}
                  >
                    Accept
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => updateRequestStatus(request.id, 'rejected')}
                  >
                    Decline
                  </Button>
                  <Button size="sm" variant="ghost">
                    Message
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Processed Requests */}
      {processedRequests.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {processedRequests.map((request) => (
              <Card key={request.id} hover>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-white font-medium">
                        Request from {request.applicantId}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={getStatusColor(request.status) as any} size="sm">
                          {request.status}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          Updated {formatTime(request.updatedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {request.proposedPrice && (
                    <div className="flex items-center gap-1 text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span>₹{request.proposedPrice}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-400 mt-3 text-sm line-clamp-2">
                  {request.message}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}

      {requests.length === 0 && (
        <Card className="text-center py-12">
          <Send className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            No requests yet
          </h3>
          <p className="text-gray-400">
            Requests for your gigs will appear here
          </p>
        </Card>
      )}
    </div>
  );
}