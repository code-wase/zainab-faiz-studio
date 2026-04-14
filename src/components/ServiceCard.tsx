interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  delay?: number;
}

const ServiceCard = ({ image, title, description, price, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className="group bg-gradient-card rounded-xl overflow-hidden gold-border hover-gold-glow transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <h3 className="absolute bottom-3 left-4 right-4 font-heading text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="p-5">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">From {price}</span>
          <div className="flex gap-2">
            <a
              href={`https://wa.me/918123338996?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
            <a href="/services" className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-gold transition-colors flex items-center gap-1">
              Details <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
