import { Building2, Palette, ShoppingBag, Briefcase } from "lucide-react";

const industries = [
    { name: "Agencies", icon: Building2 },
    { name: "Designers", icon: Palette },
    { name: "Brands", icon: ShoppingBag },
    { name: "Corporates", icon: Briefcase },
    { name: "Startups", icon: Building2 },
    { name: "Events", icon: Palette },
];

export default function IndustriesGrid() {
    return (
        <section id="industries" className="py-20 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold text-white mb-10 text-center uppercase tracking-widest text-sm">Trusted By</h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {industries.map((ind, idx) => (
                        <div key={idx} className="px-6 py-3 rounded-full border border-white/10 bg-zinc-900/50 text-gray-300 hover:text-white hover:border-neon-cyan/50 hover:bg-zinc-900 transition-all cursor-default flex items-center gap-2">
                            <ind.icon size={16} />
                            <span className="font-medium">{ind.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
