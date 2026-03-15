import { useState } from 'react';
import { Card, Button, Badge, Avatar } from '../../components/ui';
import { Shield, CheckCircle, AlertCircle, Upload, FileText, Phone, Mail, GraduationCap, CreditCard } from 'lucide-react';

export default function Verification() {
  const [verificationStatus, setVerificationStatus] = useState({
    email: 'verified',
    phone: 'pending',
    student: 'verified',
    identity: 'not_started',
    skills: 'in_review'
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending': case 'in_review': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'rejected': return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified': return <Badge variant="success">Verified</Badge>;
      case 'pending': return <Badge variant="warning">Pending</Badge>;
      case 'in_review': return <Badge variant="warning">In Review</Badge>;
      case 'rejected': return <Badge variant="error">Rejected</Badge>;
      default: return <Badge variant="default">Not Started</Badge>;
    }
  };

  const overallProgress = Object.values(verificationStatus).filter(status => status === 'verified').length;
  const totalSteps = Object.keys(verificationStatus).length;
  const progressPercentage = (overallProgress / totalSteps) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Account Verification
        </h1>
        <p className="text-gray-400">
          Complete your verification to unlock all AllyGo features and build trust with other students
        </p>
      </div>

      {/* Overall Progress */}
      <Card>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-full">
            <Shield className="w-6 h-6 text-orange-500" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">
              Verification Progress
            </h2>
            <p className="text-gray-400">
              {overallProgress} of {totalSteps} steps completed
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-500">
              {Math.round(progressPercentage)}%
            </div>
            <div className="text-sm text-gray-400">Complete</div>
          </div>
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </Card>

      {/* Email Verification */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {getStatusIcon(verificationStatus.email)}
            <div>
              <h3 className="text-lg font-semibold text-white">Email Verification</h3>
              <p className="text-gray-400 text-sm">Verify your university email address</p>
            </div>
          </div>
          {getStatusBadge(verificationStatus.email)}
        </div>
        
        {verificationStatus.email === 'verified' ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">Email verified successfully</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Your email john.doe@university.edu has been verified
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>john.doe@university.edu</span>
              </div>
            </div>
            <Button variant="primary" size="sm">
              Resend Verification Email
            </Button>
          </div>
        )}
      </Card>

      {/* Phone Verification */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {getStatusIcon(verificationStatus.phone)}
            <div>
              <h3 className="text-lg font-semibold text-white">Phone Verification</h3>
              <p className="text-gray-400 text-sm">Verify your phone number for security</p>
            </div>
          </div>
          {getStatusBadge(verificationStatus.phone)}
        </div>
        
        {verificationStatus.phone === 'pending' ? (
          <div className="space-y-3">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400">
                <AlertCircle className="w-4 h-4" />
                <span className="font-medium">Verification code sent</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Enter the 6-digit code sent to +1 (555) 123-4567
              </p>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter verification code"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
              <Button variant="primary">
                Verify
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <Button variant="primary" size="sm">
              Send Verification Code
            </Button>
          </div>
        )}
      </Card>

      {/* Student Verification */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {getStatusIcon(verificationStatus.student)}
            <div>
              <h3 className="text-lg font-semibold text-white">Student Status</h3>
              <p className="text-gray-400 text-sm">Verify your current student enrollment</p>
            </div>
          </div>
          {getStatusBadge(verificationStatus.student)}
        </div>
        
        {verificationStatus.student === 'verified' ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">Student status verified</span>
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p>University: Tech University</p>
              <p>Course: Computer Science</p>
              <p>Year: 2025</p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-400 text-sm">
              Upload your student ID or enrollment certificate
            </p>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
              <p className="text-gray-400 text-sm mb-2">Drag and drop or click to upload</p>
              <Button variant="outline" size="sm">
                Choose File
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Identity Verification */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {getStatusIcon(verificationStatus.identity)}
            <div>
              <h3 className="text-lg font-semibold text-white">Identity Verification</h3>
              <p className="text-gray-400 text-sm">Verify your identity for enhanced security</p>
            </div>
          </div>
          {getStatusBadge(verificationStatus.identity)}
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-400 text-sm">
            Upload a government-issued ID (driver's license, passport, or national ID)
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
              <FileText className="w-6 h-6 text-gray-500 mx-auto mb-2" />
              <p className="text-gray-400 text-xs mb-2">Front of ID</p>
              <Button variant="outline" size="sm">
                Upload Front
              </Button>
            </div>
            
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
              <FileText className="w-6 h-6 text-gray-500 mx-auto mb-2" />
              <p className="text-gray-400 text-xs mb-2">Back of ID</p>
              <Button variant="outline" size="sm">
                Upload Back
              </Button>
            </div>
          </div>
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-blue-400 mt-0.5" />
              <div className="text-sm">
                <p className="text-blue-400 font-medium mb-1">Your privacy is protected</p>
                <p className="text-gray-400">
                  Your ID information is encrypted and only used for verification purposes. We never share your personal data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Skills Verification */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {getStatusIcon(verificationStatus.skills)}
            <div>
              <h3 className="text-lg font-semibold text-white">Skills Verification</h3>
              <p className="text-gray-400 text-sm">Verify your skills and expertise</p>
            </div>
          </div>
          {getStatusBadge(verificationStatus.skills)}
        </div>
        
        {verificationStatus.skills === 'in_review' ? (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              <AlertCircle className="w-4 h-4" />
              <span className="font-medium">Skills under review</span>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Your submitted certificates and portfolio are being reviewed by our team.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">React.js Certificate</span>
                <Badge variant="warning" size="sm">Reviewing</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Portfolio Project</span>
                <Badge variant="warning" size="sm">Reviewing</Badge>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              Upload certificates, portfolios, or take skill assessments to verify your expertise
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Programming Skills</h4>
                  <p className="text-gray-400 text-sm">Take assessment or upload certificates</p>
                </div>
                <Button variant="outline" size="sm">
                  Start Assessment
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Design Portfolio</h4>
                  <p className="text-gray-400 text-sm">Upload your design work</p>
                </div>
                <Button variant="outline" size="sm">
                  Upload Portfolio
                </Button>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Verification Benefits */}
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">
          Verification Benefits
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="text-white font-medium">Increased Trust</h4>
              <p className="text-gray-400 text-sm">Verified profiles get 3x more responses</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="text-white font-medium">Higher Earnings</h4>
              <p className="text-gray-400 text-sm">Verified users earn 40% more on average</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="text-white font-medium">Priority Support</h4>
              <p className="text-gray-400 text-sm">Get faster customer support response</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="text-white font-medium">Exclusive Features</h4>
              <p className="text-gray-400 text-sm">Access to premium features and opportunities</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}