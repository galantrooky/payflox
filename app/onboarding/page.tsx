"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  CreditCard,
  ArrowRight,
  ArrowLeft,
  Check,
  Building,
  Globe,
  Zap,
  Shield,
  Store,
  ShoppingCart,
  Code,
  MapPin,
  Phone,
  FileText,
  Sparkles,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const totalSteps = 6

  const [formData, setFormData] = useState({
    // Business Information
    businessName: "",
    website: "",
    businessType: "",
    monthlyVolume: "",
    description: "",

    // Payment Methods
    paymentMethods: [] as string[],

    // Integrations
    shopifyStore: "",
    woocommerceUrl: "",
    customApi: false,

    // Verification
    businessAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    taxId: "",
    phoneNumber: "",
  })

  const handleNext = async () => {
    if (currentStep === totalSteps) {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false)
      // Redirect to dashboard
      window.location.href = "/dashboard"
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = (currentStep / totalSteps) * 100

  const businessTypes = [
    "E-commerce",
    "SaaS",
    "Digital Services",
    "Consulting",
    "Education",
    "Healthcare",
    "Real Estate",
    "Other",
  ]

  const volumeRanges = [
    "Less than $1,000",
    "$1,000 - $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "$500,000+",
  ]

  const paymentMethodOptions = [
    { id: "cards", name: "Credit/Debit Cards", fee: "2.9% + 30¢", icon: CreditCard },
    { id: "crypto", name: "Cryptocurrency", fee: "1.5%", icon: Zap },
    { id: "bank", name: "Bank Transfers", fee: "0.8%", icon: Building },
  ]

  const togglePaymentMethod = (methodId: string) => {
    const current = formData.paymentMethods
    if (current.includes(methodId)) {
      setFormData({
        ...formData,
        paymentMethods: current.filter((id) => id !== methodId),
      })
    } else {
      setFormData({
        ...formData,
        paymentMethods: [...current, methodId],
      })
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-green-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Welcome to Payflox!</h2>
                <p className="text-slate-600 mt-2">Let's get your payment system set up in just a few minutes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900">Secure</h3>
                <p className="text-sm text-slate-600">Bank-level security for all transactions</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900">Fast</h3>
                <p className="text-sm text-slate-600">Instant payments and quick setup</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-900">Analytics</h3>
                <p className="text-sm text-slate-600">Detailed insights and reporting</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">What we'll set up:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Business information and preferences
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Payment methods and pricing
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Platform integrations (Shopify, WooCommerce)
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Business verification
                </li>
              </ul>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900">Tell us about your business</h2>
              <p className="text-slate-600 mt-2">This helps us customize your experience</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-slate-700">
                  Business Name
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Your Business Name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="pl-10 bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-slate-700">
                  Website (Optional)
                </Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://yourbusiness.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="pl-10 bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-slate-700">
                  Business Type
                </Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                >
                  <SelectTrigger className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyVolume" className="text-slate-700">
                  Expected Monthly Volume
                </Label>
                <Select
                  value={formData.monthlyVolume}
                  onValueChange={(value) => setFormData({ ...formData, monthlyVolume: value })}
                >
                  <SelectTrigger className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500">
                    <SelectValue placeholder="Select expected monthly volume" />
                  </SelectTrigger>
                  <SelectContent>
                    {volumeRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-slate-700">
                  Business Description (Optional)
                </Label>
                <Textarea
                  id="description"
                  placeholder="Tell us more about your business..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  rows={3}
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900">Choose your payment methods</h2>
              <p className="text-slate-600 mt-2">Select the payment options you want to offer your customers</p>
            </div>

            <div className="space-y-4">
              {paymentMethodOptions.map((method) => {
                const isSelected = formData.paymentMethods.includes(method.id)
                const IconComponent = method.icon

                return (
                  <div
                    key={method.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      isSelected
                        ? "border-green-500 bg-green-50"
                        : "border-slate-200 bg-white/50 hover:border-slate-300"
                    }`}
                    onClick={() => togglePaymentMethod(method.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isSelected ? "bg-green-500" : "bg-slate-100"
                          }`}
                        >
                          <IconComponent className={`w-5 h-5 ${isSelected ? "text-white" : "text-slate-600"}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{method.name}</h3>
                          <p className="text-sm text-slate-600">Processing fee: {method.fee}</p>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? "border-green-500 bg-green-500" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900">Secure Processing</h4>
                  <p className="text-sm text-blue-700">
                    All payment methods use industry-standard encryption and are PCI DSS compliant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900">Connect your platforms</h2>
              <p className="text-slate-600 mt-2">Integrate with your existing e-commerce platforms</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Store className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Shopify Integration</h3>
                    <p className="text-sm text-slate-600">Connect your Shopify store for seamless payments</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shopifyStore" className="text-slate-700">
                    Shopify Store URL (Optional)
                  </Label>
                  <Input
                    id="shopifyStore"
                    type="url"
                    placeholder="https://yourstore.myshopify.com"
                    value={formData.shopifyStore}
                    onChange={(e) => setFormData({ ...formData, shopifyStore: e.target.value })}
                    className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">WooCommerce Integration</h3>
                    <p className="text-sm text-slate-600">Connect your WooCommerce store</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="woocommerceUrl" className="text-slate-700">
                    WooCommerce Site URL (Optional)
                  </Label>
                  <Input
                    id="woocommerceUrl"
                    type="url"
                    placeholder="https://yourstore.com"
                    value={formData.woocommerceUrl}
                    onChange={(e) => setFormData({ ...formData, woocommerceUrl: e.target.value })}
                    className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Custom API Integration</h3>
                    <p className="text-sm text-slate-600">Use our API for custom implementations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="customApi"
                    checked={formData.customApi}
                    onCheckedChange={(checked) => setFormData({ ...formData, customApi: checked as boolean })}
                  />
                  <Label htmlFor="customApi" className="text-sm text-slate-600">
                    I want to use the Payflox API for custom integration
                  </Label>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-600">
                <strong>Note:</strong> You can always add more integrations later from your dashboard. Our team will
                help you set up any custom integrations you need.
              </p>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900">Business verification</h2>
              <p className="text-slate-600 mt-2">We need some additional information to verify your business</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessAddress" className="text-slate-700">
                  Business Address
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="businessAddress"
                    type="text"
                    placeholder="123 Business Street"
                    value={formData.businessAddress}
                    onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                    className="pl-10 bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-slate-700">
                    City
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-slate-700">
                    State
                  </Label>
                  <Input
                    id="state"
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-slate-700">
                    ZIP Code
                  </Label>
                  <Input
                    id="zipCode"
                    type="text"
                    placeholder="12345"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-slate-700">
                    Country
                  </Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                  >
                    <SelectTrigger className="bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="taxId" className="text-slate-700">
                  Tax ID / EIN
                </Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="taxId"
                    type="text"
                    placeholder="12-3456789"
                    value={formData.taxId}
                    onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                    className="pl-10 bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-slate-700">
                  Business Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="pl-10 bg-white/50 border-slate-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900">Verification Process</h4>
                  <p className="text-sm text-blue-700">
                    This information is required for compliance and will be securely stored. Verification typically
                    takes 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">You're all set!</h2>
                <p className="text-slate-600 mt-2">Your Payflox account has been successfully configured</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Account Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-600">Business:</span>
                  <span className="ml-2 font-medium text-slate-900">{formData.businessName}</span>
                </div>
                <div>
                  <span className="text-slate-600">Type:</span>
                  <span className="ml-2 font-medium text-slate-900 capitalize">{formData.businessType}</span>
                </div>
                <div>
                  <span className="text-slate-600">Payment Methods:</span>
                  <span className="ml-2 font-medium text-slate-900">{formData.paymentMethods.length} selected</span>
                </div>
                <div>
                  <span className="text-slate-600">Monthly Volume:</span>
                  <span className="ml-2 font-medium text-slate-900">{formData.monthlyVolume}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900">What's next?</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Business verification</p>
                    <p className="text-sm text-slate-600">We'll review your information (1-2 business days)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Integration setup</p>
                    <p className="text-sm text-slate-600">Our team will help you integrate with your platforms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-green-600">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Start accepting payments</p>
                    <p className="text-sm text-slate-600">Begin processing payments with your customers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-600">
                <strong>Need help?</strong> Our support team is available 24/7 to assist you with any questions. You can
                reach us at support@payflox.com or through the chat widget in your dashboard.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-slate-900 to-green-500 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">Payflox</span>
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">Setup Progress</span>
            <span className="text-sm text-slate-500">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
          <CardContent className="p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="bg-white/50 border-slate-200 hover:bg-white/80"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={isLoading}
                className="bg-gradient-to-r from-slate-900 to-green-600 hover:from-slate-800 hover:to-green-500 text-white"
              >
                {isLoading ? (
                  "Setting up..."
                ) : currentStep === totalSteps ? (
                  "Go to Dashboard"
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
