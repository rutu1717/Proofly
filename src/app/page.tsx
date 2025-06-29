"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { ReactElement } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, MessageSquare, BarChart3, Code } from "lucide-react"
import { Navbar } from "@/components/ui/Navbar"
import { createClient } from "@/utils/supabase/client"

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }
    fetchUser()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <Navbar />
      <header className="bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Collect & Showcase Authentic Customer Testimonials
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-300">
            TestiTrack helps businesses build trust and increase conversions with verified customer testimonials
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-emerald-500 text-black hover:bg-emerald-400 font-semibold">
              <Link href="/register">Start Free Trial</Link>
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
      <section className="py-20 bg-gray-950">
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
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Leverage Your Customer Testimonials?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using TestiTrack to build trust and drive conversions
          </p>
          <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">
            <Link href="/signup">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-emerald-400">TestiTrack</h3>
              <p className="text-gray-400">The complete testimonial management platform for growing businesses</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TestiTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
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
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-sm hover:shadow-lg hover:border-emerald-500/50 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
