import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function Footer() {
    return (
        <footer className="bg-graphite pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <ScrollAnimation animation="fadeInUp" delay={0.1} className="col-span-1 md:col-span-1">
                        <div className="col-span-1 md:col-span-1">
                            <h2 className="text-3xl font-bold tracking-tighter text-white mb-6">
                                MG<span className="text-neon-cyan">.</span>Digital
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Engineered surfaces. Precision finishes. Delivered fast. We bridge the gap between digital design and tactile reality.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Links */}
                    <ScrollAnimation animation="fadeInUp" delay={0.2}>
                        <div>
                            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="#" className="hover:text-neon-cyan transition-colors">Digital Printing</Link></li>
                                <li><Link href="#" className="hover:text-neon-cyan transition-colors">UV & Embossing</Link></li>
                                <li><Link href="#" className="hover:text-neon-cyan transition-colors">Foiling</Link></li>
                                <li><Link href="#" className="hover:text-neon-cyan transition-colors">Die Cutting</Link></li>
                            </ul>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.3}>
                        <div>
                            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="#process" className="hover:text-neon-cyan transition-colors">Process</Link></li>
                                <li><Link href="#industries" className="hover:text-neon-cyan transition-colors">Industries</Link></li>
                                <li><Link href="#contact" className="hover:text-neon-cyan transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </ScrollAnimation>

                    {/* Contact */}
                    <ScrollAnimation animation="fadeInUp" delay={0.4}>
                        <div>
                            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-neon-cyan shrink-0" />
                                    <span>Jaipur, Rajasthan, India</span>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-neon-cyan shrink-0" />
                                        <a href="tel:+919257035570" className="hover:text-white transition-colors">+91 92570 35570</a>
                                    </div>
                                    <div className="pl-8 flex flex-col gap-1 text-gray-500">
                                        <a href="tel:+919784112272" className="hover:text-white transition-colors">+91 97841 12272</a>
                                        <a href="tel:+9101414503777" className="hover:text-white transition-colors">0141-4503777</a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-neon-cyan shrink-0" />
                                    <a href="mailto:printmgd@gmail.com" className="hover:text-white transition-colors">printmgd@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} MG Digital Press. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
                        <div className="w-2 h-2 rounded-full bg-neon-magenta"></div>
                        <div className="w-2 h-2 rounded-full bg-neon-yellow"></div>
                        <div className="w-2 h-2 rounded-full bg-black border border-white/20"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
