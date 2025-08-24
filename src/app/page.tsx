"use client"
import Link from "next/link"
import Script from "next/script"
import { useEffect, useState } from "react"
import type { ReactElement } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, MessageSquare, BarChart3, Code } from "lucide-react"
import { Navbar } from "@/components/ui/Navbar"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import Footer from "@/components/Footer"
import BackgroundFX from "@/components/BackgroundFX"
export default function Home() {
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUser()
  }, [])
  const handleLogout = async () => {
    setUser(null)
    try {
      await supabase.auth.signOut()
      
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative bg-gradient-to-b from-black/90 via-gray-900/80 to-gray-950/90 backdrop-blur-sm">
        {/* Hero Section */}
        <Navbar user={user} onLogout={handleLogout} isLoading={isLoading} />
         <header className="text-white">
          <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
            <h1 className="text-4xl scroll-m-20 md:text-6xl mb-6 font-extrabold tracking-tight text-balance">
              Collect & Showcase Authentic Customer Testimonials
            </h1>
            <p className="text-xl md:text-2xl mb-8 scroll-m-20 pb-2 font-semibold tracking-tight text-balance first:mt-0">
              Proofly helps businesses build trust and increase conversions with verified <br />customer testimonials
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-emerald-500 text-black hover:bg-emerald-400 font-semibold">
                <Link href="/signup">Get Started</Link>
              </Button>
              {user && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-emerald-500 text-emerald-400 bg-transparent hover:border-emerald-500 hover:text-emerald-400 hover:bg-transparent"
                >
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              )}
            </div>
          </div>
        </header>
      
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Everything You Need to Manage Testimonials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<MessageSquare className="h-8 w-8 text-emerald-400" />}
                title="Collect Testimonials"
                description="Create branded collection forms that make it easy for customers to leave reviews"
              />
              <FeatureCard
                icon={<Star className="h-8 w-8 text-emerald-400" />}
                title="Manage & Moderate"
                description="Approve, reject, and organize testimonials from a powerful dashboard"
              />
              <FeatureCard
                icon={<Code className="h-8 w-8 text-emerald-400" />}
                title="Embed Anywhere"
                description="Display testimonials on your website with customizable widgets"
              />
              <FeatureCard
                icon={<BarChart3 className="h-8 w-8 text-emerald-400" />}
                title="Analyze Impact"
                description="Track performance and gain insights with detailed analytics"
              />
            </div>
          </div>
        </section>
              
        {/* CTA Section */}
        <section className="relative py-20 bg-gray-900/60 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Leverage Your Customer Testimonials?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using Proofly to build trust and drive conversions
            </p>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactElement
  title: string
  
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 shadow-sm hover:shadow-lg hover:border-emerald-500/50 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
