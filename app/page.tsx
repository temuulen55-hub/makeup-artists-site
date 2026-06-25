import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-content px-5 py-20 text-center lg:px-8 lg:py-32">
      <h1 className="font-serif text-4xl leading-tight text-charcoal lg:text-6xl">
        Гоо сайхныг мэргэжлийн гараар
      </h1>
      <p className="mx-auto mt-5 max-w-xl font-sans text-base text-charcoal/70 lg:text-lg">
        Сүйт бүсгүйн, фэшн болон өдөр тутмын мэйкап үйлчилгээ — Улаанбаатар
        хотод.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/zahialga" className="btn-primary">
          Захиалга өгөх
        </Link>
        <Link href="/buteeluud" className="btn-secondary">
          Бүтээлүүдийг үзэх
        </Link>
      </div>
    </section>
  );
}
