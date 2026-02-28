"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "en" | "hi";

interface TranslationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.industries": "Industries",
    "nav.contact": "Contact",
    "nav.cta": "GET A QUOTE",
    "nav.brand": "MG Digital Press",

    // Hero
    "hero.badge": "Premium Digital Print Solutions",
    "hero.h1.line1": "A Complete Digital",
    "hero.h1.line2": "Printing Solution",
    "hero.sub": "From Embellishment to Finishing — We Deliver Results, Not Just Prints.",
    "hero.tags": "Spot UV  ·  3D Foil  ·  5-Color  ·  Precision Cut  ·  High Volume",
    "hero.cta.quote": "Get a Quote",
    "hero.cta.whatsapp": "WhatsApp Now",

    // Core USP Strip
    "usp.embellishment": "Digital Embellishment",
    "usp.embellishment.sub": "Spot UV & 3D Foil",
    "usp.press": "5-Color Production",
    "usp.press.sub": "CMYK + White / 5th Color",
    "usp.cutting": "Precision Die-Cutting",
    "usp.cutting.sub": "Digital Flatbed Cutting",
    "usp.finishing": "Precision Finishing",
    "usp.finishing.sub": "German Engineering",

    // Tech Power / Infrastructure
    "infra.label": "Our Production Capabilities",
    "infra.h2": "We Create Results.\nNot Just Run Machines.",
    "infra.progress": "Scroll to explore",

    // MGI Machine
    "mgi.role": "Digital Embellishment",
    "mgi.headline": "Premium Digital Embellishment & 3D Spot UV Excellence",
    "mgi.usp1": "AI SmartScanner® — no crop marks, auto skew correction",
    "mgi.usp2": "Variable Varnish: 21µm flat to 116µm 3D raised",
    "mgi.usp3": "Universal Varnish — 10L tank, no job changeover",
    "mgi.usp4": "Speed: 2,077 A3/hr at flat | 547 A3/hr at maximum 3D",
    "mgi.usp5": "LED Eco Dryer — instant cure, no ozone, low power",
    "mgi.usp6": "Variable Data Printing — personalised coating per sheet",

    // Ricoh Machine
    "ricoh.role": "Production Press",
    "ricoh.headline": "High-Volume, High-Color Production Powerhouse",
    "ricoh.usp1": "5th Color station — White or specialty toner",
    "ricoh.usp2": "95 ppm | 2400×4800 dpi ultra-high resolution",
    "ricoh.usp3": "Media: 40–470 gsm | Oversized up to 49.6″",
    "ricoh.usp4": "16,200-sheet high-capacity input",
    "ricoh.usp5": "Inline finishing + auto color calibration",
    "ricoh.usp6": "21″ Smart Operation Panel",

    // Konica Machine
    "konica.role": "High-Volume Print",
    "konica.headline": "Industrial-Grade Performance with Absolute Print Precision",
    "konica.usp1": "Duty cycle: up to 3.24 million prints",
    "konica.usp2": "Speed: up to 136 A4 ppm | 74 SRA3 ppm",
    "konica.usp3": "1200×1200 dpi with Simitri HD Toner",
    "konica.usp4": "S.E.A.D Technology + Tone Curve Utility",
    "konica.usp5": "220 paper profiles preloaded",
    "konica.usp6": "Auto Inspection + Intelligent Media Sensor",

    // Iecho Machine
    "iecho.role": "Digital Cutting",
    "iecho.headline": "Smart Digital Cutting for Modern Print Finishing",
    "iecho.usp1": "Only 2 m² footprint — compact, easy transport",
    "iecho.usp2": "Touchscreen interface + folding dividing table",
    "iecho.usp3": "One-touch auto rotating roller",
    "iecho.usp4": "Safe blade change mechanism",
    "iecho.usp5": "Accurate fish-scale feeding + auto deviation correction",

    // Polar Machine
    "polar.role": "Precision Finishing",
    "polar.headline": "Precision Finishing & Professional Cutting Control",
    "polar.usp1": "76 cm cutting width | Programmable digital backgauge",
    "polar.usp2": "Hydraulic clamp, adjustable pressure",
    "polar.usp3": "Air table system + two-hand safety control",
    "polar.usp4": "German engineering — long service life",
    "polar.usp5": "Memory cutting programs — fast job recall",

    // MGIFeatureShowcase
    "mgi.showcase.label": "Digital Embellishment",
    "mgi.showcase.h2.line1": "Digital Embellishment",
    "mgi.showcase.h2.line2": "Without Limits.",
    "mgi.showcase.desc": "Eliminate expensive dies. Our MGI technology applies Spot UV and 3D textures directly from your digital file — personalised, precise, productive.",
    "mgi.showcase.feat1.title": "Variable Data Coating",
    "mgi.showcase.feat1.desc": "Personalise every sheet with unique patterns or names in glossy UV.",
    "mgi.showcase.feat2.title": "3D Raised Texture",
    "mgi.showcase.feat2.desc": "Tactile varnish up to 116µm thick that you can literally feel.",
    "mgi.showcase.feat3.title": "AI SmartScanner®",
    "mgi.showcase.feat3.desc": "Full-page auto registration — no crop marks, no manual correction.",
    "mgi.showcase.advantage": "Production Advantage",
    "mgi.showcase.old": "Traditional Hot Foil",
    "mgi.showcase.new": "MGI Digital",
    "mgi.showcase.old1": "Expensive Metal Dies",
    "mgi.showcase.old2": "Setup Time: Days",
    "mgi.showcase.old3": "High Min. Quantity",
    "mgi.showcase.old4": "Static Content Only",
    "mgi.showcase.new1": "No Dies Required",
    "mgi.showcase.new2": "Setup Time: Minutes",
    "mgi.showcase.new3": "Print JUST ONE",
    "mgi.showcase.new4": "Variable Data Ready",

    // PrintingCapability
    "printing.label": "Beyond CMYK",
    "printing.h2": "5-Color Production Printing",
    "printing.desc": "We go beyond standard 4-color printing. Our production engines support a 5th color station for specialized applications.",
    "printing.white.title": "White Ink",
    "printing.white.desc": "Print opacity on transparent, dark, or metallic stocks.",
    "printing.5th.title": "5th Color Station",
    "printing.5th.desc": "Expand gamut with specialty toners for unique, head-turning output.",
    "printing.texture.title": "Textured Media",
    "printing.texture.desc": "Flawless adhesion on textured papers up to 470gsm.",

    // DieCutting
    "die.h2": "Die Cutting & Labels",
    "die.sub": "Powered by IECHO Digital Cutting System",
    "die.nomq": "No Minimum Qty",
    "die.card1.h": "Custom Shape Stickers",
    "die.card1.p": "Kiss-cut labels on sheets or individual die-cut stickers. Any shape, any size.",
    "die.card2.h": "Short-Run Packaging",
    "die.card2.p": "Printed and cut prototypes on folding carton board (up to 350gsm).",
    "die.card3.h": "Precision Die-Cutting",
    "die.card3.p": "Intricate cuts without expensive dies.",

    // Finishing
    "finishing.label": "Finishing Services",

    // Contact
    "contact.h2": "Get a Quote",
    "contact.sub": "Tell us about your print project.",
    "contact.submit": "Send Message",
  },

  hi: {
    // Nav
    "nav.services": "सेवाएं",
    "nav.process": "प्रक्रिया",
    "nav.industries": "उद्योग",
    "nav.contact": "संपर्क",
    "nav.cta": "कोटेशन लें",
    "nav.brand": "MG डिजिटल प्रेस",

    // Hero
    "hero.badge": "प्रीमियम डिजिटल प्रिंट सॉल्यूशन",
    "hero.h1.line1": "एक संपूर्ण डिजिटल",
    "hero.h1.line2": "प्रिंटिंग समाधान",
    "hero.sub": "एम्बेलिशमेंट से फिनिशिंग तक — हम परिणाम देते हैं, सिर्फ प्रिंट नहीं।",
    "hero.tags": "स्पॉट UV  ·  3D फॉइल  ·  5-कलर  ·  प्रिसिजन कट  ·  हाई वॉल्यूम",
    "hero.cta.quote": "कोटेशन लें",
    "hero.cta.whatsapp": "व्हाट्सएप करें",

    // Core USP Strip
    "usp.embellishment": "डिजिटल एम्बेलिशमेंट",
    "usp.embellishment.sub": "स्पॉट UV & 3D फॉइल",
    "usp.press": "5-कलर प्रोडक्शन",
    "usp.press.sub": "CMYK + व्हाइट / 5वां कलर",
    "usp.cutting": "प्रिसिजन डाई-कटिंग",
    "usp.cutting.sub": "डिजिटल फ्लैटबेड कटिंग",
    "usp.finishing": "प्रिसिजन फिनिशिंग",
    "usp.finishing.sub": "जर्मन इंजीनियरिंग",

    // Infrastructure
    "infra.label": "हमारी उत्पादन क्षमताएं",
    "infra.h2": "हम परिणाम बनाते हैं।\nसिर्फ मशीन नहीं चलाते।",
    "infra.progress": "स्क्रॉल करें",

    // MGI
    "mgi.role": "डिजिटल एम्बेलिशमेंट",
    "mgi.headline": "प्रीमियम डिजिटल एम्बेलिशमेंट & 3D स्पॉट UV",
    "mgi.usp1": "AI SmartScanner® — बिना क्रॉप मार्क, ऑटो स्क्यू सुधार",
    "mgi.usp2": "वेरिएबल वार्निश: 21µm फ्लैट से 116µm 3D रेज्ड",
    "mgi.usp3": "यूनिवर्सल वार्निश — 10L टैंक, बिना जॉब चेंज",
    "mgi.usp4": "स्पीड: 2,077 A3/घंटा (फ्लैट) | 547 A3/घंटा (मैक्स 3D)",
    "mgi.usp5": "LED इको ड्रायर — तुरंत क्योर, ओजोन रहित",
    "mgi.usp6": "वेरिएबल डेटा प्रिंटिंग — व्यक्तिगत कोटिंग प्रति शीट",

    // Ricoh
    "ricoh.role": "प्रोडक्शन प्रेस",
    "ricoh.headline": "हाई-वॉल्यूम, हाई-कलर प्रोडक्शन पावरहाउस",
    "ricoh.usp1": "5वां कलर स्टेशन — व्हाइट या स्पेशलटी टोनर",
    "ricoh.usp2": "95 ppm | 2400×4800 dpi अल्ट्रा-हाई रेजोल्यूशन",
    "ricoh.usp3": "मीडिया: 40–470 gsm | ओवरसाइज्ड 49.6″ तक",
    "ricoh.usp4": "16,200-शीट हाई-कैपेसिटी इनपुट",
    "ricoh.usp5": "इनलाइन फिनिशिंग + ऑटो कलर कैलिब्रेशन",
    "ricoh.usp6": "21″ स्मार्ट ऑपरेशन पैनल",

    // Konica
    "konica.role": "हाई-वॉल्यूम प्रिंट",
    "konica.headline": "इंडस्ट्रियल-ग्रेड परफॉर्मेंस, परफेक्ट प्रिंट प्रिसिजन",
    "konica.usp1": "ड्यूटी साइकल: 3.24 मिलियन प्रिंट तक",
    "konica.usp2": "स्पीड: 136 A4 ppm | 74 SRA3 ppm",
    "konica.usp3": "1200×1200 dpi + Simitri HD टोनर",
    "konica.usp4": "S.E.A.D टेक्नोलॉजी + टोन कर्व यूटिलिटी",
    "konica.usp5": "220 पेपर प्रोफाइल प्रीलोडेड",
    "konica.usp6": "ऑटो इंस्पेक्शन + इंटेलिजेंट मीडिया सेंसर",

    // Iecho
    "iecho.role": "डिजिटल कटिंग",
    "iecho.headline": "स्मार्ट डिजिटल कटिंग — मॉडर्न प्रिंट फिनिशिंग के लिए",
    "iecho.usp1": "सिर्फ 2 m² फुटप्रिंट — कॉम्पैक्ट, आसान ट्रांसपोर्ट",
    "iecho.usp2": "टचस्क्रीन + फोल्डिंग डिवाइडिंग टेबल",
    "iecho.usp3": "वन-टच ऑटो रोटेटिंग रोलर",
    "iecho.usp4": "सुरक्षित ब्लेड चेंज मैकेनिज्म",
    "iecho.usp5": "फिश-स्केल फीडिंग + ऑटो डेवियेशन करेक्शन",

    // Polar
    "polar.role": "प्रिसिजन फिनिशिंग",
    "polar.headline": "प्रिसिजन फिनिशिंग & प्रोफेशनल कटिंग कंट्रोल",
    "polar.usp1": "76 cm कटिंग चौड़ाई | प्रोग्रामेबल डिजिटल बैकगेज",
    "polar.usp2": "हाइड्रोलिक क्लैंप, एडजस्टेबल प्रेशर",
    "polar.usp3": "एयर टेबल + टू-हैंड सेफ्टी कंट्रोल",
    "polar.usp4": "जर्मन इंजीनियरिंग — लंबी सर्विस लाइफ",
    "polar.usp5": "मेमोरी कटिंग प्रोग्राम — त्वरित जॉब रिकॉल",

    // MGIFeatureShowcase
    "mgi.showcase.label": "डिजिटल एम्बेलिशमेंट",
    "mgi.showcase.h2.line1": "डिजिटल एम्बेलिशमेंट",
    "mgi.showcase.h2.line2": "बिना किसी सीमा के।",
    "mgi.showcase.desc": "महंगे डाई की जरूरत नहीं। हमारी MGI टेक्नोलॉजी सीधे डिजिटल फाइल से स्पॉट UV और 3D टेक्सचर लगाती है।",
    "mgi.showcase.feat1.title": "वेरिएबल डेटा कोटिंग",
    "mgi.showcase.feat1.desc": "हर शीट पर यूनिक पैटर्न या नाम ग्लॉसी UV में।",
    "mgi.showcase.feat2.title": "3D रेज्ड टेक्सचर",
    "mgi.showcase.feat2.desc": "116µm तक मोटी टैक्टाइल वार्निश जो महसूस की जा सके।",
    "mgi.showcase.feat3.title": "AI SmartScanner®",
    "mgi.showcase.feat3.desc": "फुल-पेज ऑटो रजिस्ट्रेशन — कोई क्रॉप मार्क नहीं।",
    "mgi.showcase.advantage": "प्रोडक्शन एडवांटेज",
    "mgi.showcase.old": "पारंपरिक हॉट फॉइल",
    "mgi.showcase.new": "MGI डिजिटल",
    "mgi.showcase.old1": "महंगे मेटल डाई",
    "mgi.showcase.old2": "सेटअप: दिनों में",
    "mgi.showcase.old3": "अधिक न्यूनतम मात्रा",
    "mgi.showcase.old4": "सिर्फ स्टैटिक कंटेंट",
    "mgi.showcase.new1": "कोई डाई नहीं",
    "mgi.showcase.new2": "सेटअप: मिनटों में",
    "mgi.showcase.new3": "सिर्फ एक भी प्रिंट करें",
    "mgi.showcase.new4": "वेरिएबल डेटा तैयार",

    // PrintingCapability
    "printing.label": "CMYK से परे",
    "printing.h2": "5-कलर प्रोडक्शन प्रिंटिंग",
    "printing.desc": "हम स्टैंडर्ड 4-कलर से आगे जाते हैं। हमारे प्रोडक्शन इंजन विशेष एप्लिकेशन के लिए 5वां कलर स्टेशन सपोर्ट करते हैं।",
    "printing.white.title": "व्हाइट इंक",
    "printing.white.desc": "ट्रांसपेरेंट, डार्क या मेटालिक स्टॉक पर ओपेसिटी प्रिंट करें।",
    "printing.5th.title": "5वां कलर स्टेशन",
    "printing.5th.desc": "स्पेशलटी टोनर से गैमट बढ़ाएं — यूनिक आउटपुट के लिए।",
    "printing.texture.title": "टेक्सचर्ड मीडिया",
    "printing.texture.desc": "470gsm तक टेक्सचर्ड पेपर पर परफेक्ट एडहेजन।",

    // DieCutting
    "die.h2": "डाई कटिंग & लेबल",
    "die.sub": "IECHO डिजिटल कटिंग सिस्टम द्वारा संचालित",
    "die.nomq": "कोई न्यूनतम मात्रा नहीं",
    "die.card1.h": "कस्टम शेप स्टिकर",
    "die.card1.p": "शीट पर किस-कट लेबल या इंडिविजुअल डाई-कट स्टिकर।",
    "die.card2.h": "शॉर्ट-रन पैकेजिंग",
    "die.card2.p": "फोल्डिंग कार्टन बोर्ड पर प्रिंटेड और कटे प्रोटोटाइप (350gsm तक)।",
    "die.card3.h": "प्रिसिजन डाई-कटिंग",
    "die.card3.p": "महंगे डाई के बिना जटिल कट।",

    // Finishing
    "finishing.label": "फिनिशिंग सेवाएं",

    // Contact
    "contact.h2": "कोटेशन लें",
    "contact.sub": "हमें अपने प्रिंट प्रोजेक्ट के बारे में बताएं।",
    "contact.submit": "संदेश भेजें",
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] ?? translations["en"][key] ?? key;
    },
    [language]
  );

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used inside LanguageProvider");
  return ctx;
}
