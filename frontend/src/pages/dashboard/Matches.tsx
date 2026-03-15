import { useEffect, useState } from 'react';
import { mockApi } from '../../services/mockApi';
import { Card, Badge, Button, Loader, Avatar } from '../../components/ui';
import { Users, Star, MessageCircle, BookOpen } from 'lucide-react';

interface Match {
  id: string;
  userId: string;
  name: string;
  course: string;
  year: number;
  skills: string[];
  matchScore: number;
  commonInterests: string[];
  status: string;
}

export default function Matches() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await mockApi.getMatches();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'success';
      case 'pending': return 'warning';
      case 'declined': return 'error';
      default: return 'default';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-orange-400';
    return 'text-gray-400';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader size="lg" text="Finding your matches..." />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Study Matches
          </h1>
          <p className="text-gray-400 text-sm">
            Connect with students who share your interests and goals
          </p>
        </div>
        <Button variant="primary">
          Find More Matches
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <Card key={match.id} hover className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar name={match.name} size="lg" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {match.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {match.course} • Year {match.year}
                  </p>
                </div>
              </div>
              <Badge variant={getStatusColor(match.status) as any} size="sm">
                {match.status}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500" />
                <span className={`font-semibold ${getMatchScoreColor(match.matchScore)}`}>
                  {match.matchScore}% Match
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Skills
              </h4>
              <div className="flex flex-wrap gap-1">
                {match.skills.slice(0, 4).map((skill, index) => (
                  <Badge key={index} size="sm" variant="default">
                    {skill}
                  </Badge>
                ))}
                {match.skills.length > 4 && (
                  <Badge size="sm" variant="default">
                    +{match.skills.length - 4}
                  </Badge>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white mb-2">
                Common Interests
              </h4>
              <div className="flex flex-wrap gap-1">
                {match.commonInterests.map((interest, index) => (
                  <Badge key={index} size="sm" variant="info">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              {match.status === 'pending' ? (
                <>
                  <Button size="sm" variant="primary" className="flex-1">
                    Accept
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Decline
                  </Button>
                </>
              ) : match.status === 'connected' ? (
                <>
                  <Button size="sm" variant="primary" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline">
                    Profile
                  </Button>
                </>
              ) : (
                <Button size="sm" variant="primary" className="flex-1">
                  Connect
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {matches.length === 0 && (
        <Card className="text-center py-12">
          <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            No matches found
          </h3>
          <p className="text-gray-400 mb-4">
            Complete your profile to find study partners and collaborators
          </p>
          <Button variant="primary">
            Update Profile
          </Button>
        </Card>
      )}
    </div>
  );
}