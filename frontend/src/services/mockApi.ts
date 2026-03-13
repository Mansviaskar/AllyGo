// Mock API Layer for AllyGo
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
const mockPosts = [
  { id: 1, title: "Study Group", content: "Looking for CS study partners", author: "John" },
  { id: 2, title: "Book Sale", content: "Selling textbooks", author: "Jane" }
];

const mockGigs = [
  { id: 1, title: "Tutoring", description: "Math tutoring available", rate: "$20/hr", provider: "Mike" },
  { id: 2, title: "Food Delivery", description: "Campus food delivery", rate: "$15/hr", provider: "Sarah" }
];

const mockRequests = [
  { id: 1, title: "Need Ride", description: "Ride to airport needed", requester: "Alex" },
  { id: 2, title: "Study Help", description: "Help with physics", requester: "Emma" }
];

const mockNotifications = [
  { id: 1, message: "New gig posted", type: "gig", timestamp: new Date() },
  { id: 2, message: "Request accepted", type: "request", timestamp: new Date() }
];

export const mockApi = {
  async getPosts() {
    await delay();
    return mockPosts;
  },

  async getGigs() {
    await delay();
    return mockGigs;
  },

  async getRequests() {
    await delay();
    return mockRequests;
  },

  async getNotifications() {
    await delay();
    return mockNotifications;
  },

  async updatePost(id: number, data: any) {
    await delay();
    const index = mockPosts.findIndex(p => p.id === id);
    if (index !== -1) mockPosts[index] = { ...mockPosts[index], ...data };
    return mockPosts[index];
  },

  async deletePost(id: number) {
    await delay();
    const index = mockPosts.findIndex(p => p.id === id);
    if (index !== -1) mockPosts.splice(index, 1);
    return { success: true };
  },

  async updateGig(id: number, data: any) {
    await delay();
    const index = mockGigs.findIndex(g => g.id === id);
    if (index !== -1) mockGigs[index] = { ...mockGigs[index], ...data };
    return mockGigs[index];
  },

  async updateRequest(id: number, data: any) {
    await delay();
    const index = mockRequests.findIndex(r => r.id === id);
    if (index !== -1) mockRequests[index] = { ...mockRequests[index], ...data };
    return mockRequests[index];
  }
};