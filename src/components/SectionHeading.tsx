interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  gold?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true, gold = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${gold ? "text-gradient-gold" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-primary to-gold rounded-full ${center ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
