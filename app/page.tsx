"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  Zap,
  Wallet,
  Building2,
  Check,
  Star,
  ArrowRight,
  Shield,
  Globe,
  Users,
  TrendingUp,
  Sparkles,
  Play,
} from "lucide-react"
import Image from "next/image"
import NextLink from "next/link"

export default function PayfloxLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NextLink href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-900 to-green-500 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Payflox</span>
            </NextLink>

            <nav className="hidden md:flex space-x-8">
              <NextLink href="#features" className="text-gray-600 hover:text-slate-900 transition-colors">
                Features
              </NextLink>
              <NextLink href="#pricing" className="text-gray-600 hover:text-slate-900 transition-colors">
                Pricing
              </NextLink>
              <NextLink href="#integrations" className="text-gray-600 hover:text-slate-900 transition-colors">
                Integrations
              </NextLink>
              <NextLink href="#testimonials" className="text-gray-600 hover:text-slate-900 transition-colors">
                Testimonials
              </NextLink>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-slate-900">
                Login
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">Sign Up Free</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-green-600 text-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-blue-400" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delayed">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-100">Trusted by 50,000+ businesses worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Accept Payments
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent animate-pulse">
                Like Never Before
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              The complete payment solution for ecommerce, digital creators, and freelancers.
              <span className="text-green-300 font-semibold"> Get paid faster</span> with our powerful payment gateway.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-3 w-5 h-5" />
                Start Free Trial
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-6 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Play className="mr-3 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">2.5%</div>
                <div className="text-blue-200 font-medium">Transaction Fee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-blue-200 font-medium">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-blue-200 font-medium">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Get Paid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help you accept payments, manage finances, and grow your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900">Quick Payout</CardTitle>
                <CardDescription>
                  Get your money in minutes, not days. Instant payouts to your bank account or digital wallet.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Inline Checkout</CardTitle>
                <CardDescription>
                  Seamless checkout experience that keeps customers on your site and increases conversion rates.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900">Payment Links</CardTitle>
                <CardDescription>
                  Create and share payment links instantly. Perfect for invoices, social media, and email campaigns.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Virtual Cards</CardTitle>
                <CardDescription>
                  Issue virtual cards for secure online transactions and better expense management.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900">Virtual Accounts</CardTitle>
                <CardDescription>
                  Dedicated virtual accounts for better cash flow management and automated reconciliation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Advanced Security</CardTitle>
                <CardDescription>
                  Bank-level security with fraud detection, PCI compliance, and real-time monitoring.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integrations" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Connect with Your Favorite Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrate with the tools you already use. Setup takes just minutes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src="/placeholder.svg?height=48&width=48" alt="Shopify" width={48} height={48} />
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src="/placeholder.svg?height=48&width=48" alt="WooCommerce" width={48} height={48} />
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src="/placeholder.svg?height=48&width=48" alt="Stripe" width={48} height={48} />
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src="/placeholder.svg?height=48&width=48" alt="PayPal" width={48} height={48} />
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src="/placeholder.svg?height=48&width=48" alt="Square" width={48} height={48} />
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src="/placeholder.svg?height=48&width=48" alt="Magento" width={48} height={48} />
            </div>
          </div>
        </div>
      </section>

      {/* Shopify & WooCommerce Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Shopify & WooCommerce</h2>
              <p className="text-xl text-blue-100 mb-8">
                Native integrations with the world's most popular ecommerce platforms. Start accepting payments in
                minutes with our one-click setup.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>One-click installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Automatic order sync</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Real-time analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Multi-currency support</span>
                </div>
              </div>
              <Button size="lg" className="bg-green-500 hover:bg-green-400 text-white">
                Install Now
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Integration Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Payment Gateway Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Crypto Payment Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">New Feature</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Accept Cryptocurrency Payments</h2>
              <p className="text-xl text-gray-600 mb-8">
                Expand your payment options with our secure cryptocurrency gateway. Accept Bitcoin, Ethereum, and 50+
                other digital currencies with instant conversion to your preferred fiat currency.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Support for 50+ cryptocurrencies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Instant fiat conversion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Low transaction fees (1.5%)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced security & compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Real-time price tracking</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                  Enable Crypto Payments
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent"
                >
                  View Supported Coins
                </Button>
              </div>
            </div>
          </div>

          {/* Supported Cryptocurrencies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Supported Cryptocurrencies</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center justify-items-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">₿</span>
                </div>
                <span className="text-xs text-gray-600">Bitcoin</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">Ξ</span>
                </div>
                <span className="text-xs text-gray-600">Ethereum</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">₳</span>
                </div>
                <span className="text-xs text-gray-600">Cardano</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">◎</span>
                </div>
                <span className="text-xs text-gray-600">Solana</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">Ł</span>
                </div>
                <span className="text-xs text-gray-600">Litecoin</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">Ð</span>
                </div>
                <span className="text-xs text-gray-600">Dogecoin</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-sm">⚡</span>
                </div>
                <span className="text-xs text-gray-600">Polygon</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">+43</span>
                </div>
                <span className="text-xs text-gray-600">More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no setup costs. Pay only for what you use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-900">Starter</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">2.9%</span>
                  <span className="text-gray-600"> + $0.30</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Payment processing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Payment links
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Basic analytics
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-slate-900 hover:bg-slate-800">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-900">Professional</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">2.5%</span>
                  <span className="text-gray-600"> + $0.25</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Everything in Starter
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Virtual cards
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Virtual accounts
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-500 hover:bg-green-400">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-green-500 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-900">Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Everything in Professional
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    SLA guarantee
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See what our customers have to say about Payflox.</p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {/* First set of testimonials */}
              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Payflox has transformed how we handle payments. The quick payout feature is a game-changer for our
                    cash flow."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Sarah Johnson"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-600">CEO, TechStart</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The Shopify integration was seamless. We were up and running in minutes, not hours."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mike Chen"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Mike Chen</div>
                      <div className="text-sm text-gray-600">Founder, EcoStore</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "As a freelancer, payment links have made invoicing so much easier. My clients love the simple
                    checkout process."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Emma Davis"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Emma Davis</div>
                      <div className="text-sm text-gray-600">Freelance Designer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The crypto payment feature opened up a whole new customer base for us. Revenue increased by 30%!"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Alex Rodriguez"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Alex Rodriguez</div>
                      <div className="text-sm text-gray-600">Owner, Digital Marketplace</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Virtual accounts have streamlined our accounting process. We save hours every month on
                    reconciliation."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Lisa Park"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Lisa Park</div>
                      <div className="text-sm text-gray-600">CFO, GrowthCorp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Customer support is outstanding. They helped us migrate from our old payment processor in just 2
                    days."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="David Kim"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">David Kim</div>
                      <div className="text-sm text-gray-600">CTO, InnovateLab</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Duplicate set for seamless loop */}
              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Payflox has transformed how we handle payments. The quick payout feature is a game-changer for our
                    cash flow."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Sarah Johnson"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-600">CEO, TechStart</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The Shopify integration was seamless. We were up and running in minutes, not hours."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mike Chen"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Mike Chen</div>
                      <div className="text-sm text-gray-600">Founder, EcoStore</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg min-w-[350px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "As a freelancer, payment links have made invoicing so much easier. My clients love the simple
                    checkout process."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Emma Davis"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">Emma Davis</div>
                      <div className="text-sm text-gray-600">Freelance Designer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Payments?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using Payflox to accept payments, manage finances, and grow their
            revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-green-500 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Payflox</span>
              </div>
              <p className="text-blue-200 mb-4">The complete payment solution for modern businesses.</p>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-blue-300" />
                <Users className="w-5 h-5 text-blue-300" />
                <TrendingUp className="w-5 h-5 text-blue-300" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Features
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Pricing
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Integrations
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    API Docs
                  </NextLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    About
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Blog
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Careers
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Contact
                  </NextLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Help Center
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-white transition-colors">
                    Status
                  </NextLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Payflox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
