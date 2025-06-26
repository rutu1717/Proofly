import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Copy, Share, MoreHorizontal, ExternalLink, Palette, Settings, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CollectionPage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Collection Pages</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create New Page
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Pages</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                name: "Product Feedback",
                url: "acme-product-feedback",
                responses: 87,
                lastUpdated: "2 days ago",
                theme: "Light Blue",
              },
              {
                id: 2,
                name: "Customer Success Stories",
                url: "acme-success-stories",
                responses: 42,
                lastUpdated: "1 week ago",
                theme: "Purple",
              },
              {
                id: 3,
                name: "Service Experience",
                url: "acme-service-experience",
                responses: 23,
                lastUpdated: "3 days ago",
                theme: "Green",
              },
            ].map((page) => (
              <Card key={page.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle>{page.name}</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="mr-2 h-4 w-4" /> Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share className="mr-2 h-4 w-4" /> Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Palette className="mr-2 h-4 w-4" /> Change Theme
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" /> Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" /> Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>
                    <span className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        {page.responses} responses
                      </Badge>
                      <span className="text-xs text-muted-foreground">• Updated {page.lastUpdated}</span>
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border p-2 text-sm">testimonials.testitrack.com/{page.url}</div>
                  <div className="mt-3 flex items-center text-sm text-muted-foreground">
                    <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                    Active • Theme: {page.theme}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Preview
                  </Button>
                  <Button size="sm">
                    <Share className="mr-2 h-4 w-4" /> Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="drafts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Draft Pages</CardTitle>
              <CardDescription>Pages you've started but haven't published yet</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <div className="text-center">
                <h3 className="text-lg font-medium">No draft pages</h3>
                <p className="text-sm text-muted-foreground mt-1">You don't have any draft collection pages yet</p>
                <Button className="mt-4">
                  <Plus className="mr-2 h-4 w-4" /> Create New Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="archived" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Archived Pages</CardTitle>
              <CardDescription>Pages you've archived and are no longer active</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <div className="text-center">
                <h3 className="text-lg font-medium">No archived pages</h3>
                <p className="text-sm text-muted-foreground mt-1">You haven't archived any collection pages yet</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
