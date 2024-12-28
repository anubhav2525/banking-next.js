"use client";
import React from "react";
import VerifyEmailForm from "@/components/VerifyEmailForm/VerifyEmailForm";
import { useParams } from "next/navigation";

const VerifyEmail = () => {
  const {
    email,
  }: {
    email: string;
  } = useParams();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <VerifyEmailForm email={email} />
      </div>
    </div>
  );
};

export default VerifyEmail;
