"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Mail, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleResend = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-slate-900 to-green-500 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">Payflox</span>
          </Link>
        </div>

        <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-slate-900">
              {isSubmitted ? "Check your email" : "Forgot password?"}
            </CardTitle>
            <CardDescription className="text-slate-600">
              {isSubmitted
                ? "We've sent a password reset link to your email address"
                : "No worries, we'll send you reset instructions"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-900 to-green-600 hover:from-slate-800 hover:to-green-500 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Reset password"}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-600">We've sent a password reset link to:</p>
                  <p className="font-medium text-slate-900">{email}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-slate-500">Didn't receive the email? Check your spam folder or</p>
                  <Button
                    variant="outline"
                    onClick={handleResend}
                    disabled={isLoading}
                    className="w-full bg-white/50 border-slate-200 hover:bg-white/80"
                  >
                    {isLoading ? "Resending..." : "Resend email"}
                  </Button>
                </div>
              </div>
            )}

            <div className="text-center">
              <Link href="/auth/login" className="text-green-600 hover:text-green-700 font-medium">
                Back to sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
