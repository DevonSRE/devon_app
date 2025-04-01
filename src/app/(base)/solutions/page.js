import ContactUs from "@/features/homepage/components/contact-us";
import { Partners } from "@/features/homepage/components/partners";
import { OurSolutionsHero } from "@/features/homepage/components/solutions/our-solutions-hero";
import { Products } from "@/features/homepage/components/solutions/products";
import { ProductsHighlight } from "@/features/homepage/components/solutions/products-highlight";

export default async function Page() {
  return (
    <main>
      <OurSolutionsHero />
      <Partners />
      <ProductsHighlight />
      <Products />
      <div className="bg-neutral-100">
        <ContactUs />
      </div>
    </main>
  );
}
