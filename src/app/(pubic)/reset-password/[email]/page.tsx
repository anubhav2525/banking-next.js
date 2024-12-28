"use client";
import React from "react";
import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import { useParams } from "next/navigation";

const ResetPassword = () => {
  const {
    email,
  }: {
    email: string;
  } = useParams();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md md:max-w-3xl">
        <ResetPasswordForm email={email} />
      </div>
    </div>
  );
};

export default ResetPassword;
