export interface Request {
  id: string;
  gigId: string;
  applicantId: string;
  message: string;
  proposedPrice?: number;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  createdAt: Date;
  updatedAt: Date;
}
