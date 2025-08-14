// src/app/legal/page.tsx
export default function LegalPage() {
    return (
      <main className="min-h-[60vh] bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Legal</h1>
  
          <section className="space-y-3 mb-10">
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
            <p className="text-gray-400">
              We use Supabase authentication and essential cookies to provide and secure the service.
              We do not sell your data. (Add your detailed policy when ready.)
            </p>
          </section>
  
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Terms of Service</h2>
            <p className="text-gray-400">
              This service is provided “as is” without warranties. You are responsible for your content and usage.
              (Add full terms when ready.)
            </p>
          </section>
        </div>
      </main>
    )
}