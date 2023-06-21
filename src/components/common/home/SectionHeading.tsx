type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="container">
      <div className="max-w-md mx-auto mb-16 text-center lg:max-w-2xl">
        <h2 className="text-4xl font-bold">{title}</h2>
        {subtitle && (
          <p className="mt-4 md:mt-6 lg:text-xl text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
