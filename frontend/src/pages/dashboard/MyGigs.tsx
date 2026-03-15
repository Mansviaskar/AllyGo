import { useEffect, useState } from 'react';
import { mockApi } from '../../services/mockApi';
import { Card, Badge, Button, Loader } from '../../components/ui';
import { Briefcase, Users, Clock, DollarSign } from 'lucide-react';

interface Gig {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  duration: string;
  skills: string[];
  status: string;
  applicants: number;
  createdAt: Date;
}

export default function MyGigs() {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const data = await mockApi.getGigs();
        setGigs(data);
      } catch (error) {
        console.error('Error fetching gigs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'success';
      case 'in-progress': return 'warning';
      case 'completed': return 'info';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader size="lg" text="Loading your gigs..." />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">
          My Gigs
        </h1>
        <Button variant="primary">
          Create New Gig
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigs.map((gig) => (
          <Card key={gig.id} hover className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-orange-500" />
                <Badge variant={getStatusColor(gig.status) as any}>
                  {gig.status}
                </Badge>
              </div>
              <span className="text-orange-500 font-semibold">
                ₹{gig.price}/hr
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {gig.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {gig.description}
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{gig.applicants} applicants</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{gig.duration}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {gig.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} size="sm" variant="default">
                  {skill}
                </Badge>
              ))}
              {gig.skills.length > 3 && (
                <Badge size="sm" variant="default">
                  +{gig.skills.length - 3} more
                </Badge>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outline" className="flex-1">
                Edit
              </Button>
              <Button size="sm" variant="primary" className="flex-1">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {gigs.length === 0 && (
        <Card className="text-center py-12">
          <Briefcase className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            No gigs yet
          </h3>
          <p className="text-gray-400 mb-4">
            Create your first gig to start earning
          </p>
          <Button variant="primary">
            Create Your First Gig
          </Button>
        </Card>
      )}
    </div>
  );
}