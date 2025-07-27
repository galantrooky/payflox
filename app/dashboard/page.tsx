"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Search,
  Settings,
  LogOut,
  BarChart3,
  Link,
  Store,
  UserCheck,
  Home,
  Plus,
  Download,
  Menu,
  ChevronLeft,
  Moon,
  Sun,
  Eye,
  MoreHorizontal,
  Zap,
  Globe,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const sidebarItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "subscriptions", label: "Subscriptions", icon: BarChart3 },
  { id: "payment-links", label: "Payment Links", icon: Link },
  { id: "payouts", label: "Payouts", icon: DollarSign },
  { id: "virtual-cards", label: "Virtual Cards & Accounts", icon: CreditCard },
  { id: "crypto", label: "Crypto Payments", icon: Zap },
  { id: "store", label: "Store", icon: Store },
  { id: "affiliates", label: "Affiliates", icon: UserCheck },
  { id: "settings", label: "Settings", icon: Settings },
]

export default function PayfloxDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  function CryptoContent() {
    const [showExchangeModal, setShowExchangeModal] = useState(false)
    const [selectedCrypto, setSelectedCrypto] = useState("")
    const [exchangeAmount, setExchangeAmount] = useState("")

    const cryptoBalances = [
      { symbol: "BTC", name: "Bitcoin", balance: "0.12345678", usdValue: "$4,567.89", change: "+5.2%" },
      { symbol: "ETH", name: "Ethereum", balance: "2.45678901", usdValue: "$3,234.56", change: "+3.8%" },
      { symbol: "ADA", name: "Cardano", balance: "1,234.56789", usdValue: "$567.89", change: "-1.2%" },
      { symbol: "SOL", name: "Solana", balance: "45.6789012", usdValue: "$1,234.56", change: "+8.7%" },
      { symbol: "LTC", name: "Litecoin", balance: "8.90123456", usdValue: "$789.01", change: "+2.1%" },
      { symbol: "DOGE", name: "Dogecoin", balance: "5,678.90123", usdValue: "$456.78", change: "+12.3%" },
    ]

    const cryptoTransactions = [
      {
        id: "CRYPTO-001",
        type: "Received",
        crypto: "BTC",
        amount: "0.00234567",
        usdValue: "$89.45",
        from: "Shopify Store",
        store: "Fashion Boutique",
        date: "2024-01-20 14:30",
        status: "Confirmed",
      },
      {
        id: "CRYPTO-002",
        type: "Received",
        crypto: "ETH",
        amount: "0.12345678",
        usdValue: "$234.56",
        from: "WooCommerce Store",
        store: "Tech Solutions",
        date: "2024-01-20 13:45",
        status: "Confirmed",
      },
      {
        id: "CRYPTO-003",
        type: "Exchanged",
        crypto: "ADA",
        amount: "500.00000000",
        usdValue: "$234.50",
        from: "Exchange to USD",
        store: "-",
        date: "2024-01-20 12:15",
        status: "Completed",
      },
      {
        id: "CRYPTO-004",
        type: "Received",
        crypto: "SOL",
        amount: "2.34567890",
        usdValue: "$123.45",
        from: "Shopify Store",
        store: "Digital Agency",
        date: "2024-01-20 11:30",
        status: "Pending",
      },
    ]

    const exchangeRates = [
      { crypto: "BTC", rate: "$43,250.00", change: "+2.1%" },
      { crypto: "ETH", rate: "$2,680.50", change: "+1.8%" },
      { crypto: "ADA", rate: "$0.4567", change: "-0.5%" },
      { crypto: "SOL", rate: "$98.76", change: "+4.2%" },
      { crypto: "LTC", rate: "$72.34", change: "+1.2%" },
      { crypto: "DOGE", rate: "$0.0876", change: "+8.9%" },
    ]

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Crypto Payments</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage cryptocurrency payments and exchanges</p>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => setShowExchangeModal(true)}
              className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
            >
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Exchange to Fiat
            </Button>
          </div>
        </div>

        {/* Crypto Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$10,850.69</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +4.2% (24h)
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Crypto Received Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$1,247.46</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                12 transactions
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Exchanged This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$8,456.78</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">To USD wallet</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Active Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">23</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Shopify: 15 • WooCommerce: 8</p>
            </CardContent>
          </Card>
        </div>

        {/* Crypto Balances and Exchange Rates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Crypto Balances</CardTitle>
              <CardDescription className="dark:text-gray-400">Your cryptocurrency wallet balances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cryptoBalances.map((crypto, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border dark:border-gray-600 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{crypto.symbol}</span>
                      </div>
                      <div>
                        <h3 className="font-medium dark:text-white">{crypto.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {crypto.balance} {crypto.symbol}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium dark:text-white">{crypto.usdValue}</p>
                      <p className={cn("text-sm", crypto.change.startsWith("+") ? "text-green-600" : "text-red-600")}>
                        {crypto.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Live Exchange Rates</CardTitle>
              <CardDescription className="dark:text-gray-400">Current cryptocurrency exchange rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exchangeRates.map((rate, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border dark:border-gray-600 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{rate.crypto}</span>
                      </div>
                      <span className="font-medium dark:text-white">{rate.crypto}/USD</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium dark:text-white">{rate.rate}</p>
                      <p className={cn("text-sm", rate.change.startsWith("+") ? "text-green-600" : "text-red-600")}>
                        {rate.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Crypto Transactions */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Recent Crypto Transactions</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Cryptocurrency payments from your Shopify and WooCommerce stores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="dark:text-gray-300">Transaction ID</TableHead>
                  <TableHead className="dark:text-gray-300">Type</TableHead>
                  <TableHead className="dark:text-gray-300">Crypto</TableHead>
                  <TableHead className="dark:text-gray-300">Amount</TableHead>
                  <TableHead className="dark:text-gray-300">USD Value</TableHead>
                  <TableHead className="dark:text-gray-300">Source</TableHead>
                  <TableHead className="dark:text-gray-300">Status</TableHead>
                  <TableHead className="dark:text-gray-300">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cryptoTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-mono text-sm dark:text-gray-300">{transaction.id}</TableCell>
                    <TableCell>
                      <Badge
                        variant={transaction.type === "Received" ? "default" : "secondary"}
                        className={
                          transaction.type === "Received"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }
                      >
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{transaction.crypto}</span>
                        </div>
                        <span className="dark:text-gray-300">{transaction.crypto}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm dark:text-white">{transaction.amount}</TableCell>
                    <TableCell className="font-medium text-green-600">{transaction.usdValue}</TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm font-medium dark:text-white">{transaction.from}</p>
                        {transaction.store !== "-" && (
                          <p className="text-xs text-gray-600 dark:text-gray-400">{transaction.store}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.status === "Confirmed" || transaction.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          transaction.status === "Confirmed" || transaction.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm dark:text-gray-300">{transaction.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Store Integration Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <Store className="w-4 h-4 text-green-600" />
                </div>
                Shopify Crypto Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm dark:text-gray-300">Connected Stores</span>
                  <span className="font-medium dark:text-white">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm dark:text-gray-300">Crypto Enabled</span>
                  <span className="font-medium text-green-600">12 (80%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm dark:text-gray-300">This Month Revenue</span>
                  <span className="font-medium dark:text-white">$5,234.56</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm dark:text-gray-300">Supported Coins</span>
                  <span className="font-medium dark:text-white">BTC, ETH, ADA, SOL</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white flex items-center">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                WooCommerce Crypto Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm dark:text-gray-300">Connected Stores</span>
                  <span className="font-medium dark:text-white">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm dark:text-gray-300">Crypto Enabled</span>
                  <span className="font-medium text-green-600">7 (87.5%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm dark:text-gray-300">This Month Revenue</span>
                  <span className="font-medium dark:text-white">$3,456.78</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm dark:text-gray-300">Supported Coins</span>
                  <span className="font-medium dark:text-white">BTC, ETH, LTC, DOGE</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exchange to Fiat Modal */}
        <Dialog open={showExchangeModal} onOpenChange={setShowExchangeModal}>
          <DialogContent className="sm:max-w-[500px] dark:bg-gray-800 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="dark:text-white">Exchange Crypto to Fiat</DialogTitle>
              <DialogDescription className="dark:text-gray-400">
                Convert your cryptocurrency to USD and transfer to your bank account.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="crypto-select" className="dark:text-white">
                  Select Cryptocurrency
                </Label>
                <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                  <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectValue placeholder="Choose crypto to exchange" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BTC">Bitcoin (BTC) - 0.12345678 available</SelectItem>
                    <SelectItem value="ETH">Ethereum (ETH) - 2.45678901 available</SelectItem>
                    <SelectItem value="ADA">Cardano (ADA) - 1,234.56789 available</SelectItem>
                    <SelectItem value="SOL">Solana (SOL) - 45.6789012 available</SelectItem>
                    <SelectItem value="LTC">Litecoin (LTC) - 8.90123456 available</SelectItem>
                    <SelectItem value="DOGE">Dogecoin (DOGE) - 5,678.90123 available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="exchange-amount" className="dark:text-white">
                  Amount to Exchange
                </Label>
                <Input
                  id="exchange-amount"
                  placeholder="0.00000000"
                  value={exchangeAmount}
                  onChange={(e) => setExchangeAmount(e.target.value)}
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
                {selectedCrypto && exchangeAmount && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ≈ ${(Number.parseFloat(exchangeAmount) * 43250).toLocaleString()} USD (estimated)
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="destination" className="dark:text-white">
                  Destination
                </Label>
                <Select>
                  <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">Bank Account (****1234)</SelectItem>
                    <SelectItem value="payflox">Payflox USD Wallet</SelectItem>
                    <SelectItem value="paypal">PayPal Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-start space-x-2">
                  <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Exchange Details</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      • Exchange fee: 1.5% • Processing time: 1-3 business days • Minimum: $10 USD
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowExchangeModal(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => setShowExchangeModal(false)}
                className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
                disabled={!selectedCrypto || !exchangeAmount}
              >
                <ArrowUpRight className="w-4 h-4 mr-2" />
                Exchange Now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent />
      case "subscriptions":
        return <SubscriptionsContent />
      case "payment-links":
        return <PaymentLinksContent />
      case "payouts":
        return <PayoutsContent />
      case "virtual-cards":
        return <VirtualCardsContent />
      case "crypto":
        return <CryptoContent />
      case "store":
        return <StoreContent />
      case "affiliates":
        return <AffiliatesContent />
      case "settings":
        return <SettingsContent />
      default:
        return <OverviewContent />
    }
  }

  function OverviewContent() {
    return (
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium dark:text-white">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$45,231.89</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium dark:text-white">Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">+2,350</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
                +180.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium dark:text-white">Transactions</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">+12,234</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
                +19% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium dark:text-white">Active Now</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">+573</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-r from-slate-50 to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-300">Chart visualization would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Recent Transactions</CardTitle>
              <CardDescription className="dark:text-gray-400">You made 265 transactions this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
                  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
                  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
                  { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
                  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt="Avatar" />
                      <AvatarFallback>
                        {transaction.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none dark:text-white">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.email}</p>
                    </div>
                    <div className="ml-auto font-medium text-green-600">{transaction.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  function SubscriptionsContent() {
    const [showCreateModal, setShowCreateModal] = useState(false)

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Active Subscriptions</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your recurring revenue streams</p>
          </div>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Subscription
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Monthly Recurring Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$15,231</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Active Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">1,234</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +5.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Churn Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">2.1%</div>
              <p className="text-xs text-red-600 flex items-center">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                +0.3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Subscription Plans</CardTitle>
            <CardDescription className="dark:text-gray-400">Overview of your subscription offerings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { plan: "Basic Plan", price: "$9.99/month", subscribers: 456, status: "Active" },
                { plan: "Pro Plan", price: "$19.99/month", subscribers: 234, status: "Active" },
                { plan: "Enterprise Plan", price: "$49.99/month", subscribers: 89, status: "Active" },
              ].map((subscription, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border dark:border-gray-600 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium dark:text-white">{subscription.plan}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{subscription.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium dark:text-white">{subscription.subscribers} subscribers</p>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    >
                      {subscription.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Create Subscription Modal */}
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="dark:text-white">Create New Subscription Plan</DialogTitle>
              <DialogDescription className="dark:text-gray-400">
                Set up a new subscription plan for your customers.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="plan-name" className="dark:text-white">
                  Plan Name
                </Label>
                <Input
                  id="plan-name"
                  placeholder="e.g., Premium Plan"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price" className="dark:text-white">
                  Price
                </Label>
                <Input
                  id="price"
                  placeholder="e.g., 29.99"
                  type="number"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="billing-cycle" className="dark:text-white">
                  Billing Cycle
                </Label>
                <Select>
                  <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectValue placeholder="Select billing cycle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="dark:text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe what's included in this plan..."
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => setShowCreateModal(false)}
                className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
              >
                Create Plan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  function PaymentLinksContent() {
    const [showCreateModal, setShowCreateModal] = useState(false)

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Payment Links</h2>
            <p className="text-gray-600 dark:text-gray-400">Create and manage payment links for quick transactions</p>
          </div>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Link
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Total Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">47</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">12 active, 35 completed</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Revenue from Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$8,234</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +15.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">68.2%</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +2.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Recent Payment Links</CardTitle>
            <CardDescription className="dark:text-gray-400">Your most recent payment link activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Invoice #1234", amount: "$299.00", status: "Paid", date: "2 hours ago" },
                { title: "Product Purchase", amount: "$49.99", status: "Active", date: "1 day ago" },
                { title: "Service Fee", amount: "$150.00", status: "Expired", date: "3 days ago" },
                { title: "Consultation", amount: "$200.00", status: "Paid", date: "1 week ago" },
              ].map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border dark:border-gray-600 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium dark:text-white">{link.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{link.date}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">{link.amount}</span>
                    <Badge
                      variant={
                        link.status === "Paid" ? "default" : link.status === "Active" ? "secondary" : "destructive"
                      }
                      className={
                        link.status === "Paid"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : link.status === "Active"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }
                    >
                      {link.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="dark:hover:bg-green-500/20">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Create Payment Link Modal */}
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="dark:text-white">Create Payment Link</DialogTitle>
              <DialogDescription className="dark:text-gray-400">
                Create a shareable payment link for your customers.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="link-title" className="dark:text-white">
                  Title
                </Label>
                <Input
                  id="link-title"
                  placeholder="e.g., Invoice #1234"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount" className="dark:text-white">
                  Amount
                </Label>
                <Input
                  id="amount"
                  placeholder="e.g., 99.99"
                  type="number"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="currency" className="dark:text-white">
                  Currency
                </Label>
                <Select>
                  <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="dark:text-white">
                  Description (Optional)
                </Label>
                <Textarea
                  id="description"
                  placeholder="Add a description for this payment..."
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="collect-address" />
                <Label htmlFor="collect-address" className="dark:text-white">
                  Collect customer address
                </Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => setShowCreateModal(false)}
                className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
              >
                Create Link
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  function PayoutsContent() {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Payouts</h2>
            <p className="text-gray-600 dark:text-gray-400">Track and manage your payouts</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Available Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$12,345.67</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Ready for payout</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Pending Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">$3,456.78</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Processing</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$45,231.89</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Total Payouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$234,567.89</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">All time</p>
            </CardContent>
          </Card>
        </div>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Payout History</CardTitle>
            <CardDescription className="dark:text-gray-400">Your recent payout transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "PO-001",
                  amount: "$2,500.00",
                  status: "Completed",
                  date: "Jan 15, 2024",
                  method: "Bank Transfer",
                },
                {
                  id: "PO-002",
                  amount: "$1,800.00",
                  status: "Processing",
                  date: "Jan 12, 2024",
                  method: "Bank Transfer",
                },
                {
                  id: "PO-003",
                  amount: "$3,200.00",
                  status: "Completed",
                  date: "Jan 10, 2024",
                  method: "Bank Transfer",
                },
                { id: "PO-004", amount: "$950.00", status: "Failed", date: "Jan 8, 2024", method: "Bank Transfer" },
              ].map((payout, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border dark:border-gray-600 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium dark:text-white">{payout.id}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {payout.date} • {payout.method}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium dark:text-white">{payout.amount}</span>
                    <Badge
                      variant={
                        payout.status === "Completed"
                          ? "default"
                          : payout.status === "Processing"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        payout.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : payout.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }
                    >
                      {payout.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  function VirtualCardsContent() {
    const [showCreateModal, setShowCreateModal] = useState(false)

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Virtual Cards & Accounts</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your virtual payment methods</p>
          </div>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Card
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Virtual Cards</CardTitle>
              <CardDescription className="dark:text-gray-400">Secure cards for online transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Marketing Expenses", number: "**** 1234", limit: "$5,000", spent: "$2,340" },
                  { name: "Software Subscriptions", number: "**** 5678", limit: "$2,000", spent: "$1,450" },
                  { name: "Travel & Entertainment", number: "**** 9012", limit: "$3,000", spent: "$890" },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 text-white"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{card.name}</h3>
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <p className="text-sm opacity-80 mb-3">{card.number}</p>
                    <div className="flex justify-between text-sm">
                      <span>Spent: {card.spent}</span>
                      <span>Limit: {card.limit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Virtual Accounts</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Dedicated accounts for different purposes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Main Business Account", balance: "$45,230.50", type: "Primary" },
                  { name: "Escrow Account", balance: "$12,500.00", type: "Escrow" },
                  { name: "Reserve Fund", balance: "$8,750.25", type: "Reserve" },
                ].map((account, index) => (
                  <div key={index} className="p-4 border dark:border-gray-600 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium dark:text-white">{account.name}</h3>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {account.type}
                        </Badge>
                      </div>
                      <CreditCard className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-2xl font-bold text-green-600">{account.balance}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Create Virtual Card Modal */}
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="dark:text-white">Create Virtual Card</DialogTitle>
              <DialogDescription className="dark:text-gray-400">
                Create a new virtual card for secure online transactions.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="card-name" className="dark:text-white">
                  Card Name
                </Label>
                <Input
                  id="card-name"
                  placeholder="e.g., Marketing Expenses"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="spending-limit" className="dark:text-white">
                  Spending Limit
                </Label>
                <Input
                  id="spending-limit"
                  placeholder="e.g., 5000"
                  type="number"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="card-type" className="dark:text-white">
                  Card Type
                </Label>
                <Select>
                  <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectValue placeholder="Select card type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single-use">Single Use</SelectItem>
                    <SelectItem value="recurring">Recurring</SelectItem>
                    <SelectItem value="unlimited">Unlimited</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="freeze-card" />
                <Label htmlFor="freeze-card" className="dark:text-white">
                  Freeze card after creation
                </Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => setShowCreateModal(false)}
                className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
              >
                Create Card
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  function StoreContent() {
    const [showCreateModal, setShowCreateModal] = useState(false)

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Store</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your products and inventory</p>
          </div>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">156</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">12 added this month</p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Store Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$23,456</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +18.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">1,234</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">3.2%</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +0.5% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Top Products</CardTitle>
            <CardDescription className="dark:text-gray-400">Your best-selling products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Premium Course Bundle", price: "$299.00", sales: 45, revenue: "$13,455" },
                { name: "Digital Marketing Guide", price: "$49.99", sales: 123, revenue: "$6,149" },
                { name: "Business Template Pack", price: "$19.99", sales: 89, revenue: "$1,779" },
                { name: "Consultation Session", price: "$150.00", sales: 12, revenue: "$1,800" },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border dark:border-gray-600 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium dark:text-white">{product.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {product.price} • {product.sales} sales
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">{product.revenue}</p>
                    <Button variant="ghost" size="sm" className="dark:hover:bg-green-500/20">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add Product Modal */}
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="dark:text-white">Add New Product</DialogTitle>
              <DialogDescription className="dark:text-gray-400">Add a new product to your store.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="product-name" className="dark:text-white">
                  Product Name
                </Label>
                <Input
                  id="product-name"
                  placeholder="e.g., Premium Course"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="product-price" className="dark:text-white">
                  Price
                </Label>
                <Input
                  id="product-price"
                  placeholder="e.g., 99.99"
                  type="number"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="product-category" className="dark:text-white">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital">Digital Product</SelectItem>
                    <SelectItem value="physical">Physical Product</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="product-description" className="dark:text-white">
                  Description
                </Label>
                <Textarea
                  id="product-description"
                  placeholder="Describe your product..."
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="product-active" />
                <Label htmlFor="product-active" className="dark:text-white">
                  Make product active
                </Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => setShowCreateModal(false)}
                className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
              >
                Add Product
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  function AffiliatesContent() {
    const [showCreateModal, setShowCreateModal] = useState(false)

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Affiliates</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your affiliate program</p>
          </div>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Invite Affiliate
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Active Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">47</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +5 this month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Commission Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$8,234</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +22.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Referral Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">$45,678</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +18.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-sm font-medium dark:text-white">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold dark:text-white">4.2%</div>
              <p className="text-xs text-green-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +0.8% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Top Affiliates</CardTitle>
            <CardDescription className="dark:text-gray-400">Your highest performing affiliate partners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah Johnson", email: "sarah@example.com", sales: 23, commission: "$1,150", rate: "5%" },
                { name: "Mike Chen", email: "mike@example.com", sales: 18, commission: "$900", rate: "5%" },
                { name: "Emma Davis", email: "emma@example.com", sales: 15, commission: "$750", rate: "5%" },
                { name: "Alex Rodriguez", email: "alex@example.com", sales: 12, commission: "$600", rate: "5%" },
              ].map((affiliate, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border dark:border-gray-600 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>
                        {affiliate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium dark:text-white">{affiliate.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{affiliate.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium dark:text-white">{affiliate.sales} sales</p>
                    <p className="text-sm text-green-600">
                      {affiliate.commission} ({affiliate.rate})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Invite Affiliate Modal */}
        <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
          <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="dark:text-white">Invite Affiliate</DialogTitle>
              <DialogDescription className="dark:text-gray-400">
                Invite a new affiliate to join your program.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="affiliate-name" className="dark:text-white">
                  Full Name
                </Label>
                <Input
                  id="affiliate-name"
                  placeholder="e.g., John Doe"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="affiliate-email" className="dark:text-white">
                  Email Address
                </Label>
                <Input
                  id="affiliate-email"
                  placeholder="e.g., john@example.com"
                  type="email"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="commission-rate" className="dark:text-white">
                  Commission Rate (%)
                </Label>
                <Input
                  id="commission-rate"
                  placeholder="e.g., 5"
                  type="number"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="invite-message" className="dark:text-white">
                  Personal Message (Optional)
                </Label>
                <Textarea
                  id="invite-message"
                  placeholder="Add a personal message to your invitation..."
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => setShowCreateModal(false)}
                className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
              >
                Send Invitation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  function SettingsContent() {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold dark:text-white">Settings</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Account Information</CardTitle>
              <CardDescription className="dark:text-gray-400">Update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="dark:text-white">
                  Company Name
                </Label>
                <Input id="company" defaultValue="Acme Inc." className="dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="dark:text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john@acme.com"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="dark:text-white">
                  Phone
                </Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" className="dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Payment Settings</CardTitle>
              <CardDescription className="dark:text-gray-400">Configure your payment preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="dark:text-white">Auto Payouts</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Automatically transfer funds to your bank account
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="dark:text-white">Email Notifications</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Receive email alerts for transactions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="dark:text-white">Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">API Keys</CardTitle>
              <CardDescription className="dark:text-gray-400">Manage your API access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="dark:text-white">Publishable Key</Label>
                <div className="flex space-x-2">
                  <Input
                    value="pk_test_..."
                    readOnly
                    className="font-mono text-sm dark:bg-gray-700 dark:border-gray-600"
                  />
                  <Button variant="outline" size="icon" className="dark:hover:bg-green-500/20 bg-transparent">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="dark:text-white">Secret Key</Label>
                <div className="flex space-x-2">
                  <Input
                    value="sk_test_..."
                    readOnly
                    className="font-mono text-sm dark:bg-gray-700 dark:border-gray-600"
                    type="password"
                  />
                  <Button variant="outline" size="icon" className="dark:hover:bg-green-500/20 bg-transparent">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
                Generate New Keys
              </Button>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Danger Zone</CardTitle>
              <CardDescription className="dark:text-gray-400">Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
                <h3 className="font-medium text-red-900 dark:text-red-200 mb-2">Delete Account</h3>
                <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <div
          className={cn(
            "bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ease-in-out",
            sidebarCollapsed ? "w-16" : "w-64",
          )}
        >
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className={cn("flex items-center space-x-2", sidebarCollapsed && "justify-center")}>
              <div className="w-8 h-8 bg-gradient-to-r from-slate-900 to-green-500 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              {!sidebarCollapsed && <span className="text-xl font-bold text-slate-900 dark:text-white">Payflox</span>}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="h-8 w-8 dark:hover:bg-green-500/20 hover:bg-gray-100"
            >
              {sidebarCollapsed ? <Menu className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const isActive = activeTab === item.id
                const buttonContent = (
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center text-left transition-colors rounded-lg",
                      sidebarCollapsed ? "justify-center p-3" : "space-x-3 px-3 py-2",
                      isActive
                        ? "bg-slate-900 dark:bg-green-600 text-white"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-green-500/20 hover:text-slate-900 dark:hover:text-green-400",
                    )}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
                  </button>
                )

                return (
                  <li key={item.id}>
                    {sidebarCollapsed ? (
                      <Tooltip>
                        <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
                        <TooltipContent side="right">
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      buttonContent
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full p-2 dark:hover:bg-green-500/20 hover:bg-gray-100",
                    sidebarCollapsed ? "justify-center" : "justify-start",
                  )}
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {!sidebarCollapsed && (
                    <div className="text-left ml-3">
                      <div className="font-medium text-sm dark:text-white">John Doe</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">john@company.com</div>
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white capitalize">
                  {activeTab.replace("-", " ")}
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search..." className="pl-10 w-64 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="dark:hover:bg-green-500/20 hover:bg-gray-100"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
                <Button variant="ghost" size="icon" className="dark:hover:bg-green-500/20 hover:bg-gray-100">
                  <Bell className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900">{renderContent()}</main>
        </div>
      </div>
    </TooltipProvider>
  )
}
