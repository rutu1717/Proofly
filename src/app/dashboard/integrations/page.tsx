"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, ExternalLink, Settings, Globe, FileCode, Layers } from "lucide-react"
import { useState } from "react"

export default function IntegrationsPage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" /> API Settings
        </Button>
      </div>

      <Tabs defaultValue="widgets">
        <TabsList>
          <TabsTrigger value="widgets">Website Widgets</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
        </TabsList>

        <TabsContent value="widgets" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Widgets</CardTitle>
              <CardDescription>Embed testimonials directly on your website with customizable widgets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <WidgetCard
                  title="Testimonial Carousel"
                  description="A rotating carousel of your best testimonials"
                  icon={<Layers className="h-10 w-10 text-purple-600" />}
                />
                <WidgetCard
                  title="Grid Display"
                  description="A responsive grid layout of testimonials"
                  icon={<FileCode className="h-10 w-10 text-purple-600" />}
                />
                <WidgetCard
                  title="Floating Widget"
                  description="A non-intrusive widget that appears in the corner"
                  icon={<Globe className="h-10 w-10 text-purple-600" />}
                />
              </div>

              <div className="rounded-md border p-4">
                <h3 className="text-lg font-medium mb-2">Testimonial Carousel Embed Code</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Copy and paste this code into your website where you want the carousel to appear.
                </p>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>{`<script src="https://testimonials.testitrack.com/widget.js" data-widget="carousel" data-id="acme-inc"></script>`}</code>
                  </pre>
                  <CopyButton
                    text={`<script src="https://testimonials.testitrack.com/widget.js" data-widget="carousel" data-id="acme-inc"></script>`}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Settings className="mr-2 h-4 w-4" /> Customize Widgets
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>Access your testimonials programmatically with our REST API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md border p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Your API Key</h3>
                  <Badge variant="outline">Production</Badge>
                </div>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                    <code>tt_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</code>
                  </pre>
                  <CopyButton text="tt_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Keep this key secret. You can regenerate it at any time if needed.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">API Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our comprehensive API documentation includes all endpoints, parameters, and example responses.
                </p>
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" /> View API Documentation
                </Button>
              </div>

              <div>
                <h3 className="font-medium mb-2">Example Request</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  <code>{`fetch('https://api.testitrack.com/v1/testimonials', {
  headers: {
    'Authorization': 'Bearer tt_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="platforms" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Platform Integrations</CardTitle>
              <CardDescription>Connect TestiTrack with your favorite platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PlatformCard name="WordPress" description="Add testimonials to your WordPress site" connected={true} />
                <PlatformCard
                  name="Shopify"
                  description="Display testimonials on your Shopify store"
                  connected={false}
                />
                <PlatformCard
                  name="Webflow"
                  description="Integrate testimonials with your Webflow site"
                  connected={false}
                />
                <PlatformCard name="Wix" description="Add testimonials to your Wix website" connected={false} />
                <PlatformCard
                  name="Squarespace"
                  description="Display testimonials on your Squarespace site"
                  connected={false}
                />
                <PlatformCard name="Custom CMS" description="Connect to any custom CMS via our API" connected={false} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface WidgetCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function WidgetCard({ title, description, icon }: WidgetCardProps) {
  return (
    <div className="rounded-lg border p-4 hover:border-purple-200 hover:bg-purple-50 transition-colors">
      <div className="mb-3">{icon}</div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Button variant="outline" size="sm" className="mt-3 w-full">
        Configure
      </Button>
    </div>
  )
}

interface PlatformCardProps {
  name: string;
  description: string;
  connected: boolean;
}

function PlatformCard({ name, description, connected }: PlatformCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{name}</h3>
        {connected ? <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Connected</Badge> : null}
      </div>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <Button variant={connected ? "outline" : "default"} size="sm" className="w-full">
        {connected ? "Manage" : "Connect"}
      </Button>
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={handleCopy}>
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy code</span>
    </Button>
  )
}
