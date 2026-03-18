import { useEffect, useState } from 'react';
import { mockApi } from '../../services/mockApi';
import { Card, Badge, Button, Loader } from '../../components/ui';
import { FileText, Calendar, Tag, User } from 'lucide-react';

interface Post {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: 'learning' | 'career' | 'campus' | 'general';
  tags: string[];
  cretedAt: Date;
  updatedAt: Date;
}

export default function MyPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await mockApi.getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'learning': return 'info';
      case 'career': return 'success';
      case 'campus': return 'warning';
      case 'general': return 'default';
      default: return 'default';
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader size="lg" text="Loading your posts..." />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">
          My Posts
        </h1>
        <Button variant="primary">
          Create New Post
        </Button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} hover className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-orange-500" />
                <Badge variant={getCategoryColor(post.category) as any}>
                  {post.category}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.cretedAt)}</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {post.content}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} size="sm" variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-800">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <User className="w-4 h-4" />
                <span>Posted by you</span>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  View Responses
                </Button>
                <Button size="sm" variant="outline">
                  Edit
                </Button>
                <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <Card className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            No posts yet
          </h3>
          <p className="text-gray-400 mb-4">
            Share your thoughts, ask questions, or offer help to the community
          </p>
          <Button variant="primary">
            Create Your First Post
          </Button>
        </Card>
      )}
    </div>
  );
}