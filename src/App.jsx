import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Vikas - Your Handy Helper</h1>
          <nav className="space-x-6 hidden md:flex">
            <button onClick={() => setActiveTab('services')} className={`hover:text-blue-600 ${activeTab === 'services' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>Services</button>
            <button onClick={() => setActiveTab('about')} className={`hover:text-blue-600 ${activeTab === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>About Me</button>
            <button onClick={() => setActiveTab('contact')} className={`hover:text-blue-600 ${activeTab === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Vikas – Your Trusted Handyperson for Everyday Tasks
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Helping busy adults, students, families, and newcomers manage life in Finland.
          </p>

          {/* Language Notice */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg p-4 max-w-xl mx-auto mb-8">
            <p className="text-white text-base md:text-lg font-medium">
              I offer all my services in English. I don't speak fluent Finnish, but I'm happy to help if you're comfortable communicating in English.
            </p>
          </div>

          <button 
            onClick={() => setActiveTab('contact')}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-50 transition transform hover:scale-105"
          >
            Book My Services
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'services' && (
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🧼</div>
                <h3 className="text-xl font-semibold mb-2">House Cleaning</h3>
                <p className="text-gray-600 mb-2">Tidy up your space when you're too busy to do it yourself.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €30/hour</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🗂️</div>
                <h3 className="text-xl font-semibold mb-2">Home Organization</h3>
                <p className="text-gray-600 mb-2">Get your home in order so you can focus on what matters most.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €20/hour</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Moving Assistance</h3>
                <p className="text-gray-600 mb-2">Help with moving furniture or boxes within the home.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €30/hour</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🛒</div>
                <h3 className="text-xl font-semibold mb-2">Grocery/Errand Delivery</h3>
                <p className="text-gray-600 mb-2">Pick up essentials and deliver them to elderly parents or relatives.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €20/hour</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🛞</div>
                <h3 className="text-xl font-semibold mb-2">Tire Change</h3>
                <p className="text-gray-600 mb-2">Quick and safe tire change service at your location.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €30 (Car), €45 (SUV)</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="text-xl font-semibold mb-2">Yard Work</h3>
                <p className="text-gray-600 mb-2">Assist with light yard work using your own equipment.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €30/hour</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Translation (Eng ↔ Fin)</h3>
                <p className="text-gray-600 mb-2">Outsourced document translation by native Finnish speakers. Digital format only (Word/Google Doc).</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €20/page</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🎤</div>
                <h3 className="text-xl font-semibold mb-2">Business & Professional Coaching</h3>
                <p className="text-gray-600 mb-2">Improve presentation and public speaking skills in English.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €60/hour</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">⛄</div>
                <h3 className="text-xl font-semibold mb-2">Snow Shoveling</h3>
                <p className="text-gray-600 mb-2">Clear driveway and walkways. Cost depends on yard size and visits.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: Based on yard size</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🪚</div>
                <h3 className="text-xl font-semibold mb-2">Small Woodwork</h3>
                <p className="text-gray-600 mb-2">Install/remove doors/handles, modify cabinets for new appliances like dishwashers.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: €35/hour + €15 for materials</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Career Help for Newcomers</h3>
                <p className="text-gray-600 mb-2">Free 30-min session to discuss job search, CV tips, and professional communication in Finland.</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: Free first 30 min | €30/hour after</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-md transition">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="text-xl font-semibold mb-2">Extra Hand for Any Task</h3>
                <p className="text-gray-600 mb-2">If you need help with something not listed here, I'm happy to assist!</p>
                <p className="text-sm text-blue-600 font-medium mt-2">Price: Custom quote</p>
              </div>
            </div>

            {/* Why Choose Me */}
            <div className="mt-16 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Me?</h3>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Flexible scheduling around your busy life</li>
                <li>Experienced helping families and elderly support</li>
                <li>Trustworthy and detail-oriented</li>
                <li>Competitive rates for quality service</li>
                <li><strong>En puhu hyvää suomea,</strong> mutta yritän parhaani ja olen selkeä ja rehellinen.</li>
                <li><strong>Olen kokemuksellinen ja ammattitaitoinen</strong> – teen työni aina sinun ehdoissasi ja ilman kiirettä.</li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === 'about' && (
          <section>
            <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
              <img src="https://placehold.co/600x400/e2e8f0/1e40af?text=Vikas+Your+Helper" alt="Profile" className="w-full h-56 object-cover rounded-lg mb-6" />
              <p className="mb-4">
                Hei! I'm <strong>Vikas</strong>, originally from a small village where life revolved around farming and agriculture.
              </p>
              <p className="mb-4">
                Growing up on a farm taught me hard work, patience, and how to fix things with my own hands — values I still carry today.
              </p>
              <p className="mb-4">
                Since arriving in Finland in 2018, I've turned handyman tasks into a side service to keep myself busy and help others.
              </p>
              <p className="mb-4 italic text-gray-600">
                A little extra never hurts — and it always goes to savings and kids 😊
              </p>
              <p>
                Whether you're a single parent, student, or newcomer like me, I understand how tough it can be to manage everything at once. That's why I'm here to give you a helping hand.
              </p>
            </div>

            {/* About Highlights */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                <div className="text-3xl mb-2">🔧</div>
                <h4 className="font-semibold">Handyman Skills</h4>
                <p className="text-gray-600">From cleaning to woodwork, I do it all.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                <div className="text-3xl mb-2">📍</div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">Länsi-Uusimaa region</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                <div className="text-3xl mb-2">🕒</div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-600">Mon–Fri 16:30–19:30<br />Sat–Sun 09:00–18:00</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section>
            <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
              <p className="text-center mb-6">
                Ready to take some tasks off your plate? Fill out the form below or book a meeting directly.
              </p>

              {/* Target Audience Box */}
              <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded">
                <h4 className="font-semibold">Who I Serve:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Single adults and parents</li>
                  <li>Students</li>
                  <li>Families</li>
                  <li>Elderly individuals</li>
                  <li>Newcomers to Finland</li>
                </ul>
              </div>

              {/* Language Note */}
              <p className="text-gray-600 italic mb-4 text-center">
                I communicate in English only. If you're comfortable in English, I'd love to help!
              </p>

              {/* Contact Form Placeholder */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" required className="border border-gray-300 px-4 py-2 rounded w-full" />
                  <input type="email" placeholder="Email" required className="border border-gray-300 px-4 py-2 rounded w-full" />
                </div>
                <input type="tel" placeholder="Phone Number" required className="w-full border border-gray-300 px-4 py-2 rounded" />
                
                <select required className="w-full border border-gray-300 px-4 py-2 rounded">
                  <option value="">Select a service</option>
                  <option value="House Cleaning">House Cleaning</option>
                  <option value="Home Organization">Home Organization</option>
                  <option value="Moving Assistance">Moving Assistance</option>
                  <option value="Grocery/Errand Delivery">Grocery/Errand Delivery</option>
                  <option value="Tire Change">Tire Change</option>
                  <option value="Yard Work">Yard Work</option>
                  <option value="Translation Eng ↔ Fin">Translation (Eng ↔ Fin)</option>
                  <option value="Business & Professional Coaching">Business & Professional Coaching</option>
                  <option value="Snow Shoveling">Snow Shoveling</option>
                  <option value="Small Woodwork">Small Woodwork & Kitchen Adjustment</option>
                  <option value="Career Help for Newcomers">Career Help for Newcomers</option>
                  <option value="Extra Hand for Any Task">Extra Hand for Any Task</option>
                </select>

                <textarea placeholder="Message" rows="4" required className="w-full border border-gray-300 px-4 py-2 rounded"></textarea>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>

              {/* Calendly Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => window.Calendly.initPopupWidget({ url: 'https://calendly.com/singhvik' })}
                  className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
                  type="button"
                >
                  Book Your Time
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm mt-10">
        <p>&copy; {new Date().getFullYear()} Vikas - Your Handy Helper. Available in Länsi-Uusimaa only.</p>
        <p className="mt-1">Other regions +€10 | Invoice requests must be booked 1 week in advance</p>
        <p className="mt-1">📞 045 1086 606 | ✉️ indovikbm@gmail.com</p>
      </footer>
    </div>
  );
}