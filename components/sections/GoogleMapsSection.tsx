"use client";

export default function GoogleMapsSection() {
    return (
        <section className="w-full h-[400px] bg-zinc-900 border-t border-white/10 grayscale hover:grayscale-0 transition-all duration-700 relative group">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.942784406253!2d75.7937446!3d26.9056965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db43b970877bd%3A0x6b402854930263f3!2sMG%20Digital!5e0!3m2!1sen!2sin!4v1707123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MG Digital Location"
                className="pointer-events-none" // Disable iframe interaction to allow click-through
            ></iframe>

            {/* Click Overlay */}
            <a
                href="https://maps.app.goo.gl/uUfs9uQs2y624zAu7?g_st=ic"
                target="_blank"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors"
                aria-label="Open in Google Maps"
            >
                <div className="bg-white text-black px-6 py-3 font-bold uppercase tracking-widest text-sm rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
                    Open in Maps
                </div>
            </a>
        </section>
    );
}
