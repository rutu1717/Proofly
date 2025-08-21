import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, Download, Search } from "lucide-react"

// function SkeletonCard() {
//   return (
//     <Card className="bg-gray-800 border-gray-700">
//       <CardContent className="p-5">
//         <div className="flex justify-between items-start mb-4">
//           <div>
//             <div className="h-6 w-32 bg-gray-700 rounded animate-pulse mb-2"></div>
//             <div className="h-4 w-48 bg-gray-700 rounded animate-pulse"></div>
//           </div>
//           <div className="flex items-center gap-1">
//             <div className="h-5 w-24 bg-gray-700 rounded animate-pulse"></div>
//           </div>
//         </div>
//         <div className="space-y-2">
//           <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
//           <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <div className="h-6 w-24 bg-gray-700 rounded-full animate-pulse"></div>
//           <div className="flex gap-2">
//             <div className="h-8 w-24 bg-gray-700 rounded-md animate-pulse"></div>
//             <div className="h-8 w-24 bg-gray-700 rounded-md animate-pulse"></div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

function SkeletonCard() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="h-6 w-32 bg-gray-700 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-48 bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-5 w-24 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-6 w-24 bg-gray-700 rounded-full animate-pulse"></div>
          <div className="flex gap-2">
            <div className="h-8 w-24 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-8 w-24 bg-gray-700 rounded-md animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex-1 space-y-6 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-white">Testimonials</h1>
          <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold" disabled>
            Request New Testimonials
          </Button>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Manage Testimonials</CardTitle>
            <CardDescription className="text-gray-400">
              View, approve, and organize all your customer testimonials
            </CardDescription>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Space</label>
                <div className="h-10 w-full bg-gray-800 border border-gray-700 rounded-md animate-pulse"></div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <div className="h-10 w-full pl-10 bg-gray-800 border border-gray-700 rounded-md animate-pulse"></div>
                </div>
              </div>

              <div className="flex gap-2 items-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-700 text-gray-300"
                  disabled
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-700 text-gray-300"
                  disabled
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent"></div>
              <span className="ml-4 text-gray-400">Loading testimonials...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
