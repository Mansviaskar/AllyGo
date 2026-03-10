// Mock data
const mockPosts = [
  { id: 1, title: "Study Group for CS101", content: "Looking for study partners", author: "John Doe", timestamp: Date.now() },
  { id: 2, title: "Free Textbooks Available", content: "Giving away old textbooks", author: "Jane Smith", timestamp: Date.now() }
];

const mockGigs = [
  { id: 1, title: "Tutoring Math", description: "Help with calculus", rate: "$20/hr", poster: "Alice Johnson" },
  { id: 2, title: "Campus Tour Guide", description: "Weekend tours", rate: "$15/hr", poster: "Bob Wilson" }
];

const mockRequests = [
  { id: 1, title: "Need Ride to Airport", description: "Friday 3pm", requester: "Sarah Brown" },
  { id: 2, title: "Looking for Roommate", description: "Spring semester", requester: "Mike Davis" }
];

const mockNotifications = [
  { id: 1, message: "New gig posted in your area", timestamp: Date.now(), read: false },
  { id: 2, message: "Your post received a comment", timestamp: Date.now(), read: true }
];

// Simulate network delay
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const getPosts = async () => {
  await delay();
  return mockPosts;
};

export const getGigs = async () => {
  await delay();
  return mockGigs;
};

export const getRequests = async () => {
  await delay();
  return mockRequests;
};

export const getNotifications = async () => {
  await delay();
  return mockNotifications;
};

export const updatePost = async (id: number, updates: any) => {
  await delay();
  const index = mockPosts.findIndex(post => post.id === id);
  if (index !== -1) {
    mockPosts[index] = { ...mockPosts[index], ...updates };
    return mockPosts[index];
  }
  throw new Error('Post not found');
};

export const deletePost = async (id: number) => {
  await delay();
  const index = mockPosts.findIndex(post => post.id === id);
  if (index !== -1) {
    mockPosts.splice(index, 1);
    return { success: true };
  }
  throw new Error('Post not found');
};

export const updateGig = async (id: number, updates: any) => {
  await delay();
  const index = mockGigs.findIndex(gig => gig.id === id);
  if (index !== -1) {
    mockGigs[index] = { ...mockGigs[index], ...updates };
    return mockGigs[index];
  }
  throw new Error('Gig not found');
};

export const updateRequest = async (id: number, updates: any) => {
  await delay();
  const index = mockRequests.findIndex(request => request.id === id);
  if (index !== -1) {
    mockRequests[index] = { ...mockRequests[index], ...updates };
    return mockRequests[index];
  }
  throw new Error('Request not found');
};