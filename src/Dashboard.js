import React, { useState } from 'react';

// --- Ícones como Componentes ---
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
);

const RsvpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
);

const ChecklistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
);

const MenuIcon = () => (
     <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.153 2.153c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.153 2.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.153-2.153c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218-1.791.465-2.427a4.902 4.902 0 012.153-2.153c.636-.247 1.363.416 2.427.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
);


function Header({ onLogin }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-800 font-display">
                        <a href="#">Sim, Perfeito</a>
                    </div>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-pink-500 transition duration-300">Recursos</a>
                        <a href="#gifts" className="text-gray-600 hover:text-pink-500 transition duration-300">Lista de Presentes</a>
                        <a href="#inspiration" className="text-gray-600 hover:text-pink-500 transition duration-300">Inspiração</a>
                        <button onClick={onLogin} className="text-gray-600 hover:text-pink-500 transition duration-300">Login</button>
                    </nav>
                    
                    <a href="#" className="hidden md:inline-block bg-pink-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-pink-600 transition duration-300 shadow-md">
                        Criar meu site grátis
                    </a>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        <MenuIcon />
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <a href="#features" className="block py-2 text-gray-600 hover:text-pink-500">Recursos</a>
                        <a href="#gifts" className="block py-2 text-gray-600 hover:text-pink-500">Lista de Presentes</a>
                        <a href="#inspiration" className="block py-2 text-gray-600 hover:text-pink-500">Inspiração</a>
                        <button onClick={onLogin} className="block w-full text-left py-2 text-gray-600 hover:text-pink-500">Login</button>
                        <a href="#" className="mt-4 inline-block w-full text-center bg-pink-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-pink-600 transition duration-300">
                            Criar meu site grátis
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}

function HeroSection() {
    const heroStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section style={heroStyle} className="text-white">
            <div className="bg-black/50 min-h-[70vh] flex items-center">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 leading-tight">Seu casamento, <span className="text-pink-300">perfeitamente</span> planejado.</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
                        Crie um site de casamento personalizado, gerencie sua lista de presentes e convidados, tudo em um só lugar.
                    </p>
                    <a href="#" className="bg-white text-pink-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 text-lg shadow-xl">
                        Comece agora, é grátis!
                    </a>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, children }) {
    return (
        <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center h-16 w-16 bg-pink-100 text-pink-500 rounded-full mx-auto mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    );
}

function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800">Tudo que você precisa para o grande dia</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Ferramentas fáceis de usar para um planejamento sem estresse.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard icon={<ShieldIcon />} title="Site de Casamento">
                        Crie um site lindo e personalizado com todas as informações para seus convidados.
                    </FeatureCard>
                    <FeatureCard icon={<GiftIcon />} title="Lista de Presentes">
                        Receba presentes em dinheiro de forma elegante e segura, ou crie uma lista em lojas parceiras.
                    </FeatureCard>
                    <FeatureCard icon={<RsvpIcon />} title="RSVP Online">
                        Seus convidados confirmam a presença de forma rápida e você organiza tudo com facilidade.
                    </FeatureCard>
                    <FeatureCard icon={<ChecklistIcon />} title="Checklist de Tarefas">
                        Um guia completo para você não esquecer de nenhum detalhe importante do seu casamento.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ imageSrc, alt, text, author }) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <img src={imageSrc} alt={alt} className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white" />
            <p className="text-gray-600 italic mt-4">{text}</p>
            <p className="text-right font-semibold text-pink-500 mt-4">- {author}</p>
        </div>
    );
}

function TestimonialsSection() {
    const testimonials = [
        { img: "https://placehold.co/100x100/E9D5FF/4C1D95?text=J+e+L", alt: "Casal Joana e Lucas", text: "A plataforma foi essencial para organizar nosso casamento. O site ficou lindo e a lista de presentes em dinheiro foi super prática! Recomendamos de olhos fechados.", author: "Joana & Lucas" },
        { img: "https://placehold.co/100x100/FECACA/7F1D1D?text=M+e+P", alt: "Casal Mariana e Pedro", text: "Fácil de usar, intuitivo e com um design maravilhoso. Nossos convidados amaram a facilidade de encontrar todas as informações e confirmar a presença online.", author: "Mariana & Pedro" },
        { img: "https://placehold.co/100x100/A7F3D0/064E3B?text=C+e+G", alt: "Casal Carla e Gabriel", text: "O checklist foi nosso salva-vidas! Ajudou a gente a não surtar com tantos detalhes. Ter tudo centralizado no Sim, Perfeito fez toda a diferença.", author: "Carla & Gabriel" }
    ];

    return (
        <section id="inspiration" className="py-20 bg-pink-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800">Histórias de Amor</h2>
                    <p className="text-gray-600 mt-2">Veja o que os casais dizem sobre o Sim, Perfeito.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                    {testimonials.map((t, index) => (
                        <TestimonialCard key={index} imageSrc={t.img} alt={t.alt} text={t.text} author={t.author} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCTASection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-800">Prontos para dizer "Sim"?</h2>
                <p className="text-gray-600 mt-2 mb-8 max-w-xl mx-auto">Crie seu site de casamento grátis e comece a planejar o dia mais feliz da sua vida.</p>
                <a href="#" className="bg-pink-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-pink-600 transition duration-300 text-lg shadow-lg">
                    Começar o planejamento
                </a>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold font-display mb-4">Sim, Perfeito</h3>
                        <p className="text-gray-400">Planejando sonhos, celebrando o amor.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Plataforma</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-gray-400 hover:text-white">Recursos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Planos e Preços</a></li>
                            <li><a href="#inspiration" className="text-gray-400 hover:text-white">Inspiração</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Suporte</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Siga-nos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Sim, Perfeito. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default function LandingPage({ onLogin }) {
    return (
        <div className="bg-gray-50 font-sans">
          <Header onLogin={onLogin} />
          <main>
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <FinalCTASection />
          </main>
          <Footer />
        </div>
    );
}
