// pages/admin/reset-password.js
'use client'
import { useState } from 'react';
import { Card } from "@/components/ui/card"; // Adjust as needed
import { Button } from "@/components/ui/button"; // Adjust as needed
import { Input } from "@/components/ui/input"; // Adjust as needed

const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpValidated, setIsOtpValidated] = useState(false);

  const handleSendOtp = () => {
    // Logic to send OTP goes here
    console.log('OTP sent to the registered email/phone');
    setIsOtpSent(true);
  };

  const handleValidateOtp = () => {
    // Logic to validate OTP goes here
    if (otp === '123456') { // Example validation
      console.log('OTP validated successfully');
      setIsOtpValidated(true);
    } else {
      console.error('Invalid OTP');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to reset password goes here
    console.log('Password changed successfully');
    // Reset the form
    setCurrentPassword('');
    setNewPassword('');
    setOtp('');
    setIsOtpSent(false);
    setIsOtpValidated(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Change Password</h1>
      <Card className="p-4 shadow-lg">
        {!isOtpValidated ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="current-password" className="block mb-1">Current Password</label>
              <Input
                type="password"
                id="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="new-password" className="block mb-1">New Password</label>
              <Input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            {!isOtpSent ? (
              <Button type="button" onClick={handleSendOtp}>Send OTP</Button>
            ) : (
              <div className="mb-4">
                <label htmlFor="otp" className="block mb-1">Enter OTP</label>
                <Input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <Button type="button" onClick={handleValidateOtp}>Validate OTP</Button>
              </div>
            )}
            {isOtpValidated && (
              <Button type="submit">Change Password</Button>
            )}
          </form>
        ) : (
          <div className="text-green-500">Password changed successfully!</div>
        )}
      </Card>
    </div>
  );
};

export default ResetPassword;
