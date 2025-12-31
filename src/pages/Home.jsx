import { useState, useEffect } from 'react';
import Logo from '../assets/images/logo/Tageo.png';
import Banner1 from '../assets/images/bg-banners/banner_products_1.png';
import Banner2 from '../assets/images/bg-banners/banner_products_2.png';
import Banner3 from '../assets/images/bg-banners/banner_products_3.png';
import Banner4 from '../assets/images/bg-banners/banner_products_4.png';
import Banner5 from '../assets/images/bg-banners/banner1.png';

// Detergents
import Detergent1L from '../assets/images/Detergents/Detergent Liquid(1l).jpeg';
import Detergent225ml from '../assets/images/Detergents/Detergent liq(225ml).jpeg';
import Detergent500ml from '../assets/images/Detergents/Detergent liq(500ml).jpeg';
import DetergentSpout1L from '../assets/images/Detergents/detergent liq(spout pouch-1l).jpeg';

// Dishwash
import DishwashGreenApple225 from '../assets/images/Dishwash/Dishwash(Green apple)-225ml.jpeg';
import DishwashGreenApple from '../assets/images/Dishwash/Dishwash(Green apple).jpeg';
import DishwashOrange from '../assets/images/Dishwash/Dishwash(Orange).jpeg';
import DishwashLemon225 from '../assets/images/Dishwash/Dishwash(lemon yellow)-225ml.jpeg';
import DishwashLemon from '../assets/images/Dishwash/Dishwash(lemon yellow).jpeg';
import DishwashOrange225 from '../assets/images/Dishwash/dishwash(orange)-225ml.jpeg';

// Floor Cleaner
import FloorJasmine from '../assets/images/Floor Cleaner/Floor cleaner(Jasmine).jpeg';
import FloorLavender from '../assets/images/Floor Cleaner/Floor cleaner(Lavender).jpeg';
import FloorPv200 from '../assets/images/Floor Cleaner/Floor cleaner(Pv)-200ml.jpeg';
import FloorPv from '../assets/images/Floor Cleaner/Floor cleaner(Pv).jpeg';
import FloorRose from '../assets/images/Floor Cleaner/Floor cleaner(Rose).jpeg';
import FloorSandal from '../assets/images/Floor Cleaner/Floor cleaner(Sandal).jpeg';
import FloorJasmine200 from '../assets/images/Floor Cleaner/Floor cleaner(jasmine)-200ml.jpeg';
import FloorLavender200 from '../assets/images/Floor Cleaner/Floor cleaner(lavender)-200ml.jpeg';
import FloorLemon200 from '../assets/images/Floor Cleaner/Floor cleaner(lemon)-200ml.jpeg';
import FloorLemon500 from '../assets/images/Floor Cleaner/Floor cleaner(lemon)-500ml.jpeg';
import FloorRose200 from '../assets/images/Floor Cleaner/Floor cleaner(rose)-200ml.jpeg';
import FloorSandal200 from '../assets/images/Floor Cleaner/Floor cleaner(sandalwood)-200ml.jpeg';
import FloorLemon1L from '../assets/images/Floor Cleaner/floor cleaner(1l)-Lemon yellow.jpeg';

// Phenyle
import PhenyleEpGreen from '../assets/images/phenyle/Phenyle(EP)-GREEN.jpeg';
import PhenyleEpPink from '../assets/images/phenyle/Phenyle(EP)-PINK.jpeg';
import PhenyleEpWhite from '../assets/images/phenyle/Phenyle(EP)-WHITE.jpeg';
import PremPhenyleOrange from '../assets/images/phenyle/Prem Phenyle(Orange).jpeg';
import PremPhenylePink from '../assets/images/phenyle/Prem Phenyle(Pink).jpeg';
import PremPhenyleWhite from '../assets/images/phenyle/Prem Phenyle(White).jpeg';
import PremPhenyleYellow from '../assets/images/phenyle/Prem Phenyle(Yellow).jpeg';
import GamaRose from '../assets/images/phenyle/gama gama (Rose).jpeg';
import GamaPv from '../assets/images/phenyle/gama gama(pv).jpeg';
import GamaOrange from '../assets/images/phenyle/gamagama(orange).jpeg';

// Toilet Cleaner
import Toilet1L from '../assets/images/Toilet cleaner/Toilet cleaner 1l.jpeg';
import Toilet225ml from '../assets/images/Toilet cleaner/Toilet cleaner 225ml.jpeg';
import Toilet500ml from '../assets/images/Toilet cleaner/Toilet cleaner 500ml.jpeg';

// Other Essentials
import BathroomCleaner from '../assets/images/other essentials/Bathroom cleaner.jpeg';
import BleachingPowder from '../assets/images/other essentials/Bleaching powder.jpeg';
import FabricSoftener from '../assets/images/other essentials/Fabric softner(225ml).jpeg';
import GlassCleaner from '../assets/images/other essentials/Glass and Household cleaner.jpeg';
import KitchenCleaner from '../assets/images/other essentials/Kitchen cleaner(475 ml).jpeg';

const productCategories = {
    detergents: {
        name: 'Detergent Liquids',
        tagline: '6-in-1 Powerful Cleaning Action',
        description: 'Tageo Fabric Detergent Liquid delivers a powerful 6-in-1 cleaning action designed to keep your clothes fresh, bright, and well cared for. Its advanced formula effectively fights tough stains, ensures clean rinsing, enhances fabric brightness, eliminates unpleasant odours, and leaves a long-lasting fresh scent—while providing gentle care to your fabrics.',
        benefits: ['Fights tough stains', 'Enhances brightness', 'Long-lasting freshness', 'Gentle on fabrics'],
        products: [
            { name: 'Detergent Liquid 1L', image: Detergent1L, price: 195 },
            { name: 'Detergent Liquid 500ml', image: Detergent500ml, price: 99 },

            { name: 'Detergent Liquid Spout 1L', image: DetergentSpout1L, price: 99 },
        ],
    },
    dishwash: {
        name: 'Dishwashers',
        tagline: 'Powerful Grease-Cutting Formula',
        description: 'Nothing is more frustrating than stubborn food residues that refuse to come off your utensils. Tageo Dishwash Liquid is specially formulated to tackle even the toughest grease and food stains with ease. Just a drop delivers powerful cleaning action, making dishwashing quick and hassle-free.',
        benefits: ['Removes tough grease', 'Eliminates food odour', 'Gentle on hands', 'Sparkling clean finish'],
        products: [
            { name: 'Dishwash Green Apple 500ml', image: DishwashGreenApple, price: 105 },
            { name: 'Dishwash Green Apple 225ml', image: DishwashGreenApple225, price: 49 },
            { name: 'Dishwash Lemon 500ml', image: DishwashLemon, price: 105 },
            { name: 'Dishwash Lemon 225ml', image: DishwashLemon225, price: 49 },
            { name: 'Dishwash Orange 500ml', image: DishwashOrange, price: 105 },
            { name: 'Dishwash Orange 225ml', image: DishwashOrange225, price: 49 },
        ],
    },
    floorCleaner: {
        name: 'Floor Cleaners',
        tagline: 'Multi-Surface Shine & Protection',
        description: 'Keep every floor in your home spotless and hygienic with Tageo Multi-Surface Floor Cleaner. Designed for granite, marble, ceramic, mosaic, cement, and wooden floors, it effectively removes tough stains, dirt, and grime while disinfecting for a healthier living environment.',
        benefits: ['Works on all surfaces', 'Disinfects & cleans', 'Restores natural shine', 'Fresh fragrance'],
        products: [
            { name: 'Floor Cleaner Jasmine 500ml', image: FloorJasmine, price: 99 },
            { name: 'Floor Cleaner Jasmine 200ml', image: FloorJasmine200, price: 42 },
            { name: 'Floor Cleaner Lavender 500ml', image: FloorLavender, price: 99 },
            { name: 'Floor Cleaner Lavender 200ml', image: FloorLavender200, price: 42 },
            { name: 'Floor Cleaner Rose 500ml', image: FloorRose, price: 99 },
            { name: 'Floor Cleaner Rose 200ml', image: FloorRose200, price: 42 },
            { name: 'Floor Cleaner Sandal 500ml', image: FloorSandal, price: 99 },
            { name: 'Floor Cleaner Sandal 200ml', image: FloorSandal200, price: 42 },
            { name: 'Floor Cleaner Lemon 975ml', image: FloorLemon1L, price: 189 },
            { name: 'Floor Cleaner Lemon 500ml', image: FloorLemon500, price: 99 },
            { name: 'Floor Cleaner Lemon 200ml', image: FloorLemon200, price: 42 },
            { name: 'Floor Cleaner PV 975ml', image: FloorPv, price: 189 },
            { name: 'Floor Cleaner PV 200ml', image: FloorPv200, price: 42 },
        ],
    },
    phenyle: {
        name: 'Phenyle',
        tagline: 'Premium Graded Disinfectant',
        description: "Tageo's Premium Graded Phenyle is a highly concentrated disinfectant solution designed to kill germs and keep any space fresh and odor-free. Its powerful formula promotes a healthier environment by helping prevent the spread of diseases.",
        benefits: ['Kills germs effectively', 'Long-lasting fragrance', 'Multiple aromas', 'Hospital-grade quality'],
        products: [
            { name: 'Phenyle EP Green', image: PhenyleEpGreen,price:79 },
            { name: 'Phenyle EP Pink', image: PhenyleEpPink,price:79 },
            { name: 'Phenyle EP White', image: PhenyleEpWhite,price:79 },
            { name: 'Premium Phenyle Orange', image: PremPhenyleOrange,price:59 },
            { name: 'Premium Phenyle Pink', image: PremPhenylePink,price:59 },
            { name: 'Premium Phenyle White', image: PremPhenyleWhite,price:59 },
            { name: 'Premium Phenyle Yellow', image: PremPhenyleYellow,price:59 },
            { name: 'Gama Gama Rose', image: GamaRose,price:99 },
            { name: 'Gama Gama PV', image: GamaPv,price:69 },
            { name: 'Gama Gama Orange', image: GamaOrange,price:89 },
        ],
    },
    toiletCleaner: {
        name: 'Toilet Cleaners',
        tagline: 'Deep Clean & Germ Protection',
        description: 'Maintaining a clean toilet is essential for hygiene and health. Tageo Toilet Cleaner is specially formulated to provide deep cleaning that helps prevent the build-up of stubborn stains while inhibiting the growth of germs and bacteria.',
        benefits: ['Removes tough deposits', 'Kills germs & bacteria', 'Fresh fragrance', 'Long-lasting shine'],
        products: [
            { name: 'Toilet Cleaner 1L', image: Toilet1L, price: 183 },
            { name: 'Toilet Cleaner 500ml', image: Toilet500ml, price: 95 },
            { name: 'Toilet Cleaner 225ml', image: Toilet225ml, price: 42 },
        ],
    },
    otherEssentials: {
        name: 'Other Essentials',
        tagline: 'Essential Home Care',
        description: 'Complete your home cleaning arsenal with our range of essential cleaning products. From kitchen to bathroom, we have everything you need to keep your home sparkling clean and fresh.',
        benefits: ['Versatile cleaning', 'Specialized formulas', 'Tough on stains', 'Value for money'],
        products: [
            { name: 'Kitchen Cleaner 475ml', image: KitchenCleaner, price: 99 },
            { name: 'Bathroom Cleaner 475ml', image: BathroomCleaner, price: 99 },
            { name: 'Glass Cleaner 475ml', image: GlassCleaner, price: 89 },
            { name: 'Fabric Softener 225ml', image: FabricSoftener, price: 61 },
            { name: 'Bleaching Powder 100gm', image: BleachingPowder, price: 12 },
        ],
    },
};

const categoryKeys = Object.keys(productCategories);

const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];

export const Home = () => {
    const [activeCategory, setActiveCategory] = useState('detergents');
    const [currentBanner, setCurrentBanner] = useState(0);

    // Auto-slide banners
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const captions = [
        "Keeping Homes Cleaner, Healthier, Happier. ✨",
        "Care for Your Home, Clean for Your Life. ✨",
    ];

    const currentProducts = productCategories[activeCategory].products;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tageo Home Care Products",
        "image": "https://tageohomecare.in/assets/Tageo.png", 
        "telephone": "0461-2323021",
        "url": "https://tageohomecare.in",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tageo Home Care",
            "addressLocality": "Tamil Nadu", 
            "postalCode": "628002", 
            "addressCountry": "IN"
        },
        "priceRange": "₹42 - ₹195",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
    };

    return (
        <div className="min-h-screen w-screen root overflow-x-hidden">
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <div className="ticker-wrapper">
                <div className="ticker-content">
                    {[...captions, ...captions].map((caption, index) => (
                        <span key={index} className="ticker-item">
                            {caption}
                        </span>
                    ))}
                </div>
            </div>
            <div className='w-full flex flex-col justify-center p-[34px] items-center border-b-[0.5px] border-[#DADADA]'>
                <h1>
                    <img src={Logo} className='h-[200px] w-[200px] flex' alt="Tageo Home Care Products"/>
                </h1>
                <nav className={`hidden md:flex flex-row gap-x-4 lg:gap-x-8 mt-4`}>
                    <span className='px-5 py-2.5 rounded-full bg-[#495B41]/5 hover:bg-[#495B41] text-[15px] text-[#353935] hover:text-white font-semibold transition-all duration-300 cursor-default whitespace-nowrap'>
                        Detergent Liquids
                    </span>
                    <span className='px-5 py-2.5 rounded-full bg-[#495B41]/5 hover:bg-[#495B41] text-[15px] text-[#353935] hover:text-white font-semibold transition-all duration-300 cursor-default whitespace-nowrap'>
                        Dishwashers
                    </span>
                    <span className='px-5 py-2.5 rounded-full bg-[#495B41]/5 hover:bg-[#495B41] text-[15px] text-[#353935] hover:text-white font-semibold transition-all duration-300 cursor-default whitespace-nowrap'>
                        Floor Cleaners
                    </span>
                    <span className='px-5 py-2.5 rounded-full bg-[#495B41]/5 hover:bg-[#495B41] text-[15px] text-[#353935] hover:text-white font-semibold transition-all duration-300 cursor-default whitespace-nowrap'>
                        Phenyle
                    </span>
                    <span className='px-5 py-2.5 rounded-full bg-[#495B41]/5 hover:bg-[#495B41] text-[15px] text-[#353935] hover:text-white font-semibold transition-all duration-300 cursor-default whitespace-nowrap'>
                        Toilet Cleaners
                    </span>
                    <span className='px-5 py-2.5 rounded-full bg-[#495B41]/5 hover:bg-[#495B41] text-[15px] text-[#353935] hover:text-white font-semibold transition-all duration-300 cursor-default whitespace-nowrap'>
                        Other Essentials
                    </span>
                </nav>
            </div>
            <div className='flex flex-col justify-center items-center p-8 md:p-12'>
                <h2 className='text-[#495B41] text-[16px] md:text-[24px] font-bold mb-[24px]'>Complete Cleaning Solutions for Every Home</h2>
                <p className='text-[#353935] text-[16px] md:text-[17px] leading-[23px] text-center max-w-4xl'>Whether it's toilet cleaners, dishwash liquids, floor cleaners, or detergent liquids—TAGEO brings you effective, reliable, and easy-to-use products that make everyday cleaning effortless.</p>
            </div>
            {/* Banner Slider */}
            <div className='w-full relative overflow-hidden h-auto md:h-[400px] lg:h-[500px] md:bg-gradient-to-br md:from-[#495B41]/10 md:via-[#6B8E5D]/5 md:to-[#495B41]/10'>
                {/* Decorative background pattern for md screens */}
                <div className='hidden md:block absolute inset-0 opacity-20' style={{
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, #495B41 1px, transparent 1px),
                        radial-gradient(circle at 80% 50%, #6B8E5D 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
                <div
                    className='flex transition-transform duration-700 ease-in-out h-full relative z-10'
                    style={{ transform: `translateX(-${currentBanner * 100}%)` }}
                >
                    {banners.map((banner, index) => (
                        <img
                            key={index}
                            src={banner}
                            className='w-full min-w-full h-auto md:h-full object-contain'
                            alt={`Banner ${index + 1}`}
                        />
                    ))}
                </div>
                {/* Navigation dots */}
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-[#495B41]/40 backdrop-blur-lg rounded-full px-4 py-2.5 border border-white/20 z-20'>
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBanner(index)}
                            className={`h-3 rounded-full transition-all duration-300 cursor-pointer border border-white/50 ${
                                currentBanner === index 
                                    ? 'bg-[#495B41] w-8 border-[#495B41]' 
                                    : 'bg-white/40 w-3 hover:bg-white/70'
                            }`}
                        />
                    ))}
                </div>
                {/* Arrow buttons */}
                <button
                    onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
                    className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#495B41]/40 backdrop-blur-lg hover:bg-[#495B41]/70 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer border border-white/20 z-20'
                >
                    <svg className='w-5 h-5 text-white drop-shadow-md' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
                    className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#495B41]/40 backdrop-blur-lg hover:bg-[#495B41]/70 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer border border-white/20 z-20'
                >
                    <svg className='w-5 h-5 text-white drop-shadow-md' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
            <div className='p-4 md:p-8 flex items-center justify-center'>
                <h2 className='text-[#495B41] text-[16px] md:text-[24px] font-bold'>Our Products</h2>
            </div>
            
            {/* Product Tabs */}
            <div className='w-full px-4 md:px-8'>
                <div className='flex flex-wrap justify-center gap-2 md:gap-4 mb-8'>
                    {categoryKeys.map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer ${
                                activeCategory === key
                                    ? 'bg-[#495B41] text-white shadow-lg'
                                    : 'bg-gray-100 text-[#353935] hover:bg-gray-200'
                            }`}
                        >
                            {productCategories[key].name}
                        </button>
                    ))}
                </div>

                {/* Category Description Card */}
                <div className='mb-10 bg-gradient-to-r from-[#495B41]/10 via-[#6B8E5D]/10 to-[#495B41]/10 rounded-2xl p-6 md:p-8 border border-[#495B41]/20'>
                    <div className='text-center mb-4'>
                        <span className='inline-block px-4 py-1 bg-[#495B41] text-white text-xs md:text-sm font-semibold rounded-full mb-3'>
                            {productCategories[activeCategory].tagline}
                        </span>
                        <h3 className='text-[#353935] text-lg md:text-xl font-bold mb-3'>
                            {productCategories[activeCategory].name}
                        </h3>
                        <p className='text-[#555] text-sm md:text-base leading-relaxed max-w-3xl mx-auto'>
                            {productCategories[activeCategory].description}
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-2 md:gap-3 mt-5'>
                        {productCategories[activeCategory].benefits.map((benefit, idx) => (
                            <span
                                key={idx}
                                className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs md:text-sm font-medium text-[#495B41] shadow-sm border border-[#495B41]/20'
                            >
                                <svg className='w-4 h-4 text-[#6B8E5D]' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'/>
                                </svg>
                                {benefit}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* Product Grid */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 pb-12'>
                    {currentProducts.map((product, index) => (
                        <div
                            key={index}
                            className='group relative bg-white rounded-2xl overflow-hidden h-[300px] md:h-[350px] flex flex-col border border-gray-100 hover:border-[#495B41]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'
                            style={{
                                boxShadow: '0 4px 20px rgba(73, 91, 65, 0.08)',
                            }}
                        >
                            {/* Decorative corner accent */}
                            <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#495B41]/10 to-transparent rounded-bl-full'></div>

                            {/* Price Badge */}
                            {product.price && (
                                <div className='absolute top-3 left-3 z-20 flex flex-col items-center'>
                                    <div className='bg-gradient-to-br from-[#495B41] to-[#6B8E5D] text-white px-3 py-2 rounded-xl shadow-lg border-2 border-white/30 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300'>
                                        <div className='flex items-start gap-0.5'>
                                            <span className='text-[10px] font-semibold mt-0.5'>₹</span>
                                            <span className='text-xl md:text-2xl font-bold leading-none'>{product.price}</span>
                                        </div>
                                        <div className='text-[9px] md:text-[10px] text-center text-white/90 font-medium mt-0.5 uppercase tracking-wide'>MRP</div>
                                    </div>
                                </div>
                            )}

                            {/* Image container with pure white background and decorative dots */}
                            <div className='h-[200px] md:h-[240px] flex items-center justify-center p-5 bg-white relative overflow-hidden'>
                                {/* Scattered green dots pattern */}
                                <div className='absolute inset-0 opacity-40' style={{
                                    backgroundImage: `
                                        radial-gradient(circle, #495B41 1px, transparent 1px),
                                        radial-gradient(circle, #6B8E5D 0.5px, transparent 0.5px)
                                    `,
                                    backgroundSize: '40px 40px, 25px 25px',
                                    backgroundPosition: '0 0, 12px 18px'
                                }}></div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='max-w-full max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>
                            
                            {/* Product name with elegant styling */}
                            <div className='p-4 md:p-5 flex-1 flex items-center justify-center bg-gradient-to-t from-[#495B41]/5 to-transparent'>
                                <h3 className='text-[#353935] text-sm md:text-base font-semibold text-center leading-tight group-hover:text-[#495B41] transition-colors duration-300'>
                                    {product.name}
                                </h3>
                            </div>
                            
                            {/* Bottom accent line */}
                            <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#495B41] via-[#6B8E5D] to-[#495B41] opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Us Section */}
            <footer className='w-full bg-[#495B41] text-white mt-12'>
                <div className='max-w-6xl mx-auto px-6 py-10 md:py-12'>
                    <div className='text-center mb-8'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-2'>Contact Us</h2>
                        <div className='w-20 h-1 bg-white/50 mx-auto rounded-full'></div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
                        {/* Company Name */}
                        <div className='text-center'>
                            <h3 className='text-xl md:text-2xl font-bold tracking-wide'>TAGEO HOME CARE PRODUCTS</h3>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-8'>
                        {/* Email */}
                        <a href='mailto:tageohomecareproducts@gmail.com' className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
                            <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
                                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
                                </svg>
                            </div>
                            <span className='text-sm md:text-base'>tageohomecareproducts@gmail.com</span>
                        </a>

                        {/* Phone */}
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'/>
                                </svg>
                            </div>
                            <span className='text-sm md:text-base'>0461-2323021 | 7548839021</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className='text-center mt-10 pt-6 border-t border-white/20'>
                        <p className='text-sm text-white/70'>© 2025 Tageo Home Care Products. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};