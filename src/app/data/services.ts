export interface ServiceSEO {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    openGraph: {
        title: string;
        description: string;
        type: 'website' | 'article';
        images: { url: string; width: number; height: number; alt: string }[];
    };
    canonical: string;
}

export interface Service {
    id: string;
    slug: string;
    title: string;
    image: string;
    shortDescription: string;
    longDescription: string;
    focusedAreas: string[];
    keyFeatures: string[];
    advantages: string[];
    seo: ServiceSEO;
}

export const servicesData: Service[] = [
    {
        id: 'svc-001',
        slug: 'web-development',
        title: 'Web Development',
        image: '/web-pages-flying-around-web-designers-desk-computer-display-featuring-agency-web-page-pres.png',
        shortDescription: 'Architecting high-performance, secure, and fully responsive web ecosystems optimized for seamless user experiences and maximum conversion rates.',
        longDescription: 'We build scalable, future-proof digital foundations using modern frameworks like Next.js and React. Our development process prioritizes Core Web Vitals, accessibility (WCAG), and robust security protocols to ensure your web application not only looks stunning but performs flawlessly under any load.',
        focusedAreas: [
            'Engineering responsive, high-fidelity user interfaces utilizing modular CSS architectures and reusable Component designs to guarantee smooth user flows.',
            'Designing and developing serverless API architectures, custom backend microservices, and database models optimized for heavy enterprise workloads.',
            'Integrating headless content management systems (CMS) and secure, PCI-compliant payment gateways to streamline product management and online sales.',
            'Building Progressive Web Applications (PWA) that provide offline accessibility, fast loading speeds, and push notifications directly to user devices.'
        ],
        keyFeatures: [
            'Server-Side Rendering (SSR) & Static Site Generation (SSG)',
            'Advanced API integrations and third-party webhooks',
            'OWASP-compliant security measures and data encryption',
            'Cross-browser and cross-device responsive testing'
        ],
        advantages: [
            'Lightning-fast load times leading to higher search rankings',
            'Significantly improved conversion rates through optimized UX',
            'Future-proof scalability to handle business growth',
            'Reduced maintenance costs through modular, clean code'
        ],
        seo: {
            metaTitle: 'Custom Web Development Services | High-Performance Next.js Solutions',
            metaDescription: 'Architecting high-performance, secure, and fully responsive web ecosystems. Maximize conversions with our expert Next.js and React web development services.',
            keywords: ['custom web development', 'Next.js development', 'responsive web design', 'high-performance websites', 'web application development'],
            openGraph: {
                title: 'Custom Web Development Services | High-Performance Solutions',
                description: 'Architecting high-performance, secure, and fully responsive web ecosystems optimized for seamless user experiences.',
                type: 'website',
                images: [{ url: '/og-images/web-development.jpg', width: 1200, height: 630, alt: 'Web Development Services' }]
            },
            canonical: 'https://yourdomain.com/services/web-development'
        }
    },
    {
        id: 'svc-002',
        slug: 'search-engine-optimization',
        title: 'Search Engine Optimization (SEO)',
        image: '/blue-yellow-megaphone-with-word-seo-it.png',
        shortDescription: 'Enhancing organic discoverability by aligning your site infrastructure with modern search algorithms to drive targeted, high-intent traffic.',
        longDescription: 'Our holistic SEO approach goes beyond basic keyword stuffing. We conduct deep technical audits, optimize semantic HTML structures, and build authoritative backlink profiles to ensure your brand dominates search engine results pages (SERPs) for terms that actually drive revenue.',
        focusedAreas: [
            'Optimizing underlying website architectures, URL structures, XML sitemaps, and server header responses to maximize crawling efficiency by search engine bots.',
            'Structuring semantic HTML layouts, optimizing header tags (H1-H6), and writing keyword-optimized copy to improve search indexing and relevance.',
            'Securing natural, high-authority backlink profiles from reputable publishers through strategic digital PR, guest columns, and targeted outreach.',
            'Enhancing regional visibility by setting up Google Business Profiles, managing local citations, and targeting geo-specific search intent.'
        ],
        keyFeatures: [
            'Comprehensive keyword gap and competitor analysis',
            'Schema markup and structured data implementation',
            'Continuous rank tracking and algorithm update monitoring',
            'Monthly transparent reporting with actionable insights'
        ],
        advantages: [
            'Sustainable, long-term organic traffic growth',
            'Higher domain authority and industry trust',
            'Significantly reduced Customer Acquisition Cost (CAC)',
            'Compounding ROI over time compared to paid channels'
        ],
        seo: {
            metaTitle: 'Professional SEO Services | Drive Organic Traffic & Rankings',
            metaDescription: 'Enhance organic discoverability with our data-driven SEO services. We align your infrastructure with modern algorithms to drive high-intent traffic.',
            keywords: ['SEO services', 'search engine optimization', 'technical SEO', 'organic traffic growth', 'local SEO experts'],
            openGraph: {
                title: 'Professional SEO Services | Drive Organic Traffic',
                description: 'Enhancing organic discoverability by aligning your site infrastructure with modern search algorithms.',
                type: 'website',
                images: [{ url: '/og-images/seo.jpg', width: 1200, height: 630, alt: 'SEO Services' }]
            },
            canonical: 'https://yourdomain.com/services/search-engine-optimization'
        }
    },
    {
        id: 'svc-003',
        slug: 'search-engine-marketing',
        title: 'Search Engine Marketing (SEM)',
        image: '/startup-business-concept.png',
        shortDescription: 'Designing high-yield, hyper-targeted paid acquisition frameworks across major networks to deliver instant market visibility and ROI.',
        longDescription: 'We engineer data-driven PPC campaigns that put your brand in front of ready-to-buy customers. From granular audience segmentation to automated bidding strategies, we manage your ad spend with the precision of a financial portfolio, maximizing every dollar.',
        focusedAreas: [
            'Configuring, tracking, and optimizing paid search ad structures on Google Ads and Bing Ads to target high-intent transactional search keywords.',
            'Developing dynamic product listing ad feeds for e-commerce sites to feature catalogs directly in search results and drive immediate sales.',
            'Conducting multivariate A/B testing on dedicated landing pages to increase layout relevance, quality scores, and lower acquisition cost.',
            'Deploying advanced tracking pixels, custom UTM tags, and multi-touch attribution models to track exact returns on every advertising campaign.'
        ],
        keyFeatures: [
            'A/B testing for ad copy, extensions, and landing pages',
            'Advanced audience layering and custom intent segments',
            'Smart bidding strategies (tCPA, tROAS) optimization',
            'Granular conversion tracking and attribution modeling'
        ],
        advantages: [
            'Immediate, measurable influx of qualified traffic',
            'Highly predictable and scalable Return on Ad Spend (ROAS)',
            'Precise demographic, geographic, and behavioral targeting',
            'Full transparency with real-time campaign dashboards'
        ],
        seo: {
            metaTitle: 'Expert SEM & PPC Management | Maximize Your ROI',
            metaDescription: 'Design high-yield, hyper-targeted paid acquisition frameworks. Get instant market visibility and measurable ROI with our SEM services.',
            keywords: ['SEM services', 'PPC management', 'Google Ads experts', 'paid search marketing', 'ROI optimization'],
            openGraph: {
                title: 'Expert SEM & PPC Management | Maximize Your ROI',
                description: 'Designing high-yield, hyper-targeted paid acquisition frameworks across major networks to deliver instant market visibility.',
                type: 'website',
                images: [{ url: '/og-images/sem.jpg', width: 1200, height: 630, alt: 'SEM Services' }]
            },
            canonical: 'https://yourdomain.com/services/search-engine-marketing'
        }
    },
    {
        id: 'svc-004',
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        image: '/social-media-marketing-concept-marketing-with-applications.png',
        shortDescription: 'Amplifying your brand’s voice across digital platforms and creating strategic engagement plans to build community loyalty.',
        longDescription: 'We transform passive followers into active brand advocates. By leveraging platform-specific algorithms and cultural trends, we craft compelling social strategies that foster genuine community engagement and drive measurable business outcomes.',
        focusedAreas: [
            'Formulating platform-tailored social campaigns for LinkedIn, Instagram, TikTok, and X to foster brand consistency and visual storytelling.',
            'Monitoring user interactions, replying to queries, and analyzing overall sentiment to maintain an active, positive community presence.',
            'Targeting custom user segments with paid social ad creatives integrated directly into client acquisition and remarketing funnels.',
            'Defining the brand\'s unique tone of voice, content style guides, and standard protocols for PR issues and crisis management.'
        ],
        keyFeatures: [
            'Data-backed content calendars and thematic pillars',
            'High-quality native video and graphic asset creation',
            'Real-time engagement and sentiment analysis',
            'Cross-platform influencer collaboration coordination'
        ],
        advantages: [
            'Enhanced top-of-funnel brand awareness and recall',
            'Direct, two-way communication channel with your audience',
            'Viral growth potential through shareable, trend-aligned content',
            'Valuable first-party data and audience behavior insights'
        ],
        seo: {
            metaTitle: 'Strategic Social Media Marketing | Build Community & Loyalty',
            metaDescription: 'Amplify your brand’s voice across digital platforms. We create strategic engagement plans to build community loyalty and drive growth.',
            keywords: ['social media marketing', 'community management', 'social media strategy', 'brand awareness', 'social media advertising'],
            openGraph: {
                title: 'Strategic Social Media Marketing | Build Community',
                description: 'Amplifying your brand’s voice across digital platforms and creating strategic engagement plans to build community loyalty.',
                type: 'website',
                images: [{ url: '/og-images/social-media.jpg', width: 1200, height: 630, alt: 'Social Media Marketing' }]
            },
            canonical: 'https://yourdomain.com/services/social-media-marketing'
        }
    },
    {
        id: 'svc-005',
        slug: 'influencer-marketing',
        title: 'Influencer Marketing',
        image: '/11631502_4572974.jpg',
        shortDescription: 'Collaborating with trusted digital creators and domain experts to expand your market reach and build authentic brand credibility.',
        longDescription: 'We bridge the gap between your brand and highly engaged niche audiences. By vetting and partnering with authentic creators whose values align with yours, we generate high-converting User-Generated Content (UGC) and drive trust at scale.',
        focusedAreas: [
            'Sourcing, negotiating contracts, and directing custom content campaigns with micro-influencers and macro-creators aligned with brand aesthetics.',
            'Structuring scalable affiliate networks and long-term ambassador campaigns that reward creators for driving verified digital leads.',
            'Formulating detailed script guidelines, hooks, and video parameters to ensure creator assets match performance objectives.',
            'Evaluating campaign returns, attribution metrics, and maintaining strict compliance with FTC disclosures and regional regulations.'
        ],
        keyFeatures: [
            'Access to a proprietary, vetted network of digital creators',
            'Authentic content co-creation rather than scripted ads',
            'Performance-based compensation and unique discount codes',
            'Comprehensive campaign analytics and sentiment reporting'
        ],
        advantages: [
            'High trust transfer from creator to your brand',
            'Direct access to highly targeted, niche demographic segments',
            'Cost-effective production of authentic User-Generated Content',
            'Improved conversion rates through social proof'
        ],
        seo: {
            metaTitle: 'Influencer Marketing Agency | Authentic Brand Partnerships',
            metaDescription: 'Collaborate with trusted digital creators to expand market reach. We build authentic brand credibility through strategic influencer marketing.',
            keywords: ['influencer marketing', 'creator partnerships', 'UGC campaigns', 'brand ambassadors', 'micro influencer marketing'],
            openGraph: {
                title: 'Influencer Marketing Agency | Authentic Brand Partnerships',
                description: 'Collaborating with trusted digital creators and domain experts to expand your market reach and build authentic brand credibility.',
                type: 'website',
                images: [{ url: '/og-images/influencer.jpg', width: 1200, height: 630, alt: 'Influencer Marketing' }]
            },
            canonical: 'https://yourdomain.com/services/influencer-marketing'
        }
    },
    {
        id: 'svc-006',
        slug: 'content-marketing',
        title: 'Content Marketing',
        image: '/2150254625.jpg',
        shortDescription: 'Crafting authoritative, value-driven narratives that engage your audience, establish industry leadership, and nurture customer relationships.',
        longDescription: 'Content is the engine of modern digital marketing. We produce deeply researched, SEO-optimized, and highly engaging content assets that answer your customers\' questions, solve their problems, and guide them seamlessly through the buyer\'s journey.',
        focusedAreas: [
            'Authoring technical whitepapers, in-depth corporate blogs, and guest articles to establish authoritative thought leadership positions.',
            'Developing gated assets, including templates, spreadsheets, and calculators, designed to generate high-quality marketing leads.',
            'Creating detailed scripts, storyboards, and producing educational videos optimized for YouTube, LinkedIn, and social media platforms.',
            'Conducting granular audits of existing articles, mapping keyword density, and refreshing legacy content to maintain search rankings.'
        ],
        keyFeatures: [
            'Data-backed content calendars and thematic pillars',
            'High-quality native video and graphic asset creation',
            'Real-time engagement and sentiment analysis',
            'Cross-platform influencer collaboration coordination'
        ],
        advantages: [
            'Establishes undeniable thought leadership in your industry',
            'Fuels and amplifies both SEO and SEM efforts',
            'Nurtures cold leads into warm prospects automatically',
            'Builds long-term, compounding brand equity'
        ],
        seo: {
            metaTitle: 'B2B Content Marketing Services | Drive Engagement & Leads',
            metaDescription: 'Craft authoritative, value-driven narratives. Our content marketing services establish industry leadership and nurture customer relationships.',
            keywords: ['content marketing', 'B2B content strategy', 'thought leadership', 'SEO copywriting', 'content distribution'],
            openGraph: {
                title: 'B2B Content Marketing Services | Drive Engagement',
                description: 'Crafting authoritative, value-driven narratives that engage your audience and establish industry leadership.',
                type: 'website',
                images: [{ url: '/og-images/content-marketing.jpg', width: 1200, height: 630, alt: 'Content Marketing' }]
            },
            canonical: 'https://yourdomain.com/services/content-marketing'
        }
    },
    {
        id: 'svc-007',
        slug: 'email-marketing',
        title: 'Email Marketing',
        image: '/businessman-sending-email-by-laptop-computer-customer-business-contact-communication-email-icon-email-marketing-concept-send-email-newsletter-online-working-internet-network.png',
        shortDescription: 'Deploying automated, personalized email nurture sequences designed to turn potential leads into lifetime brand advocates.',
        longDescription: 'Email remains the highest-ROI digital channel. We design sophisticated, behavior-triggered automation workflows that deliver the right message, to the right person, at the exact right moment, maximizing lifetime value (LTV).',
        focusedAreas: [
            'Building responsive HTML emails, crafting catchy subject lines, and setting up multi-step automated welcome lists for new signups.',
            'Configuring behavioral triggers to recover abandoned shopping carts, browse sessions, and recommend personalized products.',
            'Creating highly targeted customer segments based on buying habits, average order value, and previous email click behavior.',
            'Optimizing sender reputation, monitoring bounce rates, and cleaning list databases to ensure maximum inbox delivery.'
        ],
        keyFeatures: [
            'Advanced list segmentation based on behavior and demographics',
            'Dynamic content personalization and merge tags',
            'Rigorous A/B testing for subject lines, send times, and CTAs',
            'Proactive deliverability optimization and spam filter avoidance'
        ],
        advantages: [
            'Consistently delivers the highest ROI of any digital marketing channel',
            'Provides a direct, owned communication line to your audience',
            'Highly automated, requiring minimal ongoing manual intervention',
            'Granular, measurable engagement metrics (opens, clicks, conversions)'
        ],
        seo: {
            metaTitle: 'Email Marketing Automation | Nurture Leads & Boost LTV',
            metaDescription: 'Deploy automated, personalized email nurture sequences. Turn potential leads into lifetime brand advocates with our expert email marketing.',
            keywords: ['email marketing', 'marketing automation', 'email nurture sequences', 'abandoned cart recovery', 'email deliverability'],
            openGraph: {
                title: 'Email Marketing Automation | Nurture Leads & Boost LTV',
                description: 'Deploying automated, personalized email nurture sequences designed to turn potential leads into lifetime brand advocates.',
                type: 'website',
                images: [{ url: '/og-images/email-marketing.jpg', width: 1200, height: 630, alt: 'Email Marketing' }]
            },
            canonical: 'https://yourdomain.com/services/email-marketing'
        }
    },
    {
        id: 'svc-008',
        slug: 'product-photography',
        title: 'Product Photography & Visual Assets',
        image: '/115463.jpg',
        shortDescription: 'Delivering high-fidelity visual assets and precision photography that elevate your digital product catalog and highlight brand excellence.',
        longDescription: 'In e-commerce and digital marketing, visuals are your primary salesperson. We provide studio-grade photography and videography that captures every detail, ensuring your products look as premium in the digital realm as they do in reality.',
        focusedAreas: [
            'Shooting studio-lit, high-resolution product photography with pure white backgrounds for catalogs, Amazon listings, and online shops.',
            'Composing lifestyle image setups showing products in real-world contexts to build trust and tell visual stories.',
            'Developing interactive 360-degree views, dynamic zoom assets, and custom WebP visual files for optimized website loading.',
            'Retouching RAW images, correcting colors to match physical samples, and removing reflections to produce pristine visual assets.'
        ],
        keyFeatures: [
            'Professional studio lighting and high-resolution capture',
            'Advanced post-production editing and color correction',
            'Color-accurate rendering matching physical products',
            'Multi-platform asset optimization (Web, Social, Print)'
        ],
        advantages: [
            'Significantly reduces product return rates due to accurate representation',
            'Increases add-to-cart rates and overall conversion metrics',
            'Elevates perceived brand value and premium positioning',
            'Provides a versatile library of assets for all marketing channels'
        ],
        seo: {
            metaTitle: 'Professional Product Photography | High-Fidelity Visual Assets',
            metaDescription: 'Deliver high-fidelity visual assets and precision photography. Elevate your digital product catalog and highlight brand excellence.',
            keywords: ['product photography', 'e-commerce photography', 'professional product shots', 'visual assets', 'lifestyle photography'],
            openGraph: {
                title: 'Professional Product Photography | High-Fidelity Visual Assets',
                description: 'Delivering high-fidelity visual assets and precision photography that elevate your digital product catalog and highlight brand excellence.',
                type: 'website',
                images: [{ url: '/og-images/product-photography.jpg', width: 1200, height: 630, alt: 'Product Photography' }]
            },
            canonical: 'https://yourdomain.com/services/product-photography'
        }
    }
];