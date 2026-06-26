import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogList from "@/components/sections/BlogList";

export default function ZovlogooPage() {
  return (
    <>
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Блог"
            title="Гоо сайхны зөвлөгөө"
            subtitle="Мэргэжлийн гоо сайханч болон нүүр будгын артистаас сурах хэрэгтэй мэдлэг — арьс арчилгаа, тохирсон бүтээгдэхүүн таних, алхам алхамаар заавар."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <BlogList />
        </Container>
      </section>
    </>
  );
}
