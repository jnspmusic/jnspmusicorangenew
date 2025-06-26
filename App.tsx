import React from 'react';
import { Play, Calendar, MapPin, Mail, Youtube, User, Disc3, Radio, Music } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-orange-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-orange-200">JNSP</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-orange-200/80 hover:text-orange-200 transition-colors">Accueil</a>
              <a href="#music" className="text-orange-200/80 hover:text-orange-200 transition-colors">Musique</a>
              <a href="#events" className="text-orange-200/80 hover:text-orange-200 transition-colors">Événements</a>
              <a href="#about" className="text-orange-200/80 hover:text-orange-200 transition-colors">À propos</a>
              <a href="#contact" className="text-orange-200/80 hover:text-orange-200 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-orange-900/30 via-transparent to-slate-900/50"></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          {/* Main Title - Much Larger */}
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white mb-8 tracking-tight leading-none">
            <span className="bg-gradient-to-b from-orange-200 via-orange-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              JNSP
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-orange-200/90 mb-12 leading-relaxed font-light">
            DJ & Producteur Musique Électronique
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://music.youtube.com/channel/UCFAKDiOFbZkd9jhMRYbP6NQ?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-xl"
            >
              <Play className="h-5 w-5" />
              <span>Écouter</span>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section id="music" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Dernière Sortie
              </span>
            </h2>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-3xl border border-orange-500/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-96">
                <img 
                  src="/file_00000000605c61f4b3767e492ab572c9.png" 
                  alt="JNSP - SAVE ME"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <Disc3 className="h-6 w-6 text-orange-400" />
                  <span className="text-orange-300 font-semibold">Nouveau Single</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">SAVE ME</h3>
                <p className="text-orange-100/70 text-lg mb-8 leading-relaxed">
                  Le nouveau single de JNSP qui mélange des sonorités électroniques puissantes 
                  avec des mélodies envoûtantes. Une production qui capture l'essence de la 
                  musique électronique moderne.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://music.youtube.com/channel/UCFAKDiOFbZkd9jhMRYbP6NQ?feature=shared"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>Écouter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Actualités
              </span>
            </h2>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-3xl border border-orange-500/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-6 w-6 text-orange-400" />
                  <span className="text-orange-300 font-semibold">Événement à venir</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Session Live DJ</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-orange-100/80">
                    <Calendar className="h-5 w-5 text-orange-400" />
                    <span className="text-lg">15 Juillet 2025 - 23H00</span>
                  </div>
                  <div className="flex items-center space-x-3 text-orange-100/80">
                    <MapPin className="h-5 w-5 text-orange-400" />
                    <span className="text-lg">Club Karlovylazne, Prague</span>
                  </div>
                </div>
                <p className="text-orange-100/70 text-lg mb-8 leading-relaxed">
                  Rejoignez JNSP pour une session live exceptionnelle dans l'un des clubs 
                  les plus emblématiques de Prague. Une soirée électronique inoubliable 
                  vous attend !
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Événement confirmé</span>
                </div>
              </div>
              <div className="relative h-80 md:h-96">
                <img 
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Club DJ Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                    <Radio className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                À Propos
              </span>
            </h2>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg opacity-60"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full">
                  <User className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">JNSP</h3>
              <p className="text-xl text-orange-300 font-semibold">DJ & Producteur Musique Électronique</p>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-orange-100/80 text-lg leading-relaxed">
                  Originaire de Toulouse, JNSP est un artiste passionné qui évolue dans l'univers 
                  de la musique électronique. En tant que DJ et producteur, il crée des compositions 
                  uniques qui mélangent innovation sonore et émotion pure.
                </p>
              </div>

              <div className="pt-8">
                <p className="text-orange-100/60 mb-4">Retrouvez JNSP sur :</p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a 
                    href="https://music.youtube.com/channel/UCFAKDiOFbZkd9jhMRYbP6NQ?feature=shared"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-orange-100/80 hover:text-white transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-red-400" />
                    <span>YouTube Music</span>
                  </a>
                  <a 
                    href="https://open.spotify.com/artist/25qqFcycQizw6u2Xb80tnu?si=IvZcME41Q465arofPwpP7Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-orange-100/80 hover:text-white transition-colors"
                  >
                    <Music className="h-5 w-5 text-green-400" />
                    <span>Spotify</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg opacity-60"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full">
                  <Mail className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Restons en Contact</h3>
            <p className="text-orange-100/70 text-lg mb-8 max-w-2xl mx-auto">
              Pour toute demande de booking, collaboration ou information, 
              n'hésitez pas à me contacter directement.
            </p>

            <a 
              href="mailto:jnsp@jnspmusic.com"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Mail className="h-5 w-5" />
              <span>jnsp@jnspmusic.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-orange-500/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl font-bold text-orange-200">JNSP</span>
          </div>
          <p className="text-orange-200/40 text-sm">
            &copy; 2025 JNSP Music. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Floating Music Icons */}
      <div className="fixed top-32 left-10 text-orange-200/10 animate-bounce delay-300 pointer-events-none">
        <Radio className="h-8 w-8" />
      </div>
      <div className="fixed bottom-32 right-10 text-orange-200/10 animate-bounce delay-700 pointer-events-none">
        <Disc3 className="h-6 w-6" />
      </div>
      <div className="fixed top-1/2 left-6 text-orange-200/10 animate-bounce delay-500 pointer-events-none">
        <Play className="h-5 w-5" />
      </div>
    </div>
  );
}

export default App;