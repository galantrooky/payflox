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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Shield,
  Activity,
  Server,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  Globe,
  Database,
  Headphones,
  FileText,
  Filter,
  RefreshCw,
  ExternalLink,
} from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "users", label: "User Management", icon: Users },
  { id: "transactions", label: "Transactions", icon: CreditCard },
  { id: "integrations", label: "Integrations", icon: Link },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "system", label: "System Health", icon: Server },
  { id: "support", label: "Support", icon: Headphones },
  { id: "settings", label: "Admin Settings", icon: Settings },
]

export default function PayfloxAdminPanel() {
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

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent />
      case "users":
        return <UsersContent />
      case "transactions":
        return <TransactionsContent />
      case "integrations":
        return <IntegrationsContent />
      case "analytics":
        return <AnalyticsContent />
      case "system":
        return <SystemHealthContent />
      case "support":
        return <SupportContent />
      case "settings":
        return <AdminSettingsContent />
      default:
        return <OverviewContent />
    }
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
                <Shield className="w-5 h-5 text-white" />
              </div>
              {!sidebarCollapsed && (
                <div>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">Payflox</span>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Admin Panel</div>
                </div>
              )}
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

          {/* Admin Profile */}
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
                    <AvatarFallback className="bg-green-600 text-white">AD</AvatarFallback>
                  </Avatar>
                  {!sidebarCollapsed && (
                    <div className="text-left ml-3">
                      <div className="font-medium text-sm dark:text-white">Admin User</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">admin@payflox.com</div>
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Admin Settings
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Payflox Admin Panel - Monitor and manage the entire platform
                </p>
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
                <Button variant="ghost" size="icon" className="dark:hover:bg-green-500/20 hover:bg-gray-100 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
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

function OverviewContent() {
  return (
    <div className="space-y-6">
      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium dark:text-white">System Status</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-lg font-semibold text-green-600">Operational</span>
            </div>
            <p className="text-xs text-muted-foreground">99.9% uptime</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium dark:text-white">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">12,847</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              +234 this week
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium dark:text-white">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">$2.4M</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="w-3 h-3 text-green-500 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium dark:text-white">Active Integrations</CardTitle>
            <Link className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">8,234</div>
            <p className="text-xs text-muted-foreground">Shopify: 5,123 • WooCommerce: 3,111</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Recent Activity</CardTitle>
            <CardDescription className="dark:text-gray-400">Latest system events and user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "New user registration",
                  user: "john@example.com",
                  time: "2 minutes ago",
                  type: "success",
                },
                {
                  action: "Shopify integration connected",
                  user: "sarah@store.com",
                  time: "5 minutes ago",
                  type: "info",
                },
                {
                  action: "Payment failed",
                  user: "mike@business.com",
                  time: "8 minutes ago",
                  type: "error",
                },
                {
                  action: "Large transaction processed",
                  user: "emma@company.com",
                  time: "12 minutes ago",
                  type: "warning",
                },
                {
                  action: "API key regenerated",
                  user: "alex@startup.com",
                  time: "15 minutes ago",
                  type: "info",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border dark:border-gray-600">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full",
                      activity.type === "success" && "bg-green-500",
                      activity.type === "info" && "bg-blue-500",
                      activity.type === "error" && "bg-red-500",
                      activity.type === "warning" && "bg-yellow-500",
                    )}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium dark:text-white">{activity.action}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">System Alerts</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Important notifications requiring attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">High API usage detected</p>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">
                    User "bigstore@example.com" approaching rate limits
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">Failed payment spike</p>
                  <p className="text-xs text-red-700 dark:text-red-300">15% increase in failed transactions today</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Scheduled maintenance</p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Database maintenance in 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">Security scan completed</p>
                  <p className="text-xs text-green-700 dark:text-green-300">No vulnerabilities detected</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Today's Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">23,456</div>
            <div className="text-sm text-green-600">$1.2M volume</div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">47</div>
            <div className="text-sm text-yellow-600">12 pending response</div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Server Load</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">23%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Optimal performance</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function UsersContent() {
  const [showUserModal, setShowUserModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      company: "Acme Inc.",
      plan: "Professional",
      status: "Active",
      revenue: "$12,345",
      joined: "2024-01-15",
      lastActive: "2 hours ago",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@store.com",
      company: "Fashion Store",
      plan: "Enterprise",
      status: "Active",
      revenue: "$45,678",
      joined: "2023-11-20",
      lastActive: "5 minutes ago",
    },
    {
      id: "3",
      name: "Mike Chen",
      email: "mike@business.com",
      company: "Tech Solutions",
      plan: "Starter",
      status: "Suspended",
      revenue: "$2,890",
      joined: "2024-02-01",
      lastActive: "1 day ago",
    },
    {
      id: "4",
      name: "Emma Davis",
      email: "emma@company.com",
      company: "Digital Agency",
      plan: "Professional",
      status: "Active",
      revenue: "$23,456",
      joined: "2023-12-10",
      lastActive: "30 minutes ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold dark:text-white">User Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Monitor and manage all platform users</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">12,847</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +234 this week
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">11,923</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">92.8% of total</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Enterprise Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">1,234</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +45 this month
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Avg Revenue/User</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">$187</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">All Users</CardTitle>
          <CardDescription className="dark:text-gray-400">Comprehensive list of platform users</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="dark:text-gray-300">User</TableHead>
                <TableHead className="dark:text-gray-300">Company</TableHead>
                <TableHead className="dark:text-gray-300">Plan</TableHead>
                <TableHead className="dark:text-gray-300">Status</TableHead>
                <TableHead className="dark:text-gray-300">Revenue</TableHead>
                <TableHead className="dark:text-gray-300">Last Active</TableHead>
                <TableHead className="dark:text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium dark:text-white">{user.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-gray-300">{user.company}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.plan === "Enterprise" ? "default" : "secondary"}
                      className={
                        user.plan === "Enterprise"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : ""
                      }
                    >
                      {user.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === "Active" ? "default" : "destructive"}
                      className={
                        user.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : ""
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium dark:text-white">{user.revenue}</TableCell>
                  <TableCell className="text-sm text-gray-600 dark:text-gray-400">{user.lastActive}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="dark:hover:bg-green-500/20">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedUser(user)
                            setShowUserModal(true)
                          }}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <XCircle className="mr-2 h-4 w-4" />
                          Suspend User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* User Details Modal */}
      <Dialog open={showUserModal} onOpenChange={setShowUserModal}>
        <DialogContent className="sm:max-w-[600px] dark:bg-gray-800 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="dark:text-white">User Details</DialogTitle>
            <DialogDescription className="dark:text-gray-400">
              Detailed information about {selectedUser?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="dark:text-white">Name</Label>
                  <p className="text-sm dark:text-gray-300">{selectedUser.name}</p>
                </div>
                <div>
                  <Label className="dark:text-white">Email</Label>
                  <p className="text-sm dark:text-gray-300">{selectedUser.email}</p>
                </div>
                <div>
                  <Label className="dark:text-white">Company</Label>
                  <p className="text-sm dark:text-gray-300">{selectedUser.company}</p>
                </div>
                <div>
                  <Label className="dark:text-white">Plan</Label>
                  <p className="text-sm dark:text-gray-300">{selectedUser.plan}</p>
                </div>
                <div>
                  <Label className="dark:text-white">Total Revenue</Label>
                  <p className="text-sm font-medium text-green-600">{selectedUser.revenue}</p>
                </div>
                <div>
                  <Label className="dark:text-white">Joined</Label>
                  <p className="text-sm dark:text-gray-300">{selectedUser.joined}</p>
                </div>
              </div>
              <div className="mt-4">
                <Label className="dark:text-white">Recent Activity</Label>
                <div className="mt-2 space-y-2">
                  <div className="text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    Payment processed: $299.00 - 2 hours ago
                  </div>
                  <div className="text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">API key regenerated - 1 day ago</div>
                  <div className="text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">Profile updated - 3 days ago</div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUserModal(false)}>
              Close
            </Button>
            <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
              Edit User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function TransactionsContent() {
  const transactions = [
    {
      id: "TXN-001",
      user: "john@example.com",
      amount: "$299.00",
      status: "Completed",
      method: "Credit Card",
      date: "2024-01-20 14:30",
      fee: "$8.97",
    },
    {
      id: "TXN-002",
      user: "sarah@store.com",
      amount: "$1,250.00",
      status: "Completed",
      method: "Bank Transfer",
      date: "2024-01-20 13:45",
      fee: "$37.50",
    },
    {
      id: "TXN-003",
      user: "mike@business.com",
      amount: "$89.99",
      status: "Failed",
      method: "Credit Card",
      date: "2024-01-20 12:15",
      fee: "$0.00",
    },
    {
      id: "TXN-004",
      user: "emma@company.com",
      amount: "$450.00",
      status: "Processing",
      method: "PayPal",
      date: "2024-01-20 11:30",
      fee: "$13.50",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold dark:text-white">Transaction Monitoring</h2>
          <p className="text-gray-600 dark:text-gray-400">Monitor all transactions across the platform</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Transaction Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Today's Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">$1.2M</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +15.3% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">97.8%</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">23,456 successful</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Failed Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">2.2%</div>
            <p className="text-xs text-red-600">534 failed today</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Platform Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">$36,000</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +12.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Recent Transactions</CardTitle>
          <CardDescription className="dark:text-gray-400">Latest transaction activity across all users</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="dark:text-gray-300">Transaction ID</TableHead>
                <TableHead className="dark:text-gray-300">User</TableHead>
                <TableHead className="dark:text-gray-300">Amount</TableHead>
                <TableHead className="dark:text-gray-300">Status</TableHead>
                <TableHead className="dark:text-gray-300">Method</TableHead>
                <TableHead className="dark:text-gray-300">Fee</TableHead>
                <TableHead className="dark:text-gray-300">Date</TableHead>
                <TableHead className="dark:text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-mono text-sm dark:text-gray-300">{transaction.id}</TableCell>
                  <TableCell className="dark:text-gray-300">{transaction.user}</TableCell>
                  <TableCell className="font-medium dark:text-white">{transaction.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "Completed"
                          ? "default"
                          : transaction.status === "Processing"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : transaction.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="dark:text-gray-300">{transaction.method}</TableCell>
                  <TableCell className="dark:text-gray-300">{transaction.fee}</TableCell>
                  <TableCell className="text-sm dark:text-gray-300">{transaction.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="dark:hover:bg-green-500/20">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Retry Transaction
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <XCircle className="mr-2 h-4 w-4" />
                          Refund
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function IntegrationsContent() {
  const integrations = [
    {
      id: "1",
      user: "john@example.com",
      platform: "Shopify",
      store: "Acme Store",
      status: "Connected",
      revenue: "$12,345",
      orders: "234",
      connected: "2024-01-15",
      lastSync: "2 minutes ago",
    },
    {
      id: "2",
      user: "sarah@store.com",
      platform: "WooCommerce",
      store: "Fashion Boutique",
      status: "Connected",
      revenue: "$45,678",
      orders: "567",
      connected: "2023-11-20",
      lastSync: "5 minutes ago",
    },
    {
      id: "3",
      user: "mike@business.com",
      platform: "Shopify",
      store: "Tech Solutions",
      status: "Error",
      revenue: "$2,890",
      orders: "45",
      connected: "2024-02-01",
      lastSync: "2 hours ago",
    },
    {
      id: "4",
      user: "emma@company.com",
      platform: "WooCommerce",
      store: "Digital Agency Store",
      status: "Connected",
      revenue: "$23,456",
      orders: "345",
      connected: "2023-12-10",
      lastSync: "1 minute ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold dark:text-white">Integration Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Monitor Shopify and WooCommerce connections</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync All
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Integration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Total Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">8,234</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Shopify: 5,123 • WooCommerce: 3,111</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Active Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">7,891</div>
            <p className="text-xs text-green-600 flex items-center">
              <CheckCircle className="w-3 h-3 mr-1" />
              95.8% uptime
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Failed Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">343</div>
            <p className="text-xs text-red-600">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Integration Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">$1.8M</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +18.5% this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Platform Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white flex items-center">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                <Store className="w-4 h-4 text-green-600" />
              </div>
              Shopify Integrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm dark:text-gray-300">Total Stores</span>
                <span className="font-medium dark:text-white">5,123</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm dark:text-gray-300">Active</span>
                <span className="font-medium text-green-600">4,891 (95.5%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm dark:text-gray-300">Revenue</span>
                <span className="font-medium dark:text-white">$1.1M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm dark:text-gray-300">Avg Orders/Store</span>
                <span className="font-medium dark:text-white">234</span>
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
              WooCommerce Integrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm dark:text-gray-300">Total Stores</span>
                <span className="font-medium dark:text-white">3,111</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm dark:text-gray-300">Active</span>
                <span className="font-medium text-green-600">3,000 (96.4%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm dark:text-gray-300">Revenue</span>
                <span className="font-medium dark:text-white">$700K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm dark:text-gray-300">Avg Orders/Store</span>
                <span className="font-medium dark:text-white">189</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integrations Table */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">All Integrations</CardTitle>
          <CardDescription className="dark:text-gray-400">Monitor all platform integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="dark:text-gray-300">User</TableHead>
                <TableHead className="dark:text-gray-300">Platform</TableHead>
                <TableHead className="dark:text-gray-300">Store</TableHead>
                <TableHead className="dark:text-gray-300">Status</TableHead>
                <TableHead className="dark:text-gray-300">Revenue</TableHead>
                <TableHead className="dark:text-gray-300">Orders</TableHead>
                <TableHead className="dark:text-gray-300">Last Sync</TableHead>
                <TableHead className="dark:text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {integrations.map((integration) => (
                <TableRow key={integration.id}>
                  <TableCell className="dark:text-gray-300">{integration.user}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {integration.platform === "Shopify" ? (
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center">
                          <Store className="w-3 h-3 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
                          <Globe className="w-3 h-3 text-blue-600" />
                        </div>
                      )}
                      <span className="dark:text-gray-300">{integration.platform}</span>
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-gray-300">{integration.store}</TableCell>
                  <TableCell>
                    <Badge
                      variant={integration.status === "Connected" ? "default" : "destructive"}
                      className={
                        integration.status === "Connected"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }
                    >
                      {integration.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium dark:text-white">{integration.revenue}</TableCell>
                  <TableCell className="dark:text-gray-300">{integration.orders}</TableCell>
                  <TableCell className="text-sm dark:text-gray-300">{integration.lastSync}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="dark:hover:bg-green-500/20">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Force Sync
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open Store
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <XCircle className="mr-2 h-4 w-4" />
                          Disconnect
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function AnalyticsContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold dark:text-white">Analytics Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">Platform-wide analytics and insights</p>
        </div>
        <div className="flex space-x-2">
          <Select>
            <SelectTrigger className="w-32 dark:bg-gray-700 dark:border-gray-600">
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">$2.4M</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Transaction Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">234K</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">11,923</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +5.7% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">97.8%</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +0.3% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Revenue Trend</CardTitle>
            <CardDescription className="dark:text-gray-400">Monthly revenue over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-slate-50 to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-300">Revenue chart would go here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">User Growth</CardTitle>
            <CardDescription className="dark:text-gray-400">New user registrations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-300">User growth chart would go here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Top Revenue Users</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Highest revenue generating users this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah Johnson", email: "sarah@store.com", revenue: "$45,678", growth: "+23%" },
                { name: "Emma Davis", email: "emma@company.com", revenue: "$23,456", growth: "+18%" },
                { name: "John Doe", email: "john@example.com", revenue: "$12,345", growth: "+15%" },
                { name: "Mike Chen", email: "mike@business.com", revenue: "$8,901", growth: "+12%" },
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border dark:border-gray-600 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">{user.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium dark:text-white">{user.revenue}</p>
                    <p className="text-sm text-green-600">{user.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Platform Distribution</CardTitle>
            <CardDescription className="dark:text-gray-400">Revenue breakdown by integration platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="dark:text-white">Shopify</span>
                </div>
                <div className="text-right">
                  <p className="font-medium dark:text-white">$1.1M</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">45.8%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="dark:text-white">WooCommerce</span>
                </div>
                <div className="text-right">
                  <p className="font-medium dark:text-white">$700K</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">29.2%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="dark:text-white">Direct API</span>
                </div>
                <div className="text-right">
                  <p className="font-medium dark:text-white">$400K</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">16.7%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="dark:text-white">Payment Links</span>
                </div>
                <div className="text-right">
                  <p className="font-medium dark:text-white">$200K</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">8.3%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SystemHealthContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold dark:text-white">System Health</h2>
          <p className="text-gray-600 dark:text-gray-400">Monitor system performance and infrastructure</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
            <Activity className="w-4 h-4 mr-2" />
            View Logs
          </Button>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">API Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-lg font-semibold text-green-600">Operational</span>
            </div>
            <p className="text-xs text-muted-foreground">Response time: 120ms</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Database</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-lg font-semibold text-green-600">Healthy</span>
            </div>
            <p className="text-xs text-muted-foreground">Query time: 45ms</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Payment Gateway</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span className="text-lg font-semibold text-yellow-600">Degraded</span>
            </div>
            <p className="text-xs text-muted-foreground">Higher latency detected</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">CDN</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-lg font-semibold text-green-600">Optimal</span>
            </div>
            <p className="text-xs text-muted-foreground">Global coverage: 99.9%</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Server Performance</CardTitle>
            <CardDescription className="dark:text-gray-400">Real-time server metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm dark:text-gray-300">CPU Usage</span>
                  <span className="text-sm font-medium dark:text-white">23%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "23%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm dark:text-gray-300">Memory Usage</span>
                  <span className="text-sm font-medium dark:text-white">67%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "67%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm dark:text-gray-300">Disk Usage</span>
                  <span className="text-sm font-medium dark:text-white">45%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm dark:text-gray-300">Network I/O</span>
                  <span className="text-sm font-medium dark:text-white">12%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Service Status</CardTitle>
            <CardDescription className="dark:text-gray-400">Status of all microservices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { service: "Authentication Service", status: "Operational", uptime: "99.9%" },
                { service: "Payment Processing", status: "Operational", uptime: "99.8%" },
                { service: "Notification Service", status: "Degraded", uptime: "97.2%" },
                { service: "Analytics Engine", status: "Operational", uptime: "99.9%" },
                { service: "Integration Hub", status: "Operational", uptime: "99.7%" },
                { service: "File Storage", status: "Operational", uptime: "100%" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border dark:border-gray-600 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full",
                        service.status === "Operational" ? "bg-green-500" : "bg-yellow-500",
                      )}
                    />
                    <span className="dark:text-white">{service.service}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium dark:text-white">{service.status}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{service.uptime}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Incidents */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Recent Incidents</CardTitle>
          <CardDescription className="dark:text-gray-400">System incidents and resolutions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Payment Gateway Latency",
                description: "Increased response times on payment processing",
                status: "Investigating",
                time: "2 hours ago",
                severity: "Medium",
              },
              {
                title: "Database Connection Pool",
                description: "Connection pool exhaustion resolved",
                status: "Resolved",
                time: "1 day ago",
                severity: "High",
              },
              {
                title: "CDN Cache Miss",
                description: "Higher than normal cache miss rate",
                status: "Resolved",
                time: "3 days ago",
                severity: "Low",
              },
            ].map((incident, index) => (
              <div key={index} className="p-4 border dark:border-gray-600 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium dark:text-white">{incident.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{incident.description}</p>
                  </div>
                  <Badge
                    variant={incident.status === "Resolved" ? "default" : "secondary"}
                    className={
                      incident.status === "Resolved"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }
                  >
                    {incident.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{incident.time}</span>
                  <Badge
                    variant="outline"
                    className={cn(
                      incident.severity === "High" && "border-red-500 text-red-600",
                      incident.severity === "Medium" && "border-yellow-500 text-yellow-600",
                      incident.severity === "Low" && "border-green-500 text-green-600",
                    )}
                  >
                    {incident.severity}
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

function SupportContent() {
  const [showTicketModal, setShowTicketModal] = useState(false)

  const tickets = [
    {
      id: "TKT-001",
      user: "john@example.com",
      subject: "Payment not processing",
      status: "Open",
      priority: "High",
      created: "2024-01-20 14:30",
      lastUpdate: "1 hour ago",
      assignee: "Sarah Support",
    },
    {
      id: "TKT-002",
      user: "sarah@store.com",
      subject: "Shopify integration issue",
      status: "In Progress",
      priority: "Medium",
      created: "2024-01-20 13:45",
      lastUpdate: "30 minutes ago",
      assignee: "Mike Tech",
    },
    {
      id: "TKT-003",
      user: "mike@business.com",
      subject: "API documentation question",
      status: "Resolved",
      priority: "Low",
      created: "2024-01-20 12:15",
      lastUpdate: "2 hours ago",
      assignee: "Emma Dev",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold dark:text-white">Support Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage customer support tickets and inquiries</p>
        </div>
        <Button
          onClick={() => setShowTicketModal(true)}
          className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Ticket
        </Button>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Open Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold dark:text-white">47</div>
            <p className="text-xs text-red-600">12 high priority</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">2.3h</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              -15% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">94.2%</div>
            <p className="text-xs text-green-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +2.1% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium dark:text-white">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">4.8/5</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Based on 234 reviews</p>
          </CardContent>
        </Card>
      </div>

      {/* Support Tickets Table */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Support Tickets</CardTitle>
          <CardDescription className="dark:text-gray-400">All customer support requests</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="dark:text-gray-300">Ticket ID</TableHead>
                <TableHead className="dark:text-gray-300">User</TableHead>
                <TableHead className="dark:text-gray-300">Subject</TableHead>
                <TableHead className="dark:text-gray-300">Status</TableHead>
                <TableHead className="dark:text-gray-300">Priority</TableHead>
                <TableHead className="dark:text-gray-300">Assignee</TableHead>
                <TableHead className="dark:text-gray-300">Last Update</TableHead>
                <TableHead className="dark:text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-mono text-sm dark:text-gray-300">{ticket.id}</TableCell>
                  <TableCell className="dark:text-gray-300">{ticket.user}</TableCell>
                  <TableCell className="dark:text-gray-300">{ticket.subject}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        ticket.status === "Resolved"
                          ? "default"
                          : ticket.status === "In Progress"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        ticket.status === "Resolved"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : ticket.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }
                    >
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        ticket.priority === "High" && "border-red-500 text-red-600",
                        ticket.priority === "Medium" && "border-yellow-500 text-yellow-600",
                        ticket.priority === "Low" && "border-green-500 text-green-600",
                      )}
                    >
                      {ticket.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="dark:text-gray-300">{ticket.assignee}</TableCell>
                  <TableCell className="text-sm dark:text-gray-300">{ticket.lastUpdate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="dark:hover:bg-green-500/20">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Ticket
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserCheck className="mr-2 h-4 w-4" />
                          Assign
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Mark Resolved
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Ticket Modal */}
      <Dialog open={showTicketModal} onOpenChange={setShowTicketModal}>
        <DialogContent className="sm:max-w-[500px] dark:bg-gray-800 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Create Support Ticket</DialogTitle>
            <DialogDescription className="dark:text-gray-400">
              Create a new support ticket for a user issue.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="ticket-user" className="dark:text-white">
                User Email
              </Label>
              <Input
                id="ticket-user"
                placeholder="user@example.com"
                className="dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ticket-subject" className="dark:text-white">
                Subject
              </Label>
              <Input
                id="ticket-subject"
                placeholder="Brief description of the issue"
                className="dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ticket-priority" className="dark:text-white">
                Priority
              </Label>
              <Select>
                <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ticket-description" className="dark:text-white">
                Description
              </Label>
              <Textarea
                id="ticket-description"
                placeholder="Detailed description of the issue..."
                className="dark:bg-gray-700 dark:border-gray-600"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTicketModal(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => setShowTicketModal(false)}
              className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500"
            >
              Create Ticket
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function AdminSettingsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold dark:text-white">Admin Settings</h2>
        <p className="text-gray-600 dark:text-gray-400">Configure platform-wide settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Platform Configuration</CardTitle>
            <CardDescription className="dark:text-gray-400">Core platform settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-white">Maintenance Mode</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Enable maintenance mode for updates</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-white">New User Registration</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Allow new users to register</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-white">API Rate Limiting</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Enable API rate limiting</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-requests" className="dark:text-white">
                Max Requests per Hour
              </Label>
              <Input
                id="max-requests"
                defaultValue="1000"
                type="number"
                className="dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Security Settings</CardTitle>
            <CardDescription className="dark:text-gray-400">Platform security configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-white">Two-Factor Authentication</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Require 2FA for all admin accounts</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-white">IP Whitelisting</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Restrict admin access by IP</p>
              </div>
              <Switch />
            </div>
            <div className="space-y-2">
              <Label htmlFor="session-timeout" className="dark:text-white">
                Session Timeout (minutes)
              </Label>
              <Input
                id="session-timeout"
                defaultValue="60"
                type="number"
                className="dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-policy" className="dark:text-white">
                Password Policy
              </Label>
              <Select>
                <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                  <SelectValue placeholder="Standard" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="strict">Strict</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Notification Settings</CardTitle>
            <CardDescription className="dark:text-gray-400">Configure system notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-white">Email Notifications</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Send email alerts for critical events</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-white">Slack Integration</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Send alerts to Slack channel</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alert-threshold" className="dark:text-white">
                Alert Threshold (Failed Transactions %)
              </Label>
              <Input
                id="alert-threshold"
                defaultValue="5"
                type="number"
                className="dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Backup & Recovery</CardTitle>
            <CardDescription className="dark:text-gray-400">Data backup configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-white">Automatic Backups</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">Enable scheduled backups</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backup-frequency" className="dark:text-white">
                Backup Frequency
              </Label>
              <Select>
                <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                  <SelectValue placeholder="Daily" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="retention-days" className="dark:text-white">
                Retention Period (days)
              </Label>
              <Input
                id="retention-days"
                defaultValue="30"
                type="number"
                className="dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500">
              <Database className="w-4 h-4 mr-2" />
              Create Backup Now
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Actions */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">System Actions</CardTitle>
          <CardDescription className="dark:text-gray-400">Administrative actions and utilities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
              <RefreshCw className="w-4 h-4 mr-2" />
              Clear Cache
            </Button>
            <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
              <Database className="w-4 h-4 mr-2" />
              Optimize Database
            </Button>
            <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
              <Activity className="w-4 h-4 mr-2" />
              System Health Check
            </Button>
            <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
              <Zap className="w-4 h-4 mr-2" />
              Restart Services
            </Button>
            <Button variant="outline" className="dark:hover:bg-green-500/20 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export Logs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
