import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Facebook, Clock, Wine, Users } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Generated images placeholders (to be updated once generated)
import heroBg from "@/assets/hero-bg.png";
import drink1 from "@/assets/drink-1.png";
import drink2 from "@/assets/drink-2.png";
import drink3 from "@/assets/drink-3.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const reservationSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  date: z.string().min(1, "Selecciona una fecha"),
  time: z.string().min(1, "Selecciona una hora"),
  guests: z.string().min(1, "Número de personas"),
  notes: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function Home() {
  const { toast } = useToast();
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      date: "",
      time: "",
      guests: "",
      notes: "",
    },
  });

  const onSubmit = (data: ReservationFormValues) => {
    toast({
      title: "¡Reserva confirmada!",
      description: `Te esperamos el ${data.date} a las ${data.time}.`,
    });
    form.reset();
  };

  const menuItems = [
    {
      category: "Cocteles de la Casa",
      items: [
        { name: "Cielo de Jalisco", description: "Tequila, jugo de toronja, licor de jamaica, escarcha de tajín", price: "$140" },
        { name: "Neón Sunset", description: "Mezcal, maracuyá, toque de jalapeño, limón", price: "$150" },
        { name: "Beso de Media Noche", description: "Ginebra, frutos rojos, romero, agua tónica", price: "$160" },
      ]
    },
    {
      category: "Cervezas y Micheladas",
      items: [
        { name: "Michelada Clásica", description: "Cerveza clara u oscura, limón, salsas negras, escarcha", price: "$90" },
        { name: "Cerveza Artesanal Local", description: "IPA o Stout de la región", price: "$110" },
        { name: "Cubana", description: "Cerveza, jugo Maggi, salsa inglesa, limón", price: "$95" },
      ]
    },
    {
      category: "Shots para Olvidar",
      items: [
        { name: "Perro Rabioso", description: "Tequila, salsa tabasco, limón", price: "$70" },
        { name: "Lágrimas del Sol", description: "Licor de melón, vodka, boost", price: "$80" },
      ]
    }
  ];

  return (
    <main className="min-h-[100dvh] bg-background text-foreground overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[100dvh] flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Interior of Sunset Bar" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-6"
          >
            <p className="text-xs sm:text-sm tracking-[0.5em] text-secondary/90 mb-3 font-light" style={{ textShadow: '0 0 8px rgba(255,140,80,0.6)' }}>
              BY LUNAVA
            </p>

            <div className="relative inline-block px-8 sm:px-16">
              {/* Neon purple palm trees behind the logo */}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 200"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 w-20 sm:w-32 md:w-40 h-auto opacity-90 pointer-events-none"
                style={{ filter: 'drop-shadow(0 0 8px #a855f7) drop-shadow(0 0 16px #7c3aed)' }}
              >
                <g fill="none" stroke="#c084fc" strokeWidth="3" strokeLinecap="round">
                  <path d="M100 200 Q 95 130 100 60" />
                  <path d="M100 65 Q 60 50 35 70" />
                  <path d="M100 65 Q 70 35 50 20" />
                  <path d="M100 65 Q 130 30 160 25" />
                  <path d="M100 65 Q 145 55 175 75" />
                  <path d="M100 65 Q 80 30 70 10" />
                  <path d="M100 65 Q 120 35 135 15" />
                </g>
                <circle cx="100" cy="62" r="4" fill="#e9d5ff" />
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 200 200"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 w-20 sm:w-32 md:w-40 h-auto opacity-90 pointer-events-none scale-x-[-1]"
                style={{ filter: 'drop-shadow(0 0 8px #a855f7) drop-shadow(0 0 16px #7c3aed)' }}
              >
                <g fill="none" stroke="#c084fc" strokeWidth="3" strokeLinecap="round">
                  <path d="M100 200 Q 95 130 100 60" />
                  <path d="M100 65 Q 60 50 35 70" />
                  <path d="M100 65 Q 70 35 50 20" />
                  <path d="M100 65 Q 130 30 160 25" />
                  <path d="M100 65 Q 145 55 175 75" />
                  <path d="M100 65 Q 80 30 70 10" />
                  <path d="M100 65 Q 120 35 135 15" />
                </g>
                <circle cx="100" cy="62" r="4" fill="#e9d5ff" />
              </svg>

              <h1 className="relative text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter neon-text text-primary-foreground font-display leading-none">
                <span className="italic font-light pr-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Sunset</span>
                <span className="uppercase">Bar</span>
              </h1>
            </div>

            {/* Small purple stars above SINCE 2015 */}
            <div className="flex justify-center gap-2 mt-4 mb-1" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                  fill="#c084fc"
                  style={{ filter: 'drop-shadow(0 0 4px #a855f7) drop-shadow(0 0 8px #7c3aed)' }}
                >
                  <path d="M12 2l2.39 7.36H22l-6.2 4.5 2.4 7.36L12 16.72l-6.2 4.5 2.4-7.36L2 9.36h7.61z" />
                </svg>
              ))}
            </div>

            <p className="text-xs sm:text-sm tracking-[0.5em] text-secondary/90 font-light" style={{ textShadow: '0 0 8px rgba(255,140,80,0.6)' }}>
              SINCE 2015
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 max-w-3xl"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-secondary neon-text-orange font-display">
              "Nos gusta mucho ser de aquí"
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto italic">
              Amamos las noches que no podemos recordar con amigos que no podemos olvidar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium neon-box transition-all duration-300" onClick={() => document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' })}>
              Reservar una mesa
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. SOBRE NOSOTROS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-primary">7 Años Haciendo Historia</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nacimos en el corazón de San Diego, Jalisco, en Emiliano Zapata #48. No somos un bar clínico ni pretencioso. Somos el lugar donde las anécdotas del pueblo se escriben. Donde el atardecer se mezcla con el neón y donde la convivencia no se planea, simplemente sucede. Siete años creando el espacio perfecto para que te olvides de todo, menos de con quién viniste.
          </p>
        </div>
      </section>

      {/* 3. MENÚ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30 relative border-y border-white/5">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 font-display text-secondary">Nuestra Barra</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              {menuItems.map((category, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary font-display border-b border-primary/20 pb-2">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-baseline group">
                        <div className="max-w-[70%]">
                          <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="text-secondary font-medium text-lg">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 auto-rows-fr h-full">
              <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
                <img src={drink1} alt="Cocktail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 font-display text-xl font-bold">Neón Sunset</div>
              </div>
              <div className="relative group overflow-hidden rounded-xl aspect-[3/4]">
                <img src={drink2} alt="Margarita" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative group overflow-hidden rounded-xl aspect-[3/4]">
                <img src={drink3} alt="Michelada" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCIA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-primary">La Noche Promete</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card/40 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Wine className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-display">Bebidas de Autor</h3>
              <p className="text-muted-foreground text-sm">Mezclas que saben a esta tierra, con el toque exacto para encender la noche.</p>
            </div>
            <div className="p-6 bg-card/40 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-display">Convivencia Real</h3>
              <p className="text-muted-foreground text-sm">Aquí las mesas se juntan y las pláticas no tienen filtro. Puro ambiente de San Diego.</p>
            </div>
            <div className="p-6 bg-card/40 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-display">Noches Largas</h3>
              <p className="text-muted-foreground text-sm">La música sube, las luces bajan. Sabemos cuándo empezar, pero no cuándo terminar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALERÍA */}
      <section className="py-20 bg-background relative border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="aspect-square relative overflow-hidden group">
            <img src={gallery1} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={gallery2} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={gallery3} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src={gallery4} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* 6. UBICACIÓN & CONTACTO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-primary">Dónde Encontrarnos</h2>
            
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-foreground">Emiliano Zapata #48</p>
                  <p className="text-muted-foreground">San Diego, Jalisco, México</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <p className="font-bold text-foreground">Jueves a Domingo</p>
                  <p className="text-muted-foreground">8:00 PM - 3:00 AM</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <h3 className="text-2xl font-bold font-display">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-card/50 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-card/50 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-card/50 flex items-center justify-center border border-white/10 hover:border-secondary hover:text-secondary transition-all">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 relative neon-box">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.937746594226!2d-102.0402123!3d20.9631627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842917711f1edeb1%3A0x6e6e28fdf4f4d2f0!2sSan%20Diego%20de%20Alejandr%C3%ADa%2C%20Jal.!5e0!3m2!1ses!2smx!4v1709241525000!5m2!1ses!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:grayscale-0 hover:invert-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 7. RESERVAS */}
      <section id="reservar" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30 relative border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-primary mb-4">Asegura tu Lugar</h2>
            <p className="text-muted-foreground">Las buenas noches empiezan con una buena mesa. Reserva ahora.</p>
          </div>

          <div className="bg-background/50 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre completo" className="bg-card/50 border-white/10 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha</FormLabel>
                        <FormControl>
                          <Input type="date" className="bg-card/50 border-white/10 focus-visible:ring-primary [color-scheme:dark]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hora</FormLabel>
                        <FormControl>
                          <Input type="time" className="bg-card/50 border-white/10 focus-visible:ring-primary [color-scheme:dark]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de personas</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" placeholder="Ej. 4" className="bg-card/50 border-white/10 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notas especiales (Opcional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Celebras algo especial?" className="bg-card/50 border-white/10 focus-visible:ring-primary resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg neon-box">
                  Confirmar Reserva
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 border-t border-white/10 text-center bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <h2 className="text-3xl font-bold font-display text-foreground opacity-80 mb-4 tracking-tight">Sunset Bar</h2>
        <p className="text-sm text-muted-foreground opacity-60">
          © {new Date().getFullYear()} Sunset Bar. Todos los derechos reservados.<br/>
          Emiliano Zapata #48, San Diego, Jalisco.
        </p>
      </footer>
    </main>
  );
}
