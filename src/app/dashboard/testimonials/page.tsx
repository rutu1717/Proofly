import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Filter,
  Download,
  Search,
  Star,
  Edit,
  Trash2,
  ThumbsUp,
  MessageSquare,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
        <Button>Request New Testimonials</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Testimonials</CardTitle>
          <CardDescription>View, approve, and organize all your customer testimonials</CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search testimonials..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-4">
              {/* Sample Testimonials */}
              {[
                {
                  id: 1,
                  name: "John Doe",
                  position: "CEO at Example Company",
                  rating: 5,
                  content:
                    "TestiTrack has completely transformed how we collect and showcase customer testimonials. The platform is intuitive, and the widgets look great on our website. Our conversion rate has increased by 15% since implementing TestiTrack!",
                  tags: ["Product", "Website"],
                  verified: true,
                  status: "approved",
                },
                {
                  id: 2,
                  name: "Sarah Johnson",
                  position: "Marketing Director at Tech Solutions",
                  rating: 4,
                  content:
                    "We've been using TestiTrack for 3 months now and it's been a game-changer for our marketing efforts. The sentiment analysis helps us understand what customers love most about our products.",
                  tags: ["Marketing", "Analytics"],
                  verified: true,
                  status: "approved",
                },
                {
                  id: 3,
                  name: "Michael Chen",
                  position: "E-commerce Manager",
                  rating: 5,
                  content:
                    "The video testimonial feature is incredible! Our customers love being able to share their experiences in a more personal way, and it's helped us build much stronger social proof.",
                  tags: ["Video", "Social Proof"],
                  verified: false,
                  status: "pending",
                },
              ].map((testimonial) => (
                <div key={testimonial.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                    <div className="flex items-center">
                      {Array(5)
                        .fill(0)
                        .map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill={j < testimonial.rating ? "currentColor" : "none"}
                          />
                        ))}
                    </div>
                  </div>
                  <p className="text-sm mb-3">{testimonial.content}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {testimonial.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                    {testimonial.verified && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified Purchase</Badge>
                    )}
                    {testimonial.status === "pending" && (
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending Review</Badge>
                    )}
                  </div>
                  <div className="flex gap-2 justify-end">
                    {testimonial.status === "pending" ? (
                      <>
                        <Button size="sm" variant="outline" className="h-8 text-green-600">
                          <CheckCircle className="mr-1 h-4 w-4" /> Approve
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 text-red-600">
                          <XCircle className="mr-1 h-4 w-4" /> Reject
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button size="sm" variant="outline" className="h-8">
                          <ThumbsUp className="mr-1 h-4 w-4" /> Feature
                        </Button>
                        <Button size="sm" variant="outline" className="h-8">
                          <Edit className="mr-1 h-4 w-4" /> Edit
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 text-red-600">
                          <Trash2 className="mr-1 h-4 w-4" /> Delete
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="pending">
              <div className="p-8 text-center">
                <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">No pending testimonials</h3>
                <p className="text-sm text-muted-foreground">All testimonials have been reviewed. Great job!</p>
              </div>
            </TabsContent>
            <TabsContent value="approved">
              <div className="p-8 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Switch to the "All" tab</h3>
                <p className="text-sm text-muted-foreground">
                  To see all approved testimonials, please switch to the "All" tab
                </p>
              </div>
            </TabsContent>
            <TabsContent value="featured">
              <div className="p-8 text-center">
                <Star className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">No featured testimonials</h3>
                <p className="text-sm text-muted-foreground">
                  Feature your best testimonials to highlight them in widgets
                </p>
                <Button className="mt-4" variant="outline">
                  Learn how to feature testimonials
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
