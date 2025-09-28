"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Mail, Phone, MapPin, ExternalLink, Menu, X, Linkedin, User, GraduationCap, Award } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "services", "portfolio", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const softwareSkills = [
    { name: "Adobe After Effects", level: 95 },
    { name: "Adobe Premiere Pro", level: 90 },
    { name: "Adobe Photoshop", level: 88 },
    { name: "Adobe Illustrator", level: 85 },
    { name: "Blender", level: 80 },
    { name: "Figma", level: 75 },
    { name: "Adobe InDesign", level: 70 },
  ]

  const skillsExpertise = [
    "Logo Design & Animation",
    "Video Editing",
    "Motion Graphics",
    "3D Design & Animation",
    "Kinetic Typography",
    "Brand Design",
    "Social Media Design",
    "Image Retouching",
    "Business Card Design",
    "Flyer & Brochure Design",
    "T-Shirt Design",
    "Icon Animation",
  ]

  const services = [
    {
      title: "Logo Animation",
      description:
        "Bring your brand to life with stunning animated logos that capture attention and enhance brand recognition.",
      icon: "🎬",
    },
    {
      title: "Video Editing",
      description:
        "Professional video editing services for promotional content, social media, and corporate presentations.",
      icon: "✂️",
    },
    {
      title: "Motion Graphics",
      description: "Dynamic motion graphics for explainer videos, advertisements, and digital marketing campaigns.",
      icon: "🎨",
    },
    {
      title: "3D Design",
      description: "Create immersive 3D visuals, product renders, and architectural visualizations using Blender.",
      icon: "🎯",
    },
    {
      title: "Kinetic Typography",
      description: "Engaging text animations that transform words into compelling visual narratives.",
      icon: "📝",
    },
    {
      title: "Brand Design",
      description: "Complete branding solutions including logos, business cards, flyers, and marketing materials.",
      icon: "🏷️",
    },
  ]

  const portfolioItems = [
    {
      title: "Corporate Logo Animation",
      category: "Logo Animation",
      description: "Dynamic logo reveal for tech startup",
      image: "/corporate-logo-animation-tech-startup.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Product Promo Video",
      category: "Video Editing",
      description: "Engaging promotional video for e-commerce brand",
      image: "/product-promotional-video-ecommerce.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "3D Character Design",
      category: "3D Design",
      description: "Stylized character for mobile game",
      image: "/3d-character-design-mobile-game.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Kinetic Typography Intro",
      category: "Motion Graphics",
      description: "Text animation for YouTube channel",
      image: "/kinetic-typography-youtube-intro.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Social Media Campaign",
      category: "Motion Graphics",
      description: "Animated posts for Instagram marketing",
      image: "/social-media-animated-posts-instagram-marketing.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "News Show Intro",
      category: "Broadcast Design",
      description: "Professional broadcast motion intro",
      image: "/news-show-broadcast-intro-professional-motion-grap.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "3D Book Promo",
      category: "3D Animation",
      description: "3D promotional video for book launch",
      image: "/3d-book-promotional-video-animation-launch.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Character Face Expression",
      category: "Character Animation",
      description: "Animated character expressions for storytelling",
      image: "/animated-character-face-expressions-storytelling.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Lower Third Graphics",
      category: "Motion Graphics",
      description: "Professional lower thirds for video content",
      image: "/professional-lower-third-graphics-video-content.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Brand Identity Package",
      category: "Graphic Design",
      description: "Complete branding solution with logo and collaterals",
      image: "/brand-identity-package-startup.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Business Card Design",
      category: "Print Design",
      description: "Professional business card with modern typography",
      image: "/business-card-design-professional.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Flyer Design",
      category: "Print Design",
      description: "Eye-catching promotional flyer for events",
      image: "/promotional-flyer-design-event.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Social Media Graphics",
      category: "Digital Design",
      description: "Instagram post templates and story designs",
      image: "/social-media-graphics-instagram.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "T-Shirt Design",
      category: "Apparel Design",
      description: "Creative t-shirt graphics for fashion brand",
      image: "/t-shirt-design-creative-graphics.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Brochure Design",
      category: "Print Design",
      description: "Tri-fold brochure for corporate presentation",
      image: "/brochure-design-corporate.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Icon Animation Set",
      category: "Icon Design",
      description: "Animated icon pack for mobile application",
      image: "/icon-animation-set-mobile.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Package Design",
      category: "Product Design",
      description: "Product packaging design for consumer goods",
      image: "/package-design-consumer-product.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
    {
      title: "Certificate Design",
      category: "Print Design",
      description: "Professional certificate template design",
      image: "/certificate-design-professional.jpg",
      behanceUrl: "https://www.behance.net/fihaahmed",
    },
  ]

  const projectsDelivered = [
    {
      title: "Branding Packages",
      description:
        "Complete branding solutions including logos, business cards, and brochures for startups and established businesses.",
      icon: Award,
      count: "50+",
    },
    {
      title: "Social Media Campaigns",
      description:
        "Created animated promotional videos for social media campaigns, achieving significantly higher engagement rates for clients.",
      icon: ExternalLink,
      count: "High Engagement",
    },
    {
      title: "YouTube Channels",
      description:
        "Designed 3D character animations and motion intros for YouTube channels and online shows, enhancing brand identity.",
      icon: User,
      count: "YouTube Channels",
    },
    {
      title: "Image Retouching",
      description: "Retouched and enhanced over 100 images for e-commerce platforms and personal branding projects.",
      icon: GraduationCap,
      count: "100+",
    },
    {
      title: "Freelance Projects",
      description:
        "Completed numerous freelance projects on Fiverr with strong client satisfaction and positive reviews.",
      icon: Linkedin,
      count: "Fiverr Success",
    },
    {
      title: "International Clients",
      description:
        "Served clients from various countries, delivering high-quality motion graphics and design solutions worldwide.",
      icon: MapPin,
      count: "Global Reach",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-foreground animate-bounce-in">Reduyan Ahmed</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Services", "Portfolio", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-accent hover:scale-110 btn-gorgeous px-3 py-1 rounded-md ${
                    activeSection === item.toLowerCase() ? "text-accent animate-glow-pulse" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden btn-gorgeous p-2 rounded-md hover:bg-accent/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="animate-rotate-scale" /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Skills", "Services", "Portfolio", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-accent w-full text-left btn-gorgeous rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center animate-float">
                <User className="w-16 h-16 text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                Reduyan Ahmed
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
                Professional Motion Graphic Designer
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
                I create compelling visual stories through motion graphics, video editing, and 3D design. Transforming
                ideas into engaging visual experiences that captivate audiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button
                size="lg"
                className="btn-gorgeous animate-glow-pulse relative overflow-hidden"
                onClick={() => {
                  const portfolioSection = document.getElementById("portfolio")
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <span className="relative z-10">View My Work</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-gorgeous bg-transparent"
                onClick={() => window.open("https://www.fiverr.com/reduyan18", "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Hire on Fiverr
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                I am a very creative and self-motivated person who always welcomes challenges. I want to work hard for
                companies to move forward successfully. I always believe that a good designer can represent a company
                with attractive design.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                I'm fully dedicated to Motion Graphic Design and always trying to keep the best quality of my services
                at the highest level. My goal is to increase the brand value of companies through compelling visual
                design.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  Education & Training
                </h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-medium text-foreground">Professional Motion Graphic Design</h4>
                    <p className="text-sm text-muted-foreground">Creative IT Institute • 4 Years</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h4 className="font-medium text-foreground">Higher Secondary Certificate (HSC)</h4>
                    <p className="text-sm text-muted-foreground">B.M Union School and College • 2024</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => window.open("https://www.linkedin.com/in/reduyan-ahmed-305350250/", "_blank")}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" onClick={() => window.open("https://www.behance.net/fihaahmed", "_blank")}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Behance
                </Button>
              </div>
            </div>

            <div className="animate-float">
              <Card className="p-8 bg-card border-border">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">331 G A Road, Nabiganj, Bandar, Narayanganj</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">fiha12003@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">+880 1301322754</p>
                        <p className="text-sm text-muted-foreground">Guardian: +880 1819-893089</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">English</span>
                        <span className="text-accent">Proficient</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bangla</span>
                        <span className="text-accent">Excellent</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date of Birth</span>
                        <span className="text-foreground">November 18, 2002</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Gender</span>
                        <span className="text-foreground">Male</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <span className="text-foreground">Single</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              My comprehensive skill set spans across various design disciplines and software proficiencies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Software Proficiency */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-accent" />
                Software Proficiency
              </h3>
              <div className="space-y-6">
                {softwareSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Expertise */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Design Services</h3>
              <div className="grid grid-cols-2 gap-3">
                {skillsExpertise.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="justify-center p-2 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I offer a comprehensive range of motion graphics and design services to bring your creative vision to
              life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 group-hover:animate-bounce-in">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-gorgeous w-full bg-transparent"
                    onClick={() => window.open("https://www.fiverr.com/reduyan18", "_blank")}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Delivered Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-bounce-in">
              Projects Delivered
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Here's a showcase of my successful project deliveries and client achievements across various design
              disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsDelivered.map((project, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-accent/40 rounded-full flex items-center justify-center group-hover:animate-rotate-scale">
                    <project.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-2">{project.count}</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{project.title}</h4>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="btn-gorgeous animate-shimmer"
              onClick={() => window.open("https://www.fiverr.com/reduyan18", "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Start Your Project Today
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore some of my recent projects showcasing motion graphics, video editing, and creative design
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => window.open(item.behanceUrl, "_blank")}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={item.image || "/placeholder.svg?height=300&width=400"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="btn-gorgeous animate-glow-pulse"
              onClick={() => window.open("https://www.behance.net/fihaahmed", "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to bring your creative vision to life? Get in touch and let's discuss how I can help elevate your
              brand with stunning motion graphics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">fiha12003@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+880 1301322754</p>
                    <p className="text-sm text-muted-foreground">Guardian: +880 1819-893089</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">331 G A Road, Nabiganj, Bandar, Narayanganj</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Find Me Online</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-gorgeous bg-transparent"
                    onClick={() => window.open("https://www.fiverr.com/reduyan18", "_blank")}
                  >
                    Fiverr
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-gorgeous bg-transparent"
                    onClick={() => window.open("https://www.behance.net/fihaahmed", "_blank")}
                  >
                    Behance
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-gorgeous bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/reduyan-ahmed-305350250/", "_blank")}
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button className="w-full btn-gorgeous animate-glow-pulse">Send Message</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
