// Mock API Layer for AllyGo
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
const mockPosts = [
  {
    id: "1",
    user_id: "user1",
    title: "Looking for CS Study Group",
    content: "Need study partners for Data Structures and Algorithms. Planning to meet twice a week at the library.",
    category: "learning" as const,
    tags: ["Computer Science", "DSA", "Study Group"],
    cretedAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "2",
    user_id: "user2",
    title: "Selling Engineering Textbooks",
    content: "Selling used textbooks for Mechanical Engineering. All books in good condition with minimal highlighting.",
    category: "campus" as const,
    tags: ["Textbooks", "Engineering", "Sale"],
    cretedAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-14")
  },
  {
    id: "3",
    user_id: "user3",
    title: "Career Guidance Session",
    content: "Organizing a career guidance session for final year students. Industry experts will share insights.",
    category: "career" as const,
    tags: ["Career", "Guidance", "Final Year"],
    cretedAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13")
  }
];

const mockGigs = [
  {
    id: "1",
    user_id: "user4",
    title: "Math Tutoring - Calculus & Statistics",
    description: "Experienced tutor offering help with Calculus I, II and Statistics. 3+ years experience with excellent student feedback.",
    category: "tutoring" as const,
    price: 25,
    duration: "1-2 hours per session",
    skills: ["Mathematics", "Calculus", "Statistics", "Teaching"],
    status: "open" as const,
    applicants: 3,
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "2",
    user_id: "user5",
    title: "Web Development - React Projects",
    description: "Full-stack developer available for React.js projects. Can help with frontend development, API integration, and deployment.",
    category: "freelance" as const,
    price: 40,
    duration: "Project-based (1-4 weeks)",
    skills: ["React", "JavaScript", "Node.js", "MongoDB"],
    status: "open" as const,
    applicants: 7,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-14")
  },
  {
    id: "3",
    user_id: "user6",
    title: "Campus Food Delivery Service",
    description: "Reliable food delivery service within campus. Quick delivery from cafeteria and nearby restaurants to your dorm.",
    category: "campus-job" as const,
    price: 5,
    duration: "30-45 minutes per delivery",
    skills: ["Time Management", "Customer Service", "Campus Navigation"],
    status: "open" as const,
    applicants: 12,
    createdAt: new Date("2024-01-11"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "4",
    user_id: "user7",
    title: "Graphic Design Internship",
    description: "Looking for creative students to join our design team. Work on real client projects and build your portfolio.",
    category: "internship" as const,
    price: 15,
    duration: "3-6 months",
    skills: ["Adobe Photoshop", "Illustrator", "UI/UX Design", "Creativity"],
    status: "in-progress" as const,
    applicants: 25,
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-12")
  }
];

const mockRequests = [
  {
    id: "1",
    gigId: "1",
    applicantId: "user8",
    message: "Hi! I'm interested in your math tutoring services. I need help with Calculus II, specifically integration techniques. Are you available this week?",
    proposedPrice: 25,
    status: "pending" as const,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "2",
    gigId: "2",
    applicantId: "user9",
    message: "I have a React project that needs to be completed in 2 weeks. It's an e-commerce website with payment integration. Can we discuss the details?",
    proposedPrice: 35,
    status: "accepted" as const,
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "3",
    gigId: "3",
    applicantId: "user10",
    message: "I'd like to use your food delivery service regularly. I'm in Building A, Room 205. What are your operating hours?",
    status: "pending" as const,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "4",
    gigId: "4",
    applicantId: "user11",
    message: "I'm a final year design student with experience in Adobe Creative Suite. I'd love to apply for this internship opportunity.",
    status: "rejected" as const,
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-14")
  }
];

const mockNotifications = [
  {
    id: "1",
    userId: "user1",
    title: "New Gig Application",
    message: "Someone applied for your Math Tutoring gig",
    type: "gig" as const,
    priority: "medium" as const,
    read: false,
    actionUrl: "/dashboard/gigs",
    createdAt: new Date("2024-01-15T10:30:00")
  },
  {
    id: "2",
    userId: "user1",
    title: "Request Accepted",
    message: "Your application for Web Development project was accepted",
    type: "message" as const,
    priority: "high" as const,
    read: false,
    actionUrl: "/dashboard/requests",
    createdAt: new Date("2024-01-15T09:15:00")
  },
  {
    id: "3",
    userId: "user1",
    title: "New Study Group Match",
    message: "Found 2 students interested in your CS study group",
    type: "system" as const,
    priority: "medium" as const,
    read: true,
    actionUrl: "/dashboard/matches",
    createdAt: new Date("2024-01-14T16:45:00")
  },
  {
    id: "4",
    userId: "user1",
    title: "Achievement Unlocked",
    message: "Congratulations! You've completed 5 successful gigs",
    type: "achievement" as const,
    priority: "low" as const,
    read: true,
    createdAt: new Date("2024-01-14T14:20:00")
  },
  {
    id: "5",
    userId: "user1",
    title: "Payment Received",
    message: "You received ₹1,200 for completing the React project",
    type: "system" as const,
    priority: "high" as const,
    read: false,
    actionUrl: "/dashboard/settings",
    createdAt: new Date("2024-01-13T11:30:00")
  }
];

// Additional mock data for matches
const mockMatches = [
  {
    id: "1",
    userId: "user12",
    name: "Rahul Sharma",
    course: "Computer Science",
    year: 3,
    skills: ["Data Structures", "Algorithms", "Java", "Python"],
    matchScore: 95,
    commonInterests: ["Competitive Programming", "Web Development"],
    status: "pending"
  },
  {
    id: "2",
    userId: "user13",
    name: "Priya Patel",
    course: "Information Technology",
    year: 2,
    skills: ["React", "JavaScript", "UI/UX Design", "Figma"],
    matchScore: 88,
    commonInterests: ["Frontend Development", "Design"],
    status: "connected"
  },
  {
    id: "3",
    userId: "user14",
    name: "Arjun Mehta",
    course: "Data Science",
    year: 4,
    skills: ["Machine Learning", "Python", "TensorFlow", "Statistics"],
    matchScore: 92,
    commonInterests: ["AI/ML", "Data Analysis"],
    status: "connected"
  }
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

  async getMatches() {
    await delay();
    return mockMatches;
  },

  async updatePost(id: string, data: any) {
    await delay();
    const index = mockPosts.findIndex(p => p.id === id);
    if (index !== -1) mockPosts[index] = { ...mockPosts[index], ...data };
    return mockPosts[index];
  },

  async deletePost(id: string) {
    await delay();
    const index = mockPosts.findIndex(p => p.id === id);
    if (index !== -1) mockPosts.splice(index, 1);
    return { success: true };
  },

  async updateGig(id: string, data: any) {
    await delay();
    const index = mockGigs.findIndex(g => g.id === id);
    if (index !== -1) mockGigs[index] = { ...mockGigs[index], ...data };
    return mockGigs[index];
  },

  async updateRequest(id: string, data: any) {
    await delay();
    const index = mockRequests.findIndex(r => r.id === id);
    if (index !== -1) mockRequests[index] = { ...mockRequests[index], ...data };
    return mockRequests[index];
  },

  async markNotificationRead(id: string) {
    await delay();
    const index = mockNotifications.findIndex(n => n.id === id);
    if (index !== -1) mockNotifications[index].read = true;
    return mockNotifications[index];
  },

  async updateRequestStatus(id: string, status: 'pending' | 'accepted' | 'rejected' | 'withdrawn') {
    await delay();
    const index = mockRequests.findIndex(r => r.id === id);
    if (index !== -1) {
      mockRequests[index].status = status;
      mockRequests[index].updatedAt = new Date();
    }
    return mockRequests[index];
  }
};