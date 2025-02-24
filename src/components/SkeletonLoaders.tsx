
import { Skeleton } from "@/components/ui/skeleton"

export const HeroSkeleton = () => (
  <div className="w-full space-y-8 py-20">
    <Skeleton className="h-12 w-3/4 mx-auto" />
    <Skeleton className="h-6 w-2/4 mx-auto" />
    <div className="flex justify-center gap-4 mt-8">
      <Skeleton className="h-10 w-32" />
      <Skeleton className="h-10 w-32" />
    </div>
  </div>
)

export const ServicesSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="space-y-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    ))}
  </div>
)

export const TestimonialSkeleton = () => (
  <div className="w-full max-w-4xl mx-auto p-8">
    <Skeleton className="h-8 w-64 mx-auto mb-8" />
    <div className="space-y-4 p-8 rounded-2xl">
      <Skeleton className="h-20 w-full" />
      <div className="flex items-center gap-4 mt-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  </div>
)
