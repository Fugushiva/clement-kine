import { HomeHero } from '@/components/sections/HomeHero'
import { HomeWedges } from '@/components/sections/HomeWedges'
import { HomeServicesOverview } from '@/components/sections/HomeServicesOverview'
import { HomeStats } from '@/components/sections/HomeStats'
import { HomeCabinetsPreview } from '@/components/sections/HomeCabinetsPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'
import { StickyCTABar } from '@/components/sections/StickyCTABar'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWedges />
      <HomeServicesOverview />
      <HomeStats />
      <HomeCabinetsPreview />
      <Testimonials filter="all" />
      <CTASection />
      <StickyCTABar />
    </>
  )
}
